import { CoverageOverview, coverageMetadata } from "../_components/coverage-pages";
export const metadata = coverageMetadata("air-conditioning");
export default function Page() { return <CoverageOverview service="air-conditioning" />; }
