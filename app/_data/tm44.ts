export const tm44Path = "/tm44-air-conditioning-inspections";
export const tm44Guidance = "https://www.gov.uk/government/publications/air-conditioning-inspections-for-buildings/a-guide-to-air-conditioning-inspections";
export const tm44Faqs = [
  ["Does my system need a TM44 inspection?", "In England and Wales, the inspection requirements apply where effective rated output is more than 12kW. Several units in one building can count together when their technical operation is under one person’s control. Send your equipment details if you are unsure how the threshold applies."],
  ["When is the inspection due?", "Inspections must be no more than five years apart. An in-scope system first put into service on or after 1 January 2008 needs its first inspection within five years. Check the date on your previous report when planning a renewal."],
  ["What will I receive?", "An Air Conditioning Inspection Report covering the assessment and recommendations, lodged on the official register with its report reference. Keep it with the building records."],
  ["Is servicing included in the inspection?", "No. TM44 is an energy inspection. Cleaning, repairs, refrigerant work and adjustments are separate services and should be scoped independently."],
  ["How much does a TM44 inspection cost?", "The quote depends on the equipment and number of systems, the buildings involved, access arrangements and the records available. Share what you know; the scope and price can then be agreed before the inspection is booked."],
  ["Can I enquire without an equipment list or old report?", "Yes. Tell us the site address and approximate number of units. Photos, model numbers and maintenance records can help define the scope. Choose ‘Not sure’ for details you do not yet have."],
  ["Can you quote for several sites?", "Yes. Include the site addresses, a contact for each building and any previous reports or asset schedules. Each building can then be scoped within the wider enquiry."],
] as const;
export const tm44ReportItems = [
  ["Equipment & capacity", "An inventory of the systems assessed and the equipment information used to define the inspection."],
  ["Efficiency & controls", "Assessment of operation, controls, maintenance condition and suitability for the building’s cooling needs."],
  ["Recommendations", "Findings and practical opportunities to improve energy performance, with maintenance or repair work kept separate."],
  ["Lodged ACIR", "An Air Conditioning Inspection Report lodged on the official register with its unique report reference."],
] as const;
export const tm44PricingFactors = [
  ["Equipment & system types", "Unit numbers, system layout and whether the building uses splits, multi-splits, VRF or other cooling equipment."],
  ["Buildings & access", "The number of addresses and arrangements for plant rooms, outdoor equipment, roof access or occupied areas."],
  ["Available records", "Equipment schedules, previous reports and service information help establish the scope efficiently."],
  ["Site arrangements", "Inductions, escorts, operating hours and any restrictions that affect how the assessment is carried out."],
] as const;
