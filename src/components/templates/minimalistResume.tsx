import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";

import Link from "next/link";
import Image from "next/image";

import { Badge, buttonVariants } from "@/components/ui";
import TimelineList from "@/components/timelineList";
import { cn } from "@/lib/utils";

export default function MinimalistResume() {
  return (
    <div className="container max-w-3xl border">
      {/* Profile */}
      <div className="flex flex-col-reverse mt-16 sm:flex-row sm:justify-between sm:items-center">
        <section>
          <div className="grid grid-cols-1 gap-1">
            <h1 className="text-2xl font-bold">Swastik Yadav</h1>
            <small className="block text-base text-gray-500">
              3 year exp || Software Engineer
            </small>
            <div className="flex flex-wrap gap-2 items-center my-2">
              <Badge variant="secondary">JavaScript</Badge>
              <Badge variant="secondary">ReactJs</Badge>
              <Badge variant="secondary">NextJs</Badge>
              <Badge variant="secondary">NodeJs</Badge>
            </div>
            <div>
              <Link href="#" target="_blank" rel="noreferrer">
                <div
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "w-8 h-8 p-2 mr-2 border"
                  )}
                >
                  {/* {Icons[link.name].call()} */}
                  <GithubIcon />
                  <span className="sr-only">LinkedIn</span>
                </div>
              </Link>
              <Link href="#" target="_blank" rel="noreferrer">
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
              <Link href="#" target="_blank" rel="noreferrer">
                <div
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "w-8 h-8 p-2 mr-2 border"
                  )}
                >
                  <MailIcon />
                  <span className="sr-only">LinkedIn</span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <Image
          src="/images/folio.png"
          className="rounded-xl border"
          width="100"
          height="100"
          alt="profile"
        />
      </div>

      {/* About */}
      <div className="grid grid-cols-1 gap-1 my-12">
        <h1 className="text-2xl font-bold">About</h1>
        <small className="block text-base text-gray-500">
          Software Engineer (3+ Years Exp) || JavaScript, React, NextJs ||
          Writes about JavaScript & life. Building side projects used by real
          people. || My blogs on Dev.To have been read by 200k+ readers so far.
        </small>
      </div>

      {/* Experience */}
      <div className="grid grid-cols-1 gap-2 my-12">
        <h1 className="text-2xl font-bold">Experience</h1>
        <TimelineList
          lists={[
            {
              headline: "BlogFast",
              content:
                "A NextJs boilerplate to start your blog in hours not days.",
            },
            {
              headline: "BlogFast",
              content:
                "A NextJs boilerplate to start your blog in hours not days.",
            },
            {
              headline: "BlogFast",
              content:
                "A NextJs boilerplate to start your blog in hours not days.",
            },
          ]}
        />
      </div>

      {/* Projects */}
      <div className="grid grid-cols-1 gap-2 my-12">
        <h1 className="text-2xl font-bold">Projects</h1>
        <TimelineList
          lists={[
            {
              headline: "BlogFast",
              content:
                "A NextJs boilerplate to start your blog in hours not days.",
            },
            {
              headline: "BlogFast",
              content:
                "A NextJs boilerplate to start your blog in hours not days.",
            },
            {
              headline: "BlogFast",
              content:
                "A NextJs boilerplate to start your blog in hours not days.",
            },
          ]}
        />
      </div>
    </div>
  );
}
