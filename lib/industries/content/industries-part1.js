import { buildArchitecture } from "./productTemplates";

const IMAGES = {
  "real-estate": "/Properties Faster.png",
  "non-profit": "/Amplify Mission.png",
  "financial-services": "/Accelerate Financial.png",
  education: "/Personalize Alumni.png",
  "professional-services": "/Streamlined Communication.png",
  healthcare: "/Resolve.png",
};

function withArchitecture(industryLabel, productSlug, content) {
  return { ...content, architecture: buildArchitecture(industryLabel, productSlug) };
}

const realEstate = {
  klouddata: withArchitecture("Real Estate", "klouddata", {
    hero: {
      badge: "Real Estate · KloudData",
      title: "Salesforce Data Backup & Recovery for Real Estate",
      description:
        "Real estate teams manage high-value leads, listings, deals, and client relationships in Salesforce. KloudData protects property data, transaction records, and agent activity from accidental loss.",
      secondaryDescription:
        "Automated backup and rapid restore help brokerages, developers, and property sales teams maintain continuity across every deal stage.",
      image: IMAGES["real-estate"],
    },
    dataTable: {
      title: "Real Estate Data — What Needs Backup",
      subtitle: "Protect the Salesforce records that drive listings, leads, and closed deals.",
      col1Label: "Real Estate Data",
      col2Label: "What Needs Backup",
      col3Label: "Why It Matters",
      rows: [
        { category: "Leads & Prospects", examples: "Leads, inquiries, buyer/seller contacts", reason: "Preserve pipeline and conversion history" },
        { category: "Listings & Properties", examples: "Properties, listings, availability status", reason: "Protect active and historical inventory" },
        { category: "Deals & Transactions", examples: "Opportunities, offers, closings", reason: "Critical for revenue and commission tracking" },
        { category: "Client Accounts", examples: "Buyers, sellers, investors, tenants", reason: "Maintain long-term client relationships" },
        { category: "Agent & Team Data", examples: "Agents, territories, assignments", reason: "Support team operations and accountability" },
        { category: "Marketing Campaigns", examples: "Campaigns, open house events, nurture flows", reason: "Protect acquisition and engagement data" },
        { category: "Service & Support", examples: "Cases, maintenance requests, tenant issues", reason: "Preserve property management history" },
        { category: "Custom Objects", examples: "MLS integrations, property-specific fields", reason: "Protect business-specific configurations" },
      ],
    },
    useCases: {
      title: "Key Real Estate Use Cases",
      items: [
        { title: "Accidental Listing Deletion", body: "Restore property listings, photos metadata, and related records deleted during bulk updates or user errors." },
        { title: "MLS Integration Failures", body: "Recover data corrupted by MLS sync, portal feeds, or third-party listing integrations." },
        { title: "Deal Pipeline Recovery", body: "Restore opportunities, offers, and transaction stages after mass updates or deployment issues." },
        { title: "Agent Territory Changes", body: "Roll back incorrect bulk reassignment of leads, listings, or accounts across agent teams." },
        { title: "Compliance & Audit", body: "Maintain historical transaction and client records for regulatory and brokerage audits." },
        { title: "Sandbox & Release Safety", body: "Recover production data affected by configuration changes or failed deployments." },
      ],
    },
    valueProposition: {
      eyebrow: "Real Estate Value",
      title: "Protect Every Listing, Lead & Deal.",
      description:
        "Real estate businesses cannot afford to lose listing data, client records, or transaction history. KloudData provides automated Salesforce backup and rapid restoration tailored for property sales teams.",
    },
    modules: {
      title: "Real Estate Salesforce Data Protection",
      items: [
        { title: "Lead & Prospect Protection", body: "Backup leads, inquiries, and buyer/seller contact records." },
        { title: "Listing & Property Protection", body: "Protect property records, listings, and availability data." },
        { title: "Deal & Transaction Protection", body: "Secure opportunities, offers, and closing records." },
        { title: "Client Relationship Backup", body: "Preserve accounts, contacts, and interaction history." },
        { title: "Agent & Territory Data", body: "Protect team assignments, territories, and activity records." },
        { title: "Automated Recovery", body: "Restore records individually or in bulk with relationship preservation." },
      ],
    },
    cta: { title: "Ready to protect your real estate Salesforce data?", description: "Talk to Kloudvault about backup and recovery for brokerages and property sales teams.", button: "Book a Demo" },
  }),
  kloudscan: withArchitecture("Real Estate", "kloudscan", {
    hero: {
      badge: "Real Estate · KloudScan",
      title: "AI Document Intelligence for Real Estate on Salesforce",
      description:
        "Real estate teams process purchase agreements, lease contracts, disclosures, and inspection reports daily. KloudScan extracts key fields and populates Salesforce automatically.",
      secondaryDescription: "Reduce manual data entry for agents, transaction coordinators, and property management teams.",
      image: IMAGES["real-estate"],
    },
    dataTable: {
      title: "Real Estate Documents — What KloudScan Processes",
      subtitle: "Automate extraction from the documents that power property transactions.",
      col1Label: "Document Type",
      col2Label: "Common Examples",
      col3Label: "Business Value",
      rows: [
        { category: "Purchase Agreements", examples: "Sales contracts, addenda, amendments", reason: "Accelerate deal tracking and closing workflows" },
        { category: "Lease Documents", examples: "Residential/commercial leases, renewals", reason: "Populate tenant and property records faster" },
        { category: "Disclosure Forms", examples: "Seller disclosures, property condition reports", reason: "Capture compliance data without manual review" },
        { category: "Inspection Reports", examples: "Home inspections, appraisal summaries", reason: "Link findings to property and deal records" },
        { category: "Title & Closing Docs", examples: "Title reports, settlement statements", reason: "Support transaction coordination and audit trails" },
        { category: "Tenant Applications", examples: "Rental applications, background forms", reason: "Speed up leasing and property management intake" },
      ],
    },
    useCases: {
      title: "Key Real Estate Document Use Cases",
      items: [
        { title: "Contract Data Extraction", body: "Extract parties, property address, price, and key dates from purchase agreements into Salesforce deals." },
        { title: "Lease Processing", body: "Parse lease terms, rent amounts, and tenant details for property management workflows." },
        { title: "Disclosure Intake", body: "Classify and extract disclosure form data linked to listings and transactions." },
        { title: "Multi-Format Document Handling", body: "Process scanned, photographed, and digital PDFs from agents and title companies." },
        { title: "Transaction Coordinator Efficiency", body: "Reduce manual entry for coordinators managing multiple concurrent closings." },
        { title: "Audit-Ready Extraction Logs", body: "Maintain processing history for brokerage compliance and transaction audits." },
      ],
    },
    valueProposition: {
      eyebrow: "Real Estate Value",
      title: "Turn Property Documents into Salesforce Records.",
      description: "From purchase agreements to lease applications, KloudScan eliminates manual document processing and feeds validated data into your real estate Salesforce workflows.",
    },
    modules: {
      title: "Real Estate Document Intelligence Modules",
      items: [
        { title: "Purchase Agreement Parsing", body: "Extract buyer, seller, price, and closing details from sales contracts." },
        { title: "Lease Document Extraction", body: "Capture tenant, term, rent, and property data from lease agreements." },
        { title: "Disclosure Processing", body: "Classify and extract seller disclosure and condition report fields." },
        { title: "Inspection Report Intake", body: "Parse findings and link to property and opportunity records." },
        { title: "Closing Document Review", body: "Extract settlement and title document data for transaction tracking." },
        { title: "Salesforce Sync", body: "Map extracted fields to listings, deals, and account records with review controls." },
      ],
    },
    cta: { title: "Ready to automate real estate document processing?", description: "Talk to Kloudvault about KloudScan for brokerages and property management teams.", button: "Book a Demo" },
  }),
  kloudfiles: withArchitecture("Real Estate", "kloudfiles", {
    hero: {
      badge: "Real Estate · KloudFiles",
      title: "Salesforce Files Backup & Recovery for Real Estate",
      description:
        "Property photos, contracts, disclosures, and floor plans live in Salesforce Files. KloudFiles ensures these assets are backed up and recoverable with full record context.",
      secondaryDescription: "Protect documents across listings, deals, accounts, and property management cases.",
      image: IMAGES["real-estate"],
    },
    dataTable: {
      title: "Real Estate Files — What Needs Protection",
      subtitle: "Every file attached to a listing or deal represents commercial and client value.",
      col1Label: "File Category",
      col2Label: "Common Examples",
      col3Label: "Why It Matters",
      rows: [
        { category: "Property Photos", examples: "Listing photos, virtual tour assets, floor plans", reason: "Maintain marketing-ready property presentations" },
        { category: "Transaction Documents", examples: "Contracts, addenda, closing packages", reason: "Preserve deal documentation for compliance" },
        { category: "Disclosure Files", examples: "Seller disclosures, inspection attachments", reason: "Support legal and brokerage requirements" },
        { category: "Client Correspondence", examples: "Emails, letters, signed authorizations", reason: "Maintain complete client communication history" },
        { category: "Lease & Tenant Files", examples: "Lease agreements, ID documents, notices", reason: "Protect property management records" },
        { category: "Marketing Materials", examples: "Brochures, flyers, open house assets", reason: "Recover campaign and listing marketing files" },
      ],
    },
    useCases: {
      title: "Key Real Estate File Use Cases",
      items: [
        { title: "Listing Photo Recovery", body: "Restore property images and marketing assets deleted from listing records." },
        { title: "Contract File Restoration", body: "Recover purchase agreements and closing documents linked to deals." },
        { title: "Record Context Preservation", body: "Restore files with original links to listings, accounts, and opportunities." },
        { title: "Agent File Accidents", body: "Recover files accidentally removed during listing updates or team transitions." },
        { title: "Compliance Documentation", body: "Provide complete file histories for brokerage audits and disputes." },
        { title: "Disaster Recovery", body: "Rapidly restore property file libraries after data incidents." },
      ],
    },
    valueProposition: {
      eyebrow: "Real Estate Value",
      title: "Protect Every Property File & Document.",
      description: "Real estate teams store critical documents in Salesforce. KloudFiles provides automated backup, encryption, and recovery for property photos, contracts, and client files.",
    },
    modules: {
      title: "Real Estate Files Protection Modules",
      items: [
        { title: "Listing Asset Backup", body: "Protect photos, floor plans, and marketing files on property records." },
        { title: "Transaction Document Recovery", body: "Restore contracts, addenda, and closing packages on deals." },
        { title: "Client File Protection", body: "Backup correspondence and signed documents on accounts." },
        { title: "Lease & Tenant Files", body: "Secure lease agreements and tenant documentation." },
        { title: "Version History", body: "Access previous versions of updated listing and contract files." },
        { title: "Bulk File Restore", body: "Recover multiple files across listings and deals efficiently." },
      ],
    },
    cta: { title: "Ready to protect your real estate Salesforce files?", description: "Talk to Kloudvault about KloudFiles for brokerages and property teams.", button: "Book a Demo" },
  }),
};

const nonProfit = {
  klouddata: withArchitecture("Non Profit", "klouddata", {
    hero: {
      badge: "Non Profit · KloudData",
      title: "Salesforce Data Backup & Recovery for Nonprofits",
      description:
        "Nonprofits rely on Salesforce for donor relationships, grant tracking, volunteer management, and program delivery. KloudData protects mission-critical constituent and program data.",
      secondaryDescription: "Help lean teams maintain data continuity without dedicated IT resources.",
      image: IMAGES["non-profit"],
    },
    dataTable: {
      title: "Nonprofit Data — What Needs Backup",
      subtitle: "Protect the Salesforce records that sustain donor engagement and program impact.",
      col1Label: "Nonprofit Data",
      col2Label: "What Needs Backup",
      col3Label: "Why It Matters",
      rows: [
        { category: "Donor Records", examples: "Donors, households, giving history", reason: "Preserve fundraising relationships and revenue" },
        { category: "Grants & Funding", examples: "Grants, applications, award tracking", reason: "Protect funding pipeline and compliance data" },
        { category: "Volunteers", examples: "Volunteer profiles, hours, assignments", reason: "Maintain volunteer engagement history" },
        { category: "Campaigns", examples: "Fundraising campaigns, appeals, events", reason: "Protect acquisition and outreach data" },
        { category: "Programs & Services", examples: "Program enrollments, beneficiaries, outcomes", reason: "Support impact reporting and continuity" },
        { category: "Membership Data", examples: "Members, renewals, benefits", reason: "Protect membership revenue and engagement" },
        { category: "Cases & Support", examples: "Constituent inquiries, service requests", reason: "Preserve service delivery history" },
        { category: "Custom Objects", examples: "Program-specific Salesforce objects", reason: "Protect tailored nonprofit configurations" },
      ],
    },
    useCases: {
      title: "Key Nonprofit Use Cases",
      items: [
        { title: "Donor Record Recovery", body: "Restore donor profiles and giving history accidentally deleted during data cleanup or imports." },
        { title: "Grant Data Protection", body: "Recover grant applications, awards, and reporting records after bulk update errors." },
        { title: "Volunteer Database Restore", body: "Roll back incorrect mass updates to volunteer hours, assignments, or contact records." },
        { title: "Campaign Data Loss", body: "Recover fundraising campaign members and appeal response data." },
        { title: "Compliance & Reporting", body: "Maintain historical constituent and financial data for audits and grant reporting." },
        { title: "Integration Failures", body: "Recover data corrupted by donation platform, email, or event management integrations." },
      ],
    },
    valueProposition: {
      eyebrow: "Nonprofit Value",
      title: "Protect Every Donor, Grant & Program Record.",
      description: "Nonprofits cannot afford to lose donor relationships, grant data, or program records. KloudData provides automated Salesforce backup tailored for mission-driven organizations.",
    },
    modules: {
      title: "Nonprofit Salesforce Data Protection",
      items: [
        { title: "Donor & Constituent Protection", body: "Backup donor profiles, households, and giving history." },
        { title: "Grant & Funding Backup", body: "Protect grant applications, awards, and reporting records." },
        { title: "Volunteer Data Protection", body: "Secure volunteer profiles, hours, and assignment records." },
        { title: "Campaign & Event Data", body: "Backup fundraising campaigns, appeals, and event registrations." },
        { title: "Program Record Backup", body: "Protect enrollments, beneficiaries, and outcome data." },
        { title: "Automated Recovery", body: "Restore records with relationship preservation for lean teams." },
      ],
    },
    cta: { title: "Ready to protect your nonprofit Salesforce data?", description: "Talk to Kloudvault about backup and recovery for mission-driven organizations.", button: "Book a Demo" },
  }),
  kloudscan: withArchitecture("Non Profit", "kloudscan", {
    hero: {
      badge: "Non Profit · KloudScan",
      title: "AI Document Intelligence for Nonprofits on Salesforce",
      description:
        "Nonprofits process grant applications, donor letters, tax forms, and program documentation. KloudScan automates extraction to reduce manual data entry for small teams.",
      secondaryDescription: "Accelerate grant intake, donor onboarding, and compliance documentation workflows.",
      image: IMAGES["non-profit"],
    },
    dataTable: {
      title: "Nonprofit Documents — What KloudScan Processes",
      subtitle: "Automate extraction from documents that support fundraising and program delivery.",
      col1Label: "Document Type",
      col2Label: "Common Examples",
      col3Label: "Business Value",
      rows: [
        { category: "Grant Applications", examples: "Foundation applications, LOIs, proposals", reason: "Accelerate grant tracking and reporting" },
        { category: "Donor Correspondence", examples: "Pledge letters, major gift agreements", reason: "Capture commitment details in Salesforce" },
        { category: "Tax & Compliance Forms", examples: "W-9s, 990 schedules, board resolutions", reason: "Support financial and regulatory compliance" },
        { category: "Program Intake Forms", examples: "Beneficiary applications, enrollment forms", reason: "Speed up program registration workflows" },
        { category: "Volunteer Documents", examples: "Applications, waivers, background forms", reason: "Populate volunteer records automatically" },
        { category: "Event Registration", examples: "Sign-up forms, sponsorship agreements", reason: "Sync event and campaign data faster" },
      ],
    },
    useCases: {
      title: "Key Nonprofit Document Use Cases",
      items: [
        { title: "Grant Application Intake", body: "Extract funder, amount, deadline, and program details from grant documents." },
        { title: "Donor Pledge Processing", body: "Parse pledge letters and major gift agreements into donor records." },
        { title: "Program Enrollment", body: "Extract beneficiary data from intake forms for program management." },
        { title: "Volunteer Onboarding", body: "Automate volunteer application and waiver form processing." },
        { title: "Compliance Documentation", body: "Classify and extract tax and governance documents for audit readiness." },
        { title: "Multi-Format Processing", body: "Handle scanned, emailed, and uploaded documents from diverse sources." },
      ],
    },
    valueProposition: {
      eyebrow: "Nonprofit Value",
      title: "Turn Mission Documents into Salesforce Data.",
      description: "KloudScan helps nonprofits process grants, donor documents, and program forms without overwhelming lean teams with manual data entry.",
    },
    modules: {
      title: "Nonprofit Document Intelligence Modules",
      items: [
        { title: "Grant Document Extraction", body: "Parse applications, awards, and reporting requirements." },
        { title: "Donor Document Processing", body: "Extract pledge and gift agreement details into CRM records." },
        { title: "Program Form Intake", body: "Capture enrollment and beneficiary data from intake forms." },
        { title: "Volunteer Form Processing", body: "Automate volunteer application and waiver extraction." },
        { title: "Compliance Document Review", body: "Classify tax and governance documents for record-keeping." },
        { title: "Salesforce Sync", body: "Map extracted data to donor, grant, and program objects." },
      ],
    },
    cta: { title: "Ready to automate nonprofit document processing?", description: "Talk to Kloudvault about KloudScan for fundraising and program teams.", button: "Book a Demo" },
  }),
  kloudfiles: withArchitecture("Non Profit", "kloudfiles", {
    hero: {
      badge: "Non Profit · KloudFiles",
      title: "Salesforce Files Backup & Recovery for Nonprofits",
      description:
        "Nonprofits store grant documents, donor files, program materials, and compliance records in Salesforce. KloudFiles ensures these files are protected and recoverable.",
      secondaryDescription: "Maintain file-to-record context across donors, grants, programs, and volunteers.",
      image: IMAGES["non-profit"],
    },
    dataTable: {
      title: "Nonprofit Files — What Needs Protection",
      subtitle: "Protect documents that support fundraising, compliance, and program delivery.",
      col1Label: "File Category",
      col2Label: "Common Examples",
      col3Label: "Why It Matters",
      rows: [
        { category: "Grant Documents", examples: "Applications, award letters, reports", reason: "Support funding compliance and reporting" },
        { category: "Donor Files", examples: "Correspondence, agreements, recognition materials", reason: "Preserve donor relationship history" },
        { category: "Program Materials", examples: "Curricula, intake packets, outcome reports", reason: "Maintain program delivery documentation" },
        { category: "Compliance Records", examples: "Board minutes, policies, audit files", reason: "Meet governance and regulatory requirements" },
        { category: "Event Assets", examples: "Sponsorship decks, registration materials", reason: "Recover fundraising event documentation" },
        { category: "Volunteer Files", examples: "Waivers, certifications, schedules", reason: "Protect volunteer management records" },
      ],
    },
    useCases: {
      title: "Key Nonprofit File Use Cases",
      items: [
        { title: "Grant File Recovery", body: "Restore grant applications and reporting documents linked to funding records." },
        { title: "Donor Document Protection", body: "Backup and recover donor correspondence and pledge agreements." },
        { title: "Program File Restoration", body: "Recover program materials and beneficiary documentation." },
        { title: "Compliance Archive", body: "Maintain complete file histories for board and audit requirements." },
        { title: "Accidental Deletion Recovery", body: "Restore files removed during staff transitions or bulk operations." },
        { title: "Disaster Recovery", body: "Rapidly restore nonprofit file libraries after data incidents." },
      ],
    },
    valueProposition: {
      eyebrow: "Nonprofit Value",
      title: "Protect Every Mission-Critical File.",
      description: "From grant documents to donor files, KloudFiles provides automated backup and recovery for nonprofit Salesforce environments.",
    },
    modules: {
      title: "Nonprofit Files Protection Modules",
      items: [
        { title: "Grant Document Backup", body: "Protect applications, awards, and reporting files." },
        { title: "Donor File Recovery", body: "Restore correspondence and agreements on donor records." },
        { title: "Program Material Protection", body: "Backup curricula, intake packets, and outcome documents." },
        { title: "Compliance File Archival", body: "Secure governance and audit documentation." },
        { title: "Version History", body: "Access previous versions of updated program and grant files." },
        { title: "Bulk File Restore", body: "Recover multiple files across grants, donors, and programs." },
      ],
    },
    cta: { title: "Ready to protect your nonprofit Salesforce files?", description: "Talk to Kloudvault about KloudFiles for mission-driven organizations.", button: "Book a Demo" },
  }),
};

export const INDUSTRY_PAGE_CONTENT = {
  "real-estate": realEstate,
  "non-profit": nonProfit,
};
