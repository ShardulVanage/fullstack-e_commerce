-- CreateTable
CREATE TABLE "Tode" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Tode_id_key" ON "Tode"("id");
