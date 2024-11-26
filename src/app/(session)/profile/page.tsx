import { Metadata } from "next";
import { Profile } from "@/components";

export const metadata: Metadata = {
  title: "Profile",
  description: "Profile description",
};
export default function ProfilePage() {
  return <Profile />;
}
