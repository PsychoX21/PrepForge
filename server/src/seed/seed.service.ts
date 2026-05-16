/**
 * Seed service — populates the database with default content.
 */
import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { DEFAULT_TRACKS } from './data/default-content';

// ─── Seed Data Types ────────────────────────────────────────────────────────
// These mirror the shapes produced by the seed data files.

interface SeedItem {
  name: string;
  type: string;
  order: number;
  description?: string;
  url?: string;
  difficulty?: string;
}

interface SeedSubUnit {
  name: string;
  order: number;
  description?: string;
  items: SeedItem[];
}

interface SeedUnit {
  name: string;
  order: number;
  description?: string;
  subUnits: SeedSubUnit[];
}

interface SeedResource {
  name: string;
  type: string;
  order: number;
  description?: string;
  url?: string;
  isMustDo?: boolean;
  units: SeedUnit[];
}

interface SeedCategory {
  name: string;
  order: number;
  description?: string;
  icon?: string;
  resources: SeedResource[];
}

interface SeedTrack {
  name: string;
  description: string;
  icon: string;
  color: string;
  order: number;
  categories: SeedCategory[];
}

// ─── Service ────────────────────────────────────────────────────────────────

@Injectable()
export class SeedService {
  private readonly logger = new Logger(SeedService.name);

  constructor(private readonly prisma: PrismaService) {}

  /**
   * Seed default content into a group.
   * Creates tracks, categories, resources, units, subunits, and items.
   */
  async seedDefaultContent(groupId: string) {
    this.logger.log(`Seeding default content for group ${groupId}...`);

    const tracks = DEFAULT_TRACKS as SeedTrack[];

    for (const trackData of tracks) {
      const track = await this.prisma.track.create({
        data: {
          name: trackData.name,
          description: trackData.description,
          icon: trackData.icon,
          color: trackData.color,
          order: trackData.order,
          isDefault: true,
          groupId,
        },
      });

      for (const catData of trackData.categories) {
        const category = await this.prisma.category.create({
          data: {
            name: catData.name,
            description: catData.description || null,
            icon: catData.icon || null,
            order: catData.order,
            trackId: track.id,
          },
        });

        for (const resData of catData.resources) {
          const resource = await this.prisma.resource.create({
            data: {
              name: resData.name,
              description: resData.description || null,
              type: resData.type as any,
              url: resData.url || null,
              isMustDo: resData.isMustDo || false,
              order: resData.order,
              categoryId: category.id,
            },
          });

          for (const unitData of resData.units || []) {
            const unit = await this.prisma.unit.create({
              data: {
                name: unitData.name,
                description: unitData.description || null,
                order: unitData.order,
                resourceId: resource.id,
              },
            });

            for (const subData of unitData.subUnits || []) {
              const subUnit = await this.prisma.subUnit.create({
                data: {
                  name: subData.name,
                  description: subData.description || null,
                  order: subData.order,
                  unitId: unit.id,
                },
              });

              for (const itemData of subData.items || []) {
                await this.prisma.item.create({
                  data: {
                    name: itemData.name,
                    description: itemData.description || null,
                    type: itemData.type as any,
                    url: itemData.url || null,
                    difficulty: (itemData.difficulty as any) || null,
                    order: itemData.order,
                    subUnitId: subUnit.id,
                  },
                });
              }
            }
          }
        }
      }

      this.logger.log(`✅ Track "${trackData.name}" seeded`);
    }

    this.logger.log('🎉 All default content seeded successfully!');
  }
}
