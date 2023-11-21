"use server";

import { revalidatePath } from "next/cache";
import prisma from "@/lib/db";

const deleteBoard = async (id: string) => {
  await prisma.board.delete({ where: { id } });
  revalidatePath(`/organization/org_2YFtHsGe7vtoKUKRhzpGz5dXpUP`);
};

export default deleteBoard;
