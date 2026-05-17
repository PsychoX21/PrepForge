-- CreateIndex
CREATE INDEX "categories_track_id_idx" ON "categories"("track_id");

-- CreateIndex
CREATE INDEX "group_members_group_id_idx" ON "group_members"("group_id");

-- CreateIndex
CREATE INDEX "items_sub_unit_id_idx" ON "items"("sub_unit_id");

-- CreateIndex
CREATE INDEX "resources_category_id_idx" ON "resources"("category_id");

-- CreateIndex
CREATE INDEX "sub_units_unit_id_idx" ON "sub_units"("unit_id");

-- CreateIndex
CREATE INDEX "tracks_group_id_idx" ON "tracks"("group_id");

-- CreateIndex
CREATE INDEX "units_resource_id_idx" ON "units"("resource_id");
