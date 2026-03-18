import { Profile } from "#/features/profile";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/profile/")({
  component: Profile,
});
