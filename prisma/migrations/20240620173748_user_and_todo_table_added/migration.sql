-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL UNIQUE,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT,
    "password" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Todo" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "done" BOOLEAN NOT NULL DEFAULT false,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);
