-- DropIndex
DROP INDEX "user_item_progress_user_id_idx";

-- CreateIndex
CREATE INDEX "chat_messages_thread_id_idx" ON "chat_messages"("thread_id");

-- CreateIndex
CREATE INDEX "playlists_user_id_idx" ON "playlists"("user_id");

-- CreateIndex
CREATE INDEX "user_item_progress_user_id_status_idx" ON "user_item_progress"("user_id", "status");

-- CreateIndex
CREATE INDEX "user_item_progress_user_id_is_starred_idx" ON "user_item_progress"("user_id", "is_starred");

-- CreateIndex
CREATE INDEX "user_item_progress_user_id_is_watch_later_idx" ON "user_item_progress"("user_id", "is_watch_later");
