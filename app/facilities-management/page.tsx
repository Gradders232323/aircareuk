import { CoverageOverview, coverageMetadata } from "../_components/coverage-pages";
export const metadata = coverageMetadata("facilities-management");
export default function Page() { return <CoverageOverview service="facilities-management" />; }
