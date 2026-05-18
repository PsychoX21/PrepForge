/**
 * Standalone group exporter script — run with: ts-node src/seed/export-group.ts <groupId>
 * If no groupId is provided, it exports the default system group.
 */
import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';
import * as path from 'path';

const prisma = new PrismaClient();

async function exportGroup() {
  const args = process.argv.slice(2);
  let groupId = args[0];

  console.log('🔍 Initializing PrepForge Group Exporter...\n');

  if (!groupId) {
    // Try to find the default group
    const defaultGroup = await prisma.group.findFirst({
      where: { isDefault: true }
    });

    if (!defaultGroup) {
      console.error('❌ Error: No Group ID provided and no default group found in database.');
      process.exit(1);
    }
    groupId = defaultGroup.id;
    console.log(`ℹ️ No Group ID provided. Automatically exporting Default Group: "${defaultGroup.name}" (${groupId})`);
  } else {
    // Verify the group exists
    const group = await prisma.group.findUnique({
      where: { id: groupId }
    });
    if (!group) {
      console.error(`❌ Error: Group with ID "${groupId}" was not found.`);
      process.exit(1);
    }
    console.log(`📦 Exporting Custom Group: "${group.name}" (${groupId})`);
  }

  // Fetch the full recursive hierarchy
  const tracks = await prisma.track.findMany({
    where: { groupId },
    orderBy: { order: 'asc' },
    include: {
      categories: {
        orderBy: { order: 'asc' },
        include: {
          resources: {
            orderBy: { order: 'asc' },
            include: {
              units: {
                orderBy: { order: 'asc' },
                include: {
                  subUnits: {
                    orderBy: { order: 'asc' },
                    include: {
                      items: {
                        orderBy: { order: 'asc' }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  });

  console.log(`Found ${tracks.length} tracks. Formatting to SeedData type structure...`);

  // Strip database IDs, keys, timestamps, etc.
  const seedTracks = tracks.map(track => ({
    name: track.name,
    description: track.description || '',
    icon: track.icon || '',
    color: track.color || '',
    order: track.order,
    categories: track.categories.map(cat => ({
      name: cat.name,
      order: cat.order,
      description: cat.description || undefined,
      icon: cat.icon || undefined,
      resources: cat.resources.map(res => ({
        name: res.name,
        type: res.type,
        order: res.order,
        description: res.description || undefined,
        url: res.url || undefined,
        isMustDo: res.isMustDo,
        units: res.units.map(unit => ({
          name: unit.name,
          order: unit.order,
          description: unit.description || undefined,
          subUnits: unit.subUnits.map(subUnit => ({
            name: subUnit.name,
            order: subUnit.order,
            description: subUnit.description || undefined,
            items: subUnit.items.map(item => ({
              name: item.name,
              type: item.type,
              order: item.order,
              description: item.description || undefined,
              url: item.url || undefined,
              difficulty: item.difficulty || undefined
            }))
          }))
        }))
      }))
    }))
  }));

  const outputDir = path.join(__dirname, 'exported');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Write as clean JSON seed data
  const jsonPath = path.join(outputDir, 'custom-default-content.json');
  fs.writeFileSync(jsonPath, JSON.stringify(seedTracks, null, 2), 'utf8');

  // Also write as clean TypeScript seed module
  const tsContent = `/**
 * Custom Seed Data exported on ${new Date().toISOString()}
 */

export const CUSTOM_DEFAULT_TRACKS = ${JSON.stringify(seedTracks, null, 2)};
`;

  const tsPath = path.join(outputDir, 'custom-default-content.ts');
  fs.writeFileSync(tsPath, tsContent, 'utf8');

  console.log(`\n🎉 Success!`);
  console.log(`📁 Exported JSON: ${jsonPath}`);
  console.log(`📁 Exported TypeScript Module: ${tsPath}`);
  console.log('\n💡 To use this as your new default content in PrepForge:');
  console.log('1. Copy the contents or replace `server/src/seed/data/default-content.ts` with this exported file.');
  console.log('2. When new groups are created or when you run npm run seed, this custom layout will automatically populate!');
}

exportGroup()
  .catch((e) => {
    console.error('❌ Exporter failed:', e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
