import { PlusIcon } from "lucide-react";
import { Input, Button } from "@/components/ui";
import { ChangeEvent, MouseEventHandler, SetStateAction } from "react";

interface ProjectShape {
  id: number;
  company: string;
  description: string;
}

interface ProjectFormProps {
  saveUserProjects: (forData: FormData) => void;
  projects: ProjectShape[];
  setProjects: Function;
  addProject: MouseEventHandler<HTMLButtonElement>;
  deleteProject: MouseEventHandler<HTMLDivElement>;
}

export default function ProjectForm({
  saveUserProjects,
  deleteProject,
  addProject,
  projects,
  setProjects,
}: ProjectFormProps) {
  function handleChange(
    event: ChangeEvent<HTMLInputElement>,
    exp: ProjectShape
  ) {
    const { id, value } = event.target;
    const newProject = projects.map((item) => {
      if (exp.id === item.id) {
        return { ...item, [id]: value };
      }

      return item;
    });

    setProjects(newProject);
  }

  return (
    <form action={saveUserProjects}>
      <div onClick={deleteProject}>
        {projects.map((exp) => (
          <div key={exp.id} className="mt-4">
            <Input
              type="text"
              id="company"
              placeholder="Project Name"
              className="my-2"
              value={exp.company}
              onChange={(event) => handleChange(event, exp)}
            />
            <Input
              type="text"
              id="description"
              placeholder="A small project description"
              className="my-2"
              value={exp.description}
              onChange={(event) => handleChange(event, exp)}
            />
            <div id={`${exp.id}`} className="flex justify-end cursor-pointer">
              &#10005;
            </div>
          </div>
        ))}
      </div>

      <div className="w-full">
        <Button className="bg-blue-600 p-2" onClick={addProject}>
          <PlusIcon />
        </Button>
      </div>

      <Button type="submit" className="mt-4 bg-blue-600">
        Publish Your Project
      </Button>
    </form>
  );
}
