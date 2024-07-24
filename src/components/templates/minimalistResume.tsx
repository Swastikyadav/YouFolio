import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import type { User } from "@prisma/client";
import Link from "next/link";
import Image from "next/image";

import { Badge, buttonVariants } from "@/components/ui";
import TimelineList from "@/components/timelineList";
import { cn } from "@/lib/utils";

interface MinimalistResumeProps {
  user: User | null | undefined;
  experiences?: {}[];
  projects?: {}[];
}

export default function MinimalistResume({
  user,
  experiences,
  projects,
}: MinimalistResumeProps) {
  const experienceList = experiences
    ? experiences
    : user?.experiences
    ? JSON.parse(user?.experiences)
    : [];
  const projectsList = projects
    ? projects
    : user?.projects
    ? JSON.parse(user.projects)
    : [];

  return (
    <div className="container max-w-3xl border">
      {/* Profile */}
      <div className="flex flex-col-reverse mt-16 sm:flex-row sm:justify-between sm:items-center">
        <section>
          <div className="grid grid-cols-1 gap-1">
            <h1 className="text-2xl font-bold">{user?.name}</h1>
            <small className="block text-base text-gray-500">
              {user?.specialize}
            </small>
            <div className="flex flex-wrap gap-2 items-center my-2">
              {user?.skills?.split(",").map((skill) => (
                <Badge key={skill.trim()} variant="secondary">
                  {skill.trim()}
                </Badge>
              ))}
            </div>
            <div>
              <Link
                href={`https://github.com/${user?.username ?? "#"}`}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "w-8 h-8 p-2 mr-2 border"
                  )}
                >
                  {/* {Icons[link.name].call()} */}
                  <GithubIcon />
                  <span className="sr-only">GitHub</span>
                </div>
              </Link>
              <Link
                href={user?.linkedin ?? "#"}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "w-8 h-8 p-2 mr-2 border"
                  )}
                >
                  <LinkedinIcon />
                  <span className="sr-only">LinkedIn</span>
                </div>
              </Link>
              <Link
                href={`mailto:${user?.email}`}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "w-8 h-8 p-2 mr-2 border"
                  )}
                >
                  <MailIcon />
                  <span className="sr-only">Email</span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* The image url here is entered by user so can't use "next/image" due to its domain configs */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={user?.image ? user?.image : "/images/folio.png"}
          className="w-32 rounded-xl border"
          alt="profile"
        />
      </div>

      {/* About */}
      <div className="grid grid-cols-1 gap-1 my-12">
        <h1 className="text-2xl font-bold">About</h1>
        <small className="block text-base text-gray-500">{user?.about}</small>
      </div>

      {/* Experience */}
      <div className="grid grid-cols-1 gap-2 my-12">
        <h1 className="text-2xl font-bold">Experience</h1>
        <TimelineList
          lists={experienceList.map(
            (exp: { company: string; duration: string }) => ({
              headline: exp.company,
              content: exp.duration,
            })
          )}
        />
      </div>

      {/* Projects */}
      <div className="grid grid-cols-1 gap-2 my-12">
        <h1 className="text-2xl font-bold">Projects</h1>
        <TimelineList
          lists={projectsList.map(
            (proj: { company: string; description: string }) => ({
              headline: proj.company,
              content: proj.description,
            })
          )}
        />
      </div>
    </div>
  );
}
