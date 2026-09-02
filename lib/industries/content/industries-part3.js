import { buildArchitecture } from "./productTemplates";

const IMAGES = {
  "professional-services": "/Streamlined Communication.png",
  healthcare: "/Resolve.png",
};

function withArchitecture(industryLabel, productSlug, content) {
  return { ...content, architecture: buildArchitecture(industryLabel, productSlug) };
}

const professionalServices = {
  klouddata: withArchitecture("Professional Services", "klouddata", {
    hero: {
      badge: "Professional Services · KloudData",
      title: "Salesforce Data Backup & Recovery for Professional Services",
      description:
        "Consulting, legal, and advisory firms manage client engagements, projects, and deliverables in Salesforce. KloudData protects client data, project records, and revenue pipelines.",
      secondaryDescription: "Maintain continuity across distributed teams and fast-moving client engagements.",
      image: IMAGES["professional-services"],
    },
    dataTable: {
      title: "Professional Services Data — What Needs Backup",
      subtitle: "Protect client, project, and engagement data in Salesforce.",
      col1Label: "Professional Services Data",
      col2Label: "What Needs Backup",
      col3Label: "Why It Matters",
      rows: [
        { category: "Client Accounts", examples: "Clients, contacts, relationship history", reason: "Preserve long-term client relationships" },
        { category: "Engagements & Projects", examples: "Projects, milestones, deliverables", reason: "Protect project delivery and billing data" },
        { category: "Opportunities & Proposals", examples: "Pipeline, proposals, SOW tracking", reason: "Critical for revenue forecasting" },
        { category: "Time & Billing", examples: "Time entries, expenses, invoices", reason: "Protect revenue recognition data" },
        { category: "Resources & Staffing", examples: "Consultant profiles, assignments, utilization", reason: "Support team allocation and planning" },
        { category: "Cases & Support", examples: "Client inquiries, issue tracking", reason: "Maintain service delivery history" },
        { category: "Knowledge & IP", examples: "Methodologies, templates, best practices", reason: "Protect firm intellectual property" },
        { category: "Custom Objects", examples: "Practice-specific Salesforce objects", reason: "Protect tailored firm configurations" },
      ],
    },
    useCases: {
      title: "Key Professional Services Use Cases",
      items: [
        { title: "Client Record Recovery", body: "Restore client profiles and engagement history after accidental deletion." },
        { title: "Project Data Protection", body: "Recover project milestones, deliverables, and billing records after bulk updates." },
        { title: "Pipeline Restoration", body: "Roll back incorrect updates to opportunities and proposal tracking." },
        { title: "Time Entry Recovery", body: "Restore billable hours and expense records affected by integration errors." },
        { title: "Client Confidentiality", body: "Maintain secure backup copies for sensitive client engagement data." },
        { title: "Deployment Safety", body: "Recover production data affected by Salesforce releases or configuration changes." },
      ],
    },
    valueProposition: {
      eyebrow: "Professional Services Value",
      title: "Protect Every Client, Project & Engagement.",
      description: "Professional services firms depend on accurate Salesforce data for client delivery and revenue. KloudData provides automated backup and rapid recovery for consulting and advisory teams.",
    },
    modules: {
      title: "Professional Services Data Protection",
      items: [
        { title: "Client Data Protection", body: "Backup accounts, contacts, and relationship history." },
        { title: "Project & Engagement Backup", body: "Protect projects, milestones, and deliverable records." },
        { title: "Pipeline & Proposal Protection", body: "Secure opportunities, proposals, and SOW tracking." },
        { title: "Time & Billing Recovery", body: "Backup time entries, expenses, and invoice records." },
        { title: "Resource & Staffing Data", body: "Protect consultant profiles and assignment records." },
        { title: "Automated Recovery", body: "Restore records individually or in bulk with relationship preservation." },
      ],
    },
    cta: { title: "Ready to protect your professional services Salesforce data?", description: "Talk to Kloudvault about backup and recovery for consulting and advisory firms.", button: "Book a Demo" },
  }),
  kloudscan: withArchitecture("Professional Services", "kloudscan", {
    hero: {
      badge: "Professional Services · KloudScan",
      title: "AI Document Intelligence for Professional Services on Salesforce",
      description:
        "Firms process SOWs, contracts, proposals, and invoices daily. KloudScan extracts key fields and populates Salesforce client and project records automatically.",
      secondaryDescription: "Accelerate client onboarding, contract management, and billing workflows.",
      image: IMAGES["professional-services"],
    },
    dataTable: {
      title: "Professional Services Documents — What KloudScan Processes",
      subtitle: "Automate extraction from client engagement and commercial documents.",
      col1Label: "Document Type",
      col2Label: "Common Examples",
      col3Label: "Business Value",
      rows: [
        { category: "Statements of Work", examples: "SOWs, work orders, change requests", reason: "Accelerate project setup and tracking" },
        { category: "Client Contracts", examples: "MSAs, engagement letters, NDAs", reason: "Capture commercial terms in CRM" },
        { category: "Proposals", examples: "RFP responses, fee proposals, scopes", reason: "Populate opportunity and pipeline data" },
        { category: "Invoices", examples: "Client invoices, credit notes, statements", reason: "Streamline billing and reconciliation" },
        { category: "Timesheets", examples: "Consultant timesheets, expense reports", reason: "Automate time and billing data capture" },
        { category: "Compliance Documents", examples: "Conflict checks, engagement approvals", reason: "Support firm governance requirements" },
      ],
    },
    useCases: {
      title: "Key Professional Services Document Use Cases",
      items: [
        { title: "SOW Processing", body: "Extract scope, timeline, and fee details from statements of work into project records." },
        { title: "Contract Intake", body: "Parse MSAs and engagement letters for client onboarding workflows." },
        { title: "Proposal Extraction", body: "Capture RFP response details and fee structures for pipeline tracking." },
        { title: "Invoice Automation", body: "Extract billing amounts and line items from client invoices." },
        { title: "Multi-Practice Support", body: "Handle diverse document formats across consulting, legal, and advisory practices." },
        { title: "Client Confidentiality", body: "Process sensitive documents with audit-ready extraction logs." },
      ],
    },
    valueProposition: {
      eyebrow: "Professional Services Value",
      title: "Turn Client Documents into Salesforce Records.",
      description: "KloudScan eliminates manual document processing for professional services firms, feeding validated data into client, project, and billing workflows.",
    },
    modules: {
      title: "Professional Services Document Intelligence Modules",
      items: [
        { title: "SOW Extraction", body: "Parse scope, deliverables, and fees from statements of work." },
        { title: "Contract Processing", body: "Extract terms from MSAs, engagement letters, and NDAs." },
        { title: "Proposal Parsing", body: "Capture RFP response and fee proposal details." },
        { title: "Invoice Data Capture", body: "Extract billing amounts and line items automatically." },
        { title: "Timesheet Processing", body: "Parse consultant time and expense report data." },
        { title: "Salesforce Sync", body: "Map extracted data to client, project, and opportunity records." },
      ],
    },
    cta: { title: "Ready to automate professional services document processing?", description: "Talk to Kloudvault about KloudScan for consulting and advisory firms.", button: "Book a Demo" },
  }),
  kloudfiles: withArchitecture("Professional Services", "kloudfiles", {
    hero: {
      badge: "Professional Services · KloudFiles",
      title: "Salesforce Files Backup & Recovery for Professional Services",
      description:
        "Deliverables, contracts, proposals, and client correspondence live in Salesforce Files. KloudFiles ensures these documents are backed up and recoverable.",
      secondaryDescription: "Protect files across clients, projects, engagements, and opportunities.",
      image: IMAGES["professional-services"],
    },
    dataTable: {
      title: "Professional Services Files — What Needs Protection",
      subtitle: "Protect client engagement and commercial documents in Salesforce.",
      col1Label: "File Category",
      col2Label: "Common Examples",
      col3Label: "Why It Matters",
      rows: [
        { category: "Client Deliverables", examples: "Reports, analyses, presentations", reason: "Preserve project output and client value" },
        { category: "Contracts & SOWs", examples: "Engagement letters, work orders, amendments", reason: "Maintain legally binding documentation" },
        { category: "Proposals", examples: "RFP responses, fee proposals, scopes", reason: "Protect pipeline and commercial history" },
        { category: "Client Correspondence", examples: "Emails, meeting notes, signed documents", reason: "Preserve client communication history" },
        { category: "Billing Documents", examples: "Invoices, expense receipts, statements", reason: "Support revenue recognition and audits" },
        { category: "Knowledge Assets", examples: "Templates, methodologies, best practices", reason: "Protect firm intellectual property" },
      ],
    },
    useCases: {
      title: "Key Professional Services File Use Cases",
      items: [
        { title: "Deliverable Recovery", body: "Restore project reports and client deliverables linked to engagements." },
        { title: "Contract File Protection", body: "Backup and recover MSAs, SOWs, and engagement letters." },
        { title: "Client Confidentiality", body: "Maintain secure backup copies of sensitive client documents." },
        { title: "Proposal Archival", body: "Protect RFP responses and fee proposals on opportunity records." },
        { title: "Accidental Deletion Recovery", body: "Restore files removed during project transitions or team changes." },
        { title: "Disaster Recovery", body: "Rapidly restore firm file libraries after data incidents." },
      ],
    },
    valueProposition: {
      eyebrow: "Professional Services Value",
      title: "Protect Every Client Document & Deliverable.",
      description: "KloudFiles provides automated backup and recovery for deliverables, contracts, and client files in professional services Salesforce environments.",
    },
    modules: {
      title: "Professional Services Files Protection Modules",
      items: [
        { title: "Deliverable Backup", body: "Protect reports, analyses, and project output files." },
        { title: "Contract File Recovery", body: "Restore MSAs, SOWs, and engagement documentation." },
        { title: "Proposal Protection", body: "Backup RFP responses and commercial proposals." },
        { title: "Client Correspondence Archival", body: "Secure emails and meeting documentation." },
        { title: "Version History", body: "Access previous versions of updated deliverables and contracts." },
        { title: "Bulk File Restore", body: "Recover multiple files across clients and projects efficiently." },
      ],
    },
    cta: { title: "Ready to protect your professional services Salesforce files?", description: "Talk to Kloudvault about KloudFiles for consulting and advisory firms.", button: "Book a Demo" },
  }),
};

const healthcare = {
  klouddata: withArchitecture("Healthcare", "klouddata", {
    hero: {
      badge: "Healthcare · KloudData",
      title: "Salesforce Data Backup & Recovery for Healthcare",
      description:
        "Healthcare providers manage patient relationships, appointments, care coordination, and administrative data in Salesforce. KloudData protects clinical and operational records.",
      secondaryDescription: "Support HIPAA-aware backup with rapid recovery for care teams and operations.",
      image: IMAGES.healthcare,
    },
    dataTable: {
      title: "Healthcare Data — What Needs Backup",
      subtitle: "Protect patient, provider, and operational records in Salesforce.",
      col1Label: "Healthcare Data",
      col2Label: "What Needs Backup",
      col3Label: "Why It Matters",
      rows: [
        { category: "Patient Records", examples: "Patients, demographics, care profiles", reason: "Preserve patient relationship and care history" },
        { category: "Appointments & Scheduling", examples: "Appointments, referrals, waitlists", reason: "Maintain care coordination workflows" },
        { category: "Provider Data", examples: "Physicians, specialists, care teams", reason: "Support provider network management" },
        { category: "Care Plans", examples: "Treatment plans, care pathways, protocols", reason: "Protect clinical coordination data" },
        { category: "Insurance & Billing", examples: "Coverage, claims, authorization records", reason: "Critical for revenue cycle operations" },
        { category: "Cases & Support", examples: "Patient inquiries, complaints, follow-ups", reason: "Preserve patient services history" },
        { category: "Compliance Records", examples: "Consent, authorizations, privacy preferences", reason: "Meet HIPAA and regulatory requirements" },
        { category: "Custom Objects", examples: "EHR-integrated healthcare objects", reason: "Protect organization-specific configurations" },
      ],
    },
    useCases: {
      title: "Key Healthcare Use Cases",
      items: [
        { title: "Patient Record Recovery", body: "Restore patient profiles and care history after accidental deletion or import errors." },
        { title: "Appointment Data Protection", body: "Recover scheduling and referral records after bulk update failures." },
        { title: "EHR Integration Failures", body: "Restore data corrupted by electronic health record system integrations." },
        { title: "HIPAA Compliance", body: "Maintain encrypted backup copies with audit trails for regulatory requirements." },
        { title: "Care Team Continuity", body: "Recover provider assignments and care plan data after deployment issues." },
        { title: "Cybersecurity Response", body: "Restore clean copies after malicious modification of patient or billing data." },
      ],
    },
    valueProposition: {
      eyebrow: "Healthcare Value",
      title: "Protect Every Patient, Provider & Care Record.",
      description: "Healthcare organizations require rigorous data protection. KloudData delivers automated Salesforce backup with encryption, access controls, and HIPAA-aware recovery.",
    },
    modules: {
      title: "Healthcare Salesforce Data Protection",
      items: [
        { title: "Patient Record Protection", body: "Backup patient profiles, demographics, and care history." },
        { title: "Appointment & Scheduling Backup", body: "Protect appointments, referrals, and waitlist records." },
        { title: "Provider Network Data", body: "Secure physician, specialist, and care team records." },
        { title: "Care Plan Protection", body: "Backup treatment plans and clinical coordination data." },
        { title: "Insurance & Billing Records", body: "Protect coverage, claims, and authorization data." },
        { title: "Automated Recovery", body: "Restore with encryption, access controls, and audit logging." },
      ],
    },
    cta: { title: "Ready to protect your healthcare Salesforce data?", description: "Talk to Kloudvault about HIPAA-aware backup and recovery for healthcare providers.", button: "Book a Demo" },
  }),
  kloudscan: withArchitecture("Healthcare", "kloudscan", {
    hero: {
      badge: "Healthcare · KloudScan",
      title: "AI Document Intelligence for Healthcare on Salesforce",
      description:
        "Healthcare teams process clinical forms, insurance claims, referrals, and consent documents. KloudScan extracts validated data into Salesforce with HIPAA-aware processing.",
      secondaryDescription: "Accelerate patient intake, claims processing, and care coordination workflows.",
      image: IMAGES.healthcare,
    },
    dataTable: {
      title: "Healthcare Documents — What KloudScan Processes",
      subtitle: "Automate extraction from clinical and administrative healthcare documents.",
      col1Label: "Document Type",
      col2Label: "Common Examples",
      col3Label: "Business Value",
      rows: [
        { category: "Clinical Forms", examples: "Intake forms, medical history, assessments", reason: "Accelerate patient onboarding workflows" },
        { category: "Insurance Claims", examples: "Claim forms, EOBs, prior authorizations", reason: "Streamline revenue cycle operations" },
        { category: "Referral Documents", examples: "Physician referrals, specialist orders", reason: "Speed up care coordination" },
        { category: "Consent Forms", examples: "Treatment consent, HIPAA authorizations", reason: "Capture compliance documentation" },
        { category: "Lab & Diagnostic Reports", examples: "Lab results, imaging reports, pathology", reason: "Populate patient records automatically" },
        { category: "Billing Documents", examples: "Superbills, statements, payment records", reason: "Support billing and reconciliation" },
      ],
    },
    useCases: {
      title: "Key Healthcare Document Use Cases",
      items: [
        { title: "Patient Intake Automation", body: "Extract demographics and medical history from intake forms into patient records." },
        { title: "Claims Processing", body: "Parse insurance claim forms and EOBs for revenue cycle workflows." },
        { title: "Referral Management", body: "Extract referring physician and specialty details from referral documents." },
        { title: "Consent Documentation", body: "Process treatment consent and HIPAA authorization forms with audit trails." },
        { title: "Lab Result Intake", body: "Extract test results and values from lab and diagnostic reports." },
        { title: "HIPAA-Compliant Processing", body: "Maintain secure processing logs for regulated document handling." },
      ],
    },
    valueProposition: {
      eyebrow: "Healthcare Value",
      title: "Turn Clinical Documents into Patient Records.",
      description: "KloudScan helps healthcare teams process clinical and administrative documents faster while maintaining HIPAA-aware controls and audit trails.",
    },
    modules: {
      title: "Healthcare Document Intelligence Modules",
      items: [
        { title: "Clinical Form Extraction", body: "Parse intake forms, medical history, and assessment documents." },
        { title: "Insurance Claim Processing", body: "Extract claim details from forms and explanation of benefits." },
        { title: "Referral Document Intake", body: "Capture referring provider and specialty data automatically." },
        { title: "Consent Form Processing", body: "Classify and extract treatment consent and authorization fields." },
        { title: "Lab Report Parsing", body: "Extract test results and diagnostic data from lab reports." },
        { title: "Salesforce Sync", body: "Map extracted data to patient, case, and billing records with controls." },
      ],
    },
    cta: { title: "Ready to automate healthcare document processing?", description: "Talk to Kloudvault about KloudScan for healthcare providers and operations teams.", button: "Book a Demo" },
  }),
  kloudfiles: withArchitecture("Healthcare", "kloudfiles", {
    hero: {
      badge: "Healthcare · KloudFiles",
      title: "Salesforce Files Backup & Recovery for Healthcare",
      description:
        "Medical records, insurance documents, consent forms, and clinical files are stored in Salesforce. KloudFiles provides encrypted backup and HIPAA-aware recovery.",
      secondaryDescription: "Protect sensitive healthcare documents with retention policies and access controls.",
      image: IMAGES.healthcare,
    },
    dataTable: {
      title: "Healthcare Files — What Needs Protection",
      subtitle: "Protect clinical and administrative documents in Salesforce.",
      col1Label: "File Category",
      col2Label: "Common Examples",
      col3Label: "Why It Matters",
      rows: [
        { category: "Medical Records", examples: "Clinical notes, charts, treatment plans", reason: "Preserve patient care documentation" },
        { category: "Insurance Documents", examples: "Claims, EOBs, authorization letters", reason: "Support revenue cycle and compliance" },
        { category: "Consent Forms", examples: "Treatment consent, HIPAA authorizations", reason: "Meet regulatory documentation requirements" },
        { category: "Referral Files", examples: "Physician referrals, specialist orders", reason: "Maintain care coordination records" },
        { category: "Lab & Imaging", examples: "Lab results, radiology reports, pathology", reason: "Protect diagnostic documentation" },
        { category: "Billing Files", examples: "Superbills, statements, payment records", reason: "Support financial operations and audits" },
      ],
    },
    useCases: {
      title: "Key Healthcare File Use Cases",
      items: [
        { title: "Medical Record Recovery", body: "Restore clinical documents linked to patient records." },
        { title: "Insurance File Protection", body: "Backup and recover claims and authorization documents." },
        { title: "HIPAA Compliance", body: "Maintain encrypted file histories for privacy requirements." },
        { title: "Consent Document Archival", body: "Protect treatment consent and authorization files." },
        { title: "Accidental Deletion Recovery", body: "Restore files removed during staff transitions or system updates." },
        { title: "Disaster Recovery", body: "Rapidly restore healthcare file libraries after data incidents." },
      ],
    },
    valueProposition: {
      eyebrow: "Healthcare Value",
      title: "Protect Every Clinical Document & File.",
      description: "KloudFiles delivers encrypted backup, retention controls, and rapid recovery for sensitive healthcare documents in Salesforce.",
    },
    modules: {
      title: "Healthcare Files Protection Modules",
      items: [
        { title: "Medical Record Backup", body: "Protect clinical notes, charts, and treatment documents." },
        { title: "Insurance File Recovery", body: "Restore claims, EOBs, and authorization documents." },
        { title: "Consent Document Protection", body: "Secure treatment consent and HIPAA authorization files." },
        { title: "Referral File Archival", body: "Backup physician referrals and specialist orders." },
        { title: "Encrypted Recovery", body: "Restore files with encryption and access controls intact." },
        { title: "Bulk File Restore", body: "Recover multiple files across patient and billing records." },
      ],
    },
    cta: { title: "Ready to protect your healthcare Salesforce files?", description: "Talk to Kloudvault about KloudFiles for healthcare providers and operations teams.", button: "Book a Demo" },
  }),
};

export const INDUSTRY_PAGE_CONTENT_PART3 = {
  "professional-services": professionalServices,
  healthcare,
};
