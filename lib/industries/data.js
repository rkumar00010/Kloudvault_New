export const INDUSTRY_PRODUCTS = [
  { slug: "klouddata", label: "KloudData" },
  { slug: "kloudscan", label: "KloudScan" },
  { slug: "kloudfiles", label: "KloudFiles" },
  { slug: "kloudconnect", label: "KloudConnect" },
];

export const INDUSTRIES = [
  { slug: "real-estate", label: "Real Estate", legacyPath: "/real-estate" },
  { slug: "non-profit", label: "Non Profit", legacyPath: "/non-profit" },
  { slug: "financial-services", label: "Financial Services", legacyPath: "/financial-services" },
  { slug: "education", label: "Education", legacyPath: "/education" },
  { slug: "professional-services", label: "Professional Services", legacyPath: "/professional-services" },
  { slug: "healthcare", label: "Healthcare", legacyPath: "/healthcare" },
  { slug: "retail", label: "Retail", legacyPath: "/industry/retail/klouddata" },
  { slug: "manufacturing", label: "Manufacturing", legacyPath: "/industry/manufacturing/klouddata" },
];

export function getIndustry(slug) {
  return INDUSTRIES.find((item) => item.slug === slug);
}

export function getIndustryProduct(slug) {
  return INDUSTRY_PRODUCTS.find((item) => item.slug === slug);
}

export function isValidIndustryProduct(industrySlug, productSlug) {
  return Boolean(getIndustry(industrySlug) && getIndustryProduct(productSlug));
}

export function industryProductPath(industrySlug, productSlug) {
  return `/industry/${industrySlug}/${productSlug}`;
}
