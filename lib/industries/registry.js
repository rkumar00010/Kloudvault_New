import RealEstate from "@/components/RealEstate";
import NonProfit from "@/components/NonProfit";
import FinancialServices from "@/components/FinancialServices";
import Education from "@/components/Education";
import ProfessionalService from "@/components/ProfessionalService";
import Healthcare from "@/components/Healthcare";
import Retail from "@/components/Retail";
import Manufacturing from "@/components/Manufacturing";

export {
  INDUSTRY_PRODUCTS,
  INDUSTRIES,
  getIndustry,
  getIndustryProduct,
  isValidIndustryProduct,
  industryProductPath,
} from "./data";

export const KLOUDCONNECT_COMPONENTS = {
  "real-estate": RealEstate,
  "non-profit": NonProfit,
  "financial-services": FinancialServices,
  education: Education,
  "professional-services": ProfessionalService,
  healthcare: Healthcare,
  retail: Retail,
  manufacturing: Manufacturing,
};
