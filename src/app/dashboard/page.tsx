import * as actions from "@/actions";
import { auth } from "@/auth";

import {
  Alert,
  AlertTitle,
  AlertDescription,
  Input,
  Label,
  Textarea,
  Button,
} from "@/components/ui";

import MinimalistResume from "@/components/templates/minimalistResume";
import Image from "next/image";
import { Terminal } from "lucide-react";

export default async function Dashboard() {
  const session = await auth();

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

        {/* TODO: Move Form into separate component */}
        <form action="" className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="name">Full Name</Label>
          <Input type="text" id="name" placeholder="Full Name" />

          <Label htmlFor="imageUrl" className="mt-2">
            Image URL
          </Label>
          <Input
            type="text"
            id="imageUrl"
            placeholder="Ex: https://someurl.com/profilepic.png"
          />

          <Label htmlFor="special" className="mt-2">
            Specialization
          </Label>
          <Input
            type="text"
            id="special"
            placeholder="Ex: FrontEnd, BackEnd, FullStack Software Engineer"
          />

          <Label htmlFor="skills" className="mt-2">
            Skills
          </Label>
          <Input
            type="text"
            id="skills"
            placeholder="Ex: JavaScript, React, NextJs, Node"
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
          />

          <Label htmlFor="linkedinUrl" className="mt-2">
            LinkedIn Link
          </Label>
          <Input
            type="text"
            id="linkedinUrl"
            placeholder="Ex: https://linkedin/in/swastikyadav"
          />

          <Label htmlFor="email" className="mt-2">
            Email
          </Label>
          <Input
            type="email"
            id="email"
            placeholder="Ex: something@gmail.com"
          />

          <Label htmlFor="about" className="mt-2">
            About
          </Label>
          <Textarea
            id="about"
            placeholder="Brag about your achievements here..."
          />

          <Button type="submit" className="mt-4 bg-blue-600">
            Publish & Go Live!
          </Button>
        </form>
      </aside>
      <aside className="p-12">
        <MinimalistResume />
      </aside>

      {/* {session && (
        <form
          action={actions.signOut}
          className="mt-10 flex justify-center gap-x-6"
        >
          <button className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900">
            SignOut
          </button>
        </form>
      )} */}
    </div>
  );
}
