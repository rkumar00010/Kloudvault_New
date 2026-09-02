import { INDUSTRIES, INDUSTRY_PRODUCTS } from "./data";

export const INDUSTRIES_NAV_DROPDOWN = INDUSTRIES.map((industry) => ({
  label: industry.label,
  children: INDUSTRY_PRODUCTS.map((product) => ({
    label: product.label,
    href: `/industry/${industry.slug}/${product.slug}`,
  })),
}));
