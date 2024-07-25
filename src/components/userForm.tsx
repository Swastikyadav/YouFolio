"use client";

import { ChangeEventHandler, useEffect } from "react";
import { useFormState } from "react-dom";
import { useSession } from "next-auth/react";
import type { User } from "@prisma/client";

import * as actions from "@/actions";
import { Input, Label, Textarea, useToast } from "@/components/ui";
import ButtonWithLoader from "./buttonWithLoader";

interface UserFormProps {
  user: User | null | undefined;
  handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

export default function UserForm({ user, handleChange }: UserFormProps) {
  const { toast } = useToast();

  const session = useSession();
  const authUser = session.data;

  const [formState, action] = useFormState(actions.saveUserInfo, {
    message: "",
    type: "",
  });

  useEffect(() => {
    if (formState.message && formState.type === "success") {
      toast({
        title: "Your info updated successfully!",
        description:
          "Update your experience and projects as well. View your portfolio by clicking on 'Eye' icon at top.",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formState.message]);

  return (
    <form action={action} className="grid w-full max-w-sm items-center gap-1.5">
      <small className="text-red-500 font-bold">
        {formState.type === "error" ? formState.message : ""}
      </small>

      <Label htmlFor="name">Full Name</Label>
      <Input
        type="text"
        name="name"
        id="name"
        placeholder="Full Name"
        value={user?.name || ""}
        onChange={handleChange}
      />

      <Label htmlFor="image" className="mt-2">
        Image URL
      </Label>
      <Input
        type="text"
        name="image"
        id="image"
        placeholder="Ex: https://someurl.com/profilepic.png"
        value={user?.image || ""}
        onChange={handleChange}
      />

      <Label htmlFor="specialize" className="mt-2">
        Specialization
      </Label>
      <Input
        type="text"
        name="specialize"
        id="specialize"
        placeholder="Ex: FrontEnd, BackEnd, FullStack Software Engineer"
        value={user?.specialize || ""}
        onChange={handleChange}
      />

      <Label htmlFor="skills" className="mt-2">
        Skills
      </Label>
      <Input
        type="text"
        name="skills"
        id="skills"
        placeholder="Ex: JavaScript, React, NextJs, Node"
        value={user?.skills || ""}
        onChange={handleChange}
      />
      <small className="text-slate-500">
        Add 4-5 top skills. Separated by comma.
      </small>

      <Label htmlFor="githubUrl" className="mt-2">
        GitHub Link
      </Label>
      <Input
        type="text"
        id="githubUrl"
        placeholder="Ex: https://github.com/swastikyadav"
        value={`https://github.com/${user?.username}`}
        readOnly
        disabled
      />

      <Label htmlFor="linkedin" className="mt-2">
        LinkedIn Link
      </Label>
      <Input
        type="text"
        name="linkedin"
        id="linkedin"
        placeholder="Ex: https://linkedin/in/swastikyadav"
        value={user?.linkedin || ""}
        onChange={handleChange}
      />

      <Label htmlFor="email" className="mt-2">
        Email
      </Label>
      <Input
        type="email"
        name="email"
        id="email"
        placeholder="Ex: something@gmail.com"
        value={user?.email || ""}
        onChange={handleChange}
      />

      <Label htmlFor="about" className="mt-2">
        About
      </Label>
      <Textarea
        name="about"
        id="about"
        placeholder="Brag about your achievements here..."
        value={user?.about || ""}
        onChange={handleChange}
      />

      <ButtonWithLoader disabled={!!!authUser}>
        Publish & Go Live!
      </ButtonWithLoader>
      <small className="text-red-500 font-bold">
        {formState.type === "error" ? formState.message : ""}
      </small>
    </form>
  );
}
