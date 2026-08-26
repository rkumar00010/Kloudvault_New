import IndustryKloudConnectPage from "@/components/industries/IndustryKloudConnectPage";
import { retailKloudConnect } from "@/lib/industries/content/kloudConnect";

export default function Retail() {
  return <IndustryKloudConnectPage content={retailKloudConnect} />;
}
