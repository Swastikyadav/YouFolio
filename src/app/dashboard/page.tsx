"use client";

import { useState, useEffect, ChangeEvent } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { Terminal } from "lucide-react";
import type { User } from "@prisma/client";

import * as actions from "@/actions";
import {
  Alert,
  AlertTitle,
  AlertDescription,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui";
import UserForm from "@/components/userForm";
import MinimalistResume from "@/components/templates/minimalistResume";

export default function Dashboard() {
  const session = useSession();
  const [basicInfo, setBasicInfo] = useState<User | null | undefined>({
    id: "",
    name: "",
    username: "",
    image: "",
    specialize: "",
    skills: "",
    linkedin: "",
    email: "",
    about: "",
  });

  useEffect(() => {
    async function checkSession() {
      if (session.status === "authenticated") {
        const userEmail = session.data?.user?.email;
        const user = await actions.getUser(userEmail);

        setBasicInfo(user);
      }
    }

    checkSession();
  }, [session.data?.user?.email, session.status]);

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { id, value } = event.target;
    setBasicInfo((prevState) => {
      if (prevState) {
        return {
          ...prevState,
          [id]: value,
        };
      }
      return prevState;
    });
  }

  const saveUserInfoAction = actions.saveUserInfo.bind(null, basicInfo);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <aside className="p-12">
        <Image src="/images/folio.png" width={100} height={100} alt="logo" />
        <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            Right now there is only one template available, more templates
            comming soon. Preview is on the right.
          </AlertDescription>
        </Alert>
        <h2 className="text-xl font-medium my-4">Edit Your Details</h2>

        <Tabs defaultValue="basicInfo" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="basicInfo">Basic Info</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
          </TabsList>
          <TabsContent value="basicInfo">
            <UserForm
              user={basicInfo}
              handleChange={handleChange}
              saveUserInfoAction={saveUserInfoAction}
            />
          </TabsContent>
          <TabsContent value="experience">
            Update your experiences here.
          </TabsContent>
          <TabsContent value="projects">Update your projects here.</TabsContent>
        </Tabs>
      </aside>
      <aside className="p-12">
        <MinimalistResume />
      </aside>

      {session.status === "authenticated" && (
        <form
          action={actions.signOut}
          className="mt-10 flex justify-center gap-x-6"
        >
          <button className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900">
            SignOut
          </button>
        </form>
      )}
    </div>
  );
}
