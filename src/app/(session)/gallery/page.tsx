import { Metadata } from "next";
import { Gallery } from "@/components";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Upload a new photo",
};
export default function GalleryPage() {
  return <Gallery />;
}
