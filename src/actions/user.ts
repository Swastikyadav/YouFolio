"use server";

import { db } from "@/db";
import { User } from "@prisma/client";
import { auth } from "@/auth";
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
  formState: { message: string; type: string },
  formData: FormData
) {
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) {
    return { message: "User is not authenticated.", type: "error" };
  }

  const userData: Record<string, FormDataEntryValue | null> = {
    name: formData.get("name"),
    specialize: formData.get("specialize"),
    skills: formData.get("skills"),
    linkedin: formData.get("linkedin"),
    email: formData.get("email"),
    about: formData.get("about"),
  };

  if (
    !userData.name ||
    !userData.specialize ||
    !userData.skills ||
    !userData.linkedin ||
    !userData.email ||
    !userData.about
  ) {
    return { message: "Please, fill in all the details.", type: "error" };
  }

  await db.user.update({
    where: { id: userId },
    data: userData,
  });

  console.log("User updated successfully!");

  // @ts-ignore
  revalidatePath(`/portfolio/${session?.user?.username}`);

  return { message: "User info updated successfully!", type: "success" };
}

export async function saveUserExperiences(experiences: string) {
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) {
    return { message: "User is not authenticated." };
  }

  await db.user.update({
    where: { id: userId },
    data: { experiences },
  });

  console.log("User experiences updated successfully!");

  // @ts-ignore
  revalidatePath(`/portfolio/${session?.user?.username}`);
}

export async function saveUserProjects(projects: string) {
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) {
    return { message: "User is not authenticated." };
  }

  await db.user.update({
    where: { id: userId },
    data: { projects },
  });

  console.log("User projects updated successfully!");

  // @ts-ignore
  revalidatePath(`/portfolio/${session?.user?.username}`);
}
