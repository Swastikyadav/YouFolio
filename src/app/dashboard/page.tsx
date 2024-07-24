"use client";

import { useState, useEffect, ChangeEvent } from "react";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { Terminal, LogOutIcon, EyeIcon } from "lucide-react";
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
  Button,
} from "@/components/ui";
import UserForm from "@/components/userForm";
import MinimalistResume from "@/components/templates/minimalistResume";
import ExperienceForm from "@/components/experienceForm";
import ProjectForm from "@/components/projectForm";
import Link from "next/link";

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
    experiences: "",
    projects: "",
  });
  const [experiences, setExperiences] = useState([
    {
      id: Date.now(),
      company: "",
      duration: "",
    },
  ]);
  const [projects, setProjects] = useState([
    {
      id: Date.now(),
      company: "",
      description: "",
    },
  ]);

  useEffect(() => {
    async function checkSession() {
      if (session.status === "authenticated") {
        const userEmail = session.data?.user?.email;
        const user = await actions.getUser(userEmail);

        setBasicInfo(user);
        user?.experiences
          ? setExperiences(JSON.parse(`${user?.experiences}`))
          : [];
        user?.projects ? setProjects(JSON.parse(`${user?.projects}`)) : [];
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

  function addExperience() {
    setExperiences([
      ...experiences,
      {
        id: Date.now(),
        company: "",
        duration: "",
      },
    ]);
  }
  function deleteExperience(event: React.MouseEvent<HTMLDivElement>) {
    const target = event.target as HTMLElement;
    setExperiences(experiences.filter((exp) => exp.id !== +target.id));
  }

  function addProject() {
    setProjects([
      ...projects,
      {
        id: Date.now(),
        company: "",
        description: "",
      },
    ]);
  }
  function deleteProject(event: React.MouseEvent<HTMLDivElement>) {
    const target = event.target as HTMLElement;
    setProjects(projects.filter((exp) => exp.id !== +target.id));
  }

  const saveUserInfoAction = actions.saveUserInfo.bind(null, basicInfo);
  const saveUserExperiences = actions.saveUserInfo.bind(null, {
    id: basicInfo?.id,
    experiences: JSON.stringify(experiences),
  });
  const saveUserProjects = actions.saveUserInfo.bind(null, {
    id: basicInfo?.id,
    projects: JSON.stringify(projects),
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <aside className="p-12">
        <div className="flex justify-between items-center">
          <Image src="/images/folio.png" width={100} height={100} alt="logo" />
          {session.status === "authenticated" && (
            <div className="flex">
              <Link target="_blank" href={`/portfolio/${basicInfo?.username}`}>
                <Button variant="ghost">
                  <EyeIcon width={20} height={20} />
                </Button>
              </Link>
              {/* <form
                action={actions.signOut}
                className="flex justify-center gap-x-6"
              > */}
              <Button variant="ghost" onClick={() => signOut()}>
                <LogOutIcon width={20} height={20} />
              </Button>
              {/* </form> */}
            </div>
          )}
          {session.status === "unauthenticated" && (
            <form action={actions.signIn}>
              <Button className="text-blue-600 font-bold" variant="ghost">
                Login
              </Button>{" "}
              to start building your portfolio.
            </form>
          )}
        </div>
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
            <ExperienceForm
              saveUserExperiences={saveUserExperiences}
              experiences={experiences}
              setExperiences={setExperiences}
              addExperience={addExperience}
              deleteExperience={deleteExperience}
            />
          </TabsContent>
          <TabsContent value="projects">
            <ProjectForm
              saveUserProjects={saveUserProjects}
              projects={projects}
              setProjects={setProjects}
              addProject={addProject}
              deleteProject={deleteProject}
            />
          </TabsContent>
        </Tabs>
      </aside>
      <aside className="p-12">
        <MinimalistResume
          user={basicInfo}
          experiences={experiences}
          projects={projects}
        />
      </aside>
    </div>
  );
}
