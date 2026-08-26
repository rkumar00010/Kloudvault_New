import { notFound } from "next/navigation";
import IndustryGenericProductPage from "@/components/industries/IndustryGenericProductPage";
import { getIndustryProductContent } from "@/lib/industries/productContent";
import { KLOUDCONNECT_COMPONENTS, isValidIndustryProduct } from "@/lib/industries/registry";

export default async function IndustryProductRoutePage({ params }) {
  const { industrySlug, productSlug } = await params;

  if (!isValidIndustryProduct(industrySlug, productSlug)) {
    notFound();
  }

  if (productSlug === "kloudconnect") {
    const ConnectComponent = KLOUDCONNECT_COMPONENTS[industrySlug];
    if (ConnectComponent) return <ConnectComponent />;
  }

  const content = getIndustryProductContent(industrySlug, productSlug);
  if (!content) notFound();

  return <IndustryGenericProductPage content={content} />;
}
