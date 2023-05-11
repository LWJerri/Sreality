-- CreateTable
CREATE TABLE "apartments" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "apartments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "apartments_images" (
    "id" TEXT NOT NULL,
    "apartmentId" TEXT NOT NULL,
    "photoURL" TEXT NOT NULL,

    CONSTRAINT "apartments_images_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "apartments_images_apartmentId_photoURL_key" ON "apartments_images"("apartmentId", "photoURL");

-- AddForeignKey
ALTER TABLE "apartments_images" ADD CONSTRAINT "apartments_images_apartmentId_fkey" FOREIGN KEY ("apartmentId") REFERENCES "apartments"("id") ON DELETE CASCADE ON UPDATE CASCADE;
