/**
 * Standalone seed runner — run with: ts-node src/seed/run-seed.ts
 */
import { PrismaClient } from '@prisma/client';
import { DEFAULT_TRACKS } from './data/default-content';

const prisma = new PrismaClient();

async function seed() {
  console.log('🌱 Starting PrepForge seed...\n');

  // Ensure a system user exists
  const systemUser = await prisma.user.upsert({
    where: { email: 'system@prepforge.app' },
    update: {},
    create: {
      firebaseUid: 'system_admin_uid',
      email: 'system@prepforge.app',
      displayName: 'System Admin',
    },
  });

  // Create a default system group
  const group = await prisma.group.upsert({
    where: { inviteCode: 'DEFAULT_GROUP' },
    update: {},
    create: {
      name: 'PrepForge Default',
      description: 'Default group with all curated content',
      inviteCode: 'DEFAULT_GROUP',
      isDefault: true,
      createdById: systemUser.id,
    },
  });

  console.log(`📦 Group: ${group.name} (${group.id})\n`);

  for (const trackData of DEFAULT_TRACKS) {
    const existingTracks = await prisma.track.findMany({
      where: { groupId: group.id, name: trackData.name },
      orderBy: { createdAt: 'asc' },
    });

    if (existingTracks.length > 0) {
      if (existingTracks.length > 1) {
        console.log(`🧹 Found ${existingTracks.length} duplicate tracks for "${trackData.name}", performing self-healing cleanup...`);
        // Keep the first one, delete all duplicate entries (cascades cleanly)
        for (let i = 1; i < existingTracks.length; i++) {
          await prisma.track.delete({ where: { id: existingTracks[i].id } });
        }
      }
      console.log(`⏭ Track "${trackData.name}" already seeded, skipping`);
      continue;
    }

    const track = await prisma.track.create({
      data: {
        name: trackData.name,
        description: trackData.description,
        icon: trackData.icon,
        color: trackData.color,
        order: trackData.order,
        isDefault: true,
        groupId: group.id,
      },
    });

    let itemCount = 0;

    for (const catData of trackData.categories) {
      const category = await prisma.category.create({
        data: {
          name: catData.name,
          description: catData.description || null,
          icon: catData.icon || null,
          order: catData.order,
          trackId: track.id,
        },
      });

      for (const resData of catData.resources) {
        const resource = await prisma.resource.create({
          data: {
            name: resData.name,
            description: (resData as any).description || null,
            type: resData.type as any,
            url: (resData as any).url || null,
            isMustDo: resData.isMustDo || false,
            order: resData.order,
            categoryId: category.id,
          },
        });

        for (const unitData of resData.units || []) {
          const unit = await prisma.unit.create({
            data: {
              name: unitData.name,
              order: unitData.order,
              resourceId: resource.id,
            },
          });

          for (const subData of unitData.subUnits || []) {
            const subUnit = await prisma.subUnit.create({
              data: {
                name: subData.name,
                order: subData.order,
                unitId: unit.id,
              },
            });

            if (subData.items && subData.items.length > 0) {
              await prisma.item.createMany({
                data: subData.items.map((itemData) => ({
                  name: itemData.name,
                  type: itemData.type as any,
                  url: (itemData as any).url || null,
                  difficulty: (itemData as any).difficulty || null,
                  order: itemData.order,
                  subUnitId: subUnit.id,
                })),
              });
              itemCount += subData.items.length;
            }
          }
        }
      }
    }

    console.log(`✅ ${trackData.icon} ${trackData.name}: ${itemCount} items seeded`);
  }

  console.log('\n🎉 Seed complete!');
}

seed()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
