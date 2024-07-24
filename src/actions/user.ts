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

export async function saveUserInfo(
  user: User | null | undefined,
  formData: FormData
) {
  console.log(formData.get("email"), user, "formData++");
  await db.user.update({
    where: { id: user?.id },
    data: { ...user },
  });

  console.log("User updated successfully!");
  // revalidatePath("/dashboard");
  // revalidatePath(`/portfolio${user?.username}`);
  return {};
}
