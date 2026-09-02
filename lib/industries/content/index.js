import { PRODUCT_META } from "./productTemplates";
import { getRetailContent } from "./retail";
import { manufacturingContent } from "./manufacturing";
import { INDUSTRY_PAGE_CONTENT } from "./industries-part1";
import { INDUSTRY_PAGE_CONTENT_PART2 } from "./industries-part2";
import { INDUSTRY_PAGE_CONTENT_PART3 } from "./industries-part3";

const ALL_INDUSTRY_CONTENT = {
  ...INDUSTRY_PAGE_CONTENT,
  ...INDUSTRY_PAGE_CONTENT_PART2,
  ...INDUSTRY_PAGE_CONTENT_PART3,
  manufacturing: manufacturingContent,
};

export function getIndustryProductContent(industrySlug, productSlug) {
  if (productSlug === "kloudconnect") return null;

  if (industrySlug === "retail") {
    return getRetailContent(productSlug);
  }

  const industry = ALL_INDUSTRY_CONTENT[industrySlug];
  if (!industry) return null;

  const content = industry[productSlug];
  if (!content) return null;

  const product = PRODUCT_META[productSlug];
  return {
    industrySlug,
    productSlug,
    industryLabel: content.hero.badge.split(" · ")[0],
    productName: product.productName,
    ...content,
  };
}
