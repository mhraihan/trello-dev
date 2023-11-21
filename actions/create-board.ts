"use server";
// import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

import prisma from "@/lib/db";
const createBoard = z.object({
  title: z.string().min(3, {
    message: "Minimum length of 3 letters is required",
  }),
});
// const { orgId } = auth();
export type State = {
  message?: string | null;
  errors?: {
    title?: string[];
  };
};
export async function create(prevState: State, formData: FormData) {
  const validator = createBoard.safeParse({
    title: formData.get("title"),
  });
  if (!validator.success) {
    return {
      message: "Missing field",
      errors: validator.error.flatten().fieldErrors,
    } as State;
  }
  const { title } = validator.data;
  try {
    await prisma.board.create({
      data: {
        title,
      },
    });
  } catch (error) {
    return {
      message: "Database error",
    } as State;
  }
  revalidatePath(`/organization/org_2YFtHsGe7vtoKUKRhzpGz5dXpUP`);
  redirect(`/organization/org_2YFtHsGe7vtoKUKRhzpGz5dXpUP`);
}
