"use client";

import React from "react";
import { useFormStatus } from "react-dom";
import { Button } from "./ui";
import { Loader2 } from "lucide-react";

interface ButtonWithLoaderProps {
  children: React.ReactNode;
  disabled: Boolean;
}

export default function ButtonWithLoader({
  children,
  disabled,
}: ButtonWithLoaderProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      onClick={() => {}}
      className="mt-4 bg-blue-600"
      disabled={!!disabled}
    >
      {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      Publish & Go Live!
    </Button>
  );
}
