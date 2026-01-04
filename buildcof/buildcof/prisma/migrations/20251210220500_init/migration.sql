-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cof" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "linker1" TEXT,
    "linker2" TEXT,
    "topology" TEXT,
    "a" DOUBLE PRECISION,
    "b" DOUBLE PRECISION,
    "c" DOUBLE PRECISION,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Cof_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Cof" ADD CONSTRAINT "Cof_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
