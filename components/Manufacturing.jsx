import IndustryKloudConnectPage from "@/components/industries/IndustryKloudConnectPage";
import { manufacturingKloudConnect } from "@/lib/industries/content/kloudConnect";

export default function Manufacturing() {
  return <IndustryKloudConnectPage content={manufacturingKloudConnect} />;
}
