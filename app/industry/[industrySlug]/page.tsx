import { redirect } from "next/navigation";
import { getIndustry } from "@/lib/industries/data";
import { notFound } from "next/navigation";

export default async function IndustryIndexPage({
  params,
}: {
  params: Promise<{ industrySlug: string }>;
}) {
  const { industrySlug } = await params;
  if (!getIndustry(industrySlug)) notFound();
  redirect(`/industry/${industrySlug}/kloudconnect`);
}
