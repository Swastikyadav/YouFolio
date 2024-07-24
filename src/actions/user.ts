"use server";

import { db } from "@/db";
import { User } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function getUser(email: string | undefined | null) {
  if (email) {
    const user = await db.user.findFirst({
      where: {
        email,
      },
    });

    return user;
  }
}

export async function getUserByUsername(username: string) {
  if (username) {
    const user = await db.user.findFirst({
      where: {
        username,
      },
    });

    return user;
  }
}

export async function saveUserInfo(
  user:
    | User
    | null
    | undefined
    | { id: string | undefined; experiences: string }
    | { id: string | undefined; projects: string },
  formData: FormData
) {
  console.log(user, "formData++");
  await db.user.update({
    where: { id: user?.id },
    data: { ...user },
  });

  console.log("User updated successfully!");
  // revalidatePath("/dashboard");
  // revalidatePath(`/portfolio${user?.username}`);
  return {};
}
