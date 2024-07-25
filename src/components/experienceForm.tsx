import { PlusIcon } from "lucide-react";
import { Input, Button } from "@/components/ui";
import ButtonWithLoader from "./buttonWithLoader";
import { ChangeEvent, MouseEventHandler, SetStateAction } from "react";

interface ExperienceShape {
  id: number;
  company: string;
  duration: string;
}

interface ExperienceFormProps {
  saveUserExperiences: (forData: FormData) => void;
  experiences: ExperienceShape[];
  setExperiences: Function;
  addExperience: MouseEventHandler<HTMLButtonElement>;
  deleteExperience: MouseEventHandler<HTMLDivElement>;
  isAuthenticated: Boolean;
}

export default function ExperienceForm({
  saveUserExperiences,
  deleteExperience,
  addExperience,
  experiences,
  setExperiences,
  isAuthenticated,
}: ExperienceFormProps) {
  function handleChange(
    event: ChangeEvent<HTMLInputElement>,
    exp: ExperienceShape
  ) {
    const { id, value } = event.target;
    const newExperience = experiences.map((item) => {
      if (exp.id === item.id) {
        return { ...item, [id]: value };
      }

      return item;
    });

    setExperiences(newExperience);
  }

  return (
    <form action={saveUserExperiences}>
      <div onClick={deleteExperience}>
        {experiences?.map((exp) => (
          <div key={exp.id} className="mt-4">
            <Input
              type="text"
              id="company"
              placeholder="Company Name"
              className="my-2"
              value={exp.company}
              onChange={(event) => handleChange(event, exp)}
            />
            <Input
              type="text"
              id="duration"
              placeholder="From - To, Ex: Jan 2020 - June 2024"
              className="my-2"
              value={exp.duration}
              onChange={(event) => handleChange(event, exp)}
            />
            <div id={`${exp.id}`} className="flex justify-end cursor-pointer">
              &#10005;
            </div>
          </div>
        ))}
      </div>

      <div className="w-full">
        <Button className="bg-blue-600 p-2" onClick={addExperience}>
          <PlusIcon />
        </Button>
      </div>

      <ButtonWithLoader disabled={!isAuthenticated}>
        Publish Your Experience
      </ButtonWithLoader>
    </form>
  );
}
