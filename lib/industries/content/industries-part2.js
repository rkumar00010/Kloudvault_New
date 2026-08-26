import { buildArchitecture } from "./productTemplates";

const IMAGES = {
  "financial-services": "/Accelerate Financial.png",
  education: "/Personalize Alumni.png",
  "professional-services": "/Streamlined Communication.png",
  healthcare: "/Resolve.png",
};

function withArchitecture(industryLabel, productSlug, content) {
  return { ...content, architecture: buildArchitecture(industryLabel, productSlug) };
}

const financialServices = {
  klouddata: {
    hero: {
      badge: "Financial Services · KloudData",
      title: "Salesforce Data Backup & Restore for Finance",
      tagline: "Protect Critical Financial Data",
      description:
        "For the finance industry, Salesforce often contains highly sensitive customer, financial, transaction, service, and compliance-related information. A dedicated Salesforce Data Backup & Restore solution helps financial organizations protect this data from accidental deletion, data corruption, integration failures, and operational errors.",
      secondaryDescription:
        "Financial institutions use Salesforce for customer relationship management, sales, onboarding, service, lending, wealth management, insurance, and partner management. A data-loss event can impact customers, revenue, compliance, and business continuity.",
      image: IMAGES["financial-services"],
    },
    dataTable: {
      title: "Key Finance Data to Protect",
      subtitle: "Protect the Salesforce records that sustain customer relationships, transactions, compliance, and partner operations.",
      col1Label: "Salesforce Data",
      col2Label: "Examples",
      col3Label: "Why Backup Matters",
      rows: [
        { category: "Customer Data", examples: "Accounts, Contacts, customer profiles", reason: "Protect customer relationships" },
        { category: "Financial Applications", examples: "Loan applications, investment applications, financial cases", reason: "Critical business information" },
        { category: "Transactions", examples: "Payment-related records, financial transactions, commissions", reason: "Protect transaction history" },
        { category: "KYC Data", examples: "Customer verification and onboarding information", reason: "Compliance & customer onboarding" },
        { category: "Service Data", examples: "Cases, complaints, requests", reason: "Maintain customer service history" },
        { category: "Opportunity Data", examples: "Loans, investments, insurance, financial products", reason: "Protect sales pipeline" },
        { category: "Documents", examples: "KYC, contracts, statements, applications", reason: "Prevent critical document loss" },
        { category: "Partner Data", examples: "Brokers, agents, financial partners", reason: "Protect partner operations" },
        { category: "Compliance Data", examples: "Audit and regulatory records", reason: "Support compliance requirements" },
        { category: "Custom Objects", examples: "Organization-specific financial data", reason: "Protect Salesforce customizations" },
      ],
    },
    useCases: {
      title: "Major Finance Use Cases",
      columns: 2,
      items: [
        {
          title: "1. Accidental Data Deletion",
          body: "A user accidentally deletes customer, application, transaction, or service records.",
          flow: "Backup → Search → Identify → Restore",
          footer: "The organization can recover the required records without rebuilding them manually.",
        },
        {
          title: "2. Mass Data Update Errors",
          body: "A bulk upload, automation, Flow, integration, or data migration incorrectly changes thousands of records. A backup allows the organization to recover the pre-change version of the affected data.",
        },
        {
          title: "3. Integration Failure",
          body: "Finance organizations frequently connect Salesforce with:",
          bullets: [
            "Core banking systems",
            "Loan management systems",
            "ERP",
            "Payment platforms",
            "KYC/AML systems",
            "Data warehouses",
            "Marketing platforms",
          ],
          footer:
            "If an integration incorrectly creates, updates, or deletes Salesforce records, backup provides a recovery point.",
        },
        {
          title: "4. Protection of Financial Documents",
          body: "Salesforce Files and Attachments may contain:",
          bullets: [
            "KYC documents",
            "Contracts",
            "Financial statements",
            "Loan documents",
            "Customer applications",
            "Agreements",
            "Proof-of-identity documents",
          ],
          footer: "These files should be backed up along with their Salesforce record relationships.",
        },
        {
          title: "5. Salesforce Deployment & Automation Errors",
          body: "A new Flow, Apex process, integration, or deployment can unintentionally modify business data. Backup provides the ability to recover the data affected by the change.",
        },
        {
          title: "6. Business Continuity",
          body: "For financial organizations, data availability is critical. A backup and recovery strategy helps minimize the impact of data-loss incidents and supports business continuity planning.",
        },
      ],
    },
    architecture: {
      title: "Finance-Specific Backup Architecture",
      subtitle: "This should support both structured Salesforce records and unstructured files.",
      steps: [
        "Salesforce",
        "Automated Data & File Backup",
        "Encrypted Backup Storage",
        "Multiple Recovery Points",
        "Search & Compare",
        "Record-Level / Bulk Restore",
      ],
      capabilitiesTitle: "Important Capabilities",
      capabilities: [
        "Automated scheduled backup",
        "Incremental backup",
        "Full data backup",
        "Salesforce Files backup",
        "Metadata backup",
        "Record-level restore",
        "Bulk restore",
        "Point-in-time recovery",
        "Relationship-aware recovery",
        "File and attachment recovery",
        "Encryption",
        "Role-based access",
        "Backup retention policies",
        "Audit trail",
        "Backup monitoring",
        "Alerts and notifications",
        "API-based backup",
        "Sandbox recovery",
        "Search and retrieve historical data",
      ],
    },
    valueProposition: {
      eyebrow: "Strong Value Proposition for Finance",
      title: "Protect Financial Data. Recover with Confidence.",
      description:
        "Salesforce Data Backup & Recovery for Financial Services provides automated protection for customer, application, transaction, compliance, service, and document data—helping financial organizations reduce data-loss risk, maintain business continuity, and recover critical Salesforce information quickly.",
    },
    modules: {
      title: "Salesforce Data Backup & Recovery for Financial Services",
      subtitle: "Protect → Monitor → Recover",
      description: "Suggested website structure for a finance-focused Salesforce data protection solution.",
      items: [
        {
          title: "Customer Data Protection",
          body: "Protect customer profiles, applications, interactions, and financial relationship data.",
        },
        {
          title: "Transaction & Application Protection",
          body: "Secure critical loan, investment, insurance, and transaction-related Salesforce records.",
        },
        {
          title: "Document Protection",
          body: "Backup KYC documents, contracts, financial statements, applications, and Salesforce Files.",
        },
        {
          title: "Compliance & Audit Protection",
          body: "Maintain historical backup copies and recovery records to support organizational compliance and audit requirements.",
        },
        {
          title: "Intelligent Recovery",
          body: "Find and restore individual records, related records, files, or large datasets when data is accidentally deleted or corrupted.",
        },
      ],
    },
    cta: {
      title: "Ready to protect your financial services Salesforce data?",
      description:
        "Talk to Kloudvault about finance-focused backup, recovery, and data protection for your Salesforce environment.",
      button: "Book a Demo",
    },
  },
  kloudscan: {
    hero: {
      badge: "Financial Services · KloudScan",
      title: "AI-Powered Document Intelligence for Financial Services",
      tagline: "Transform Financial Documents into Actionable Salesforce Data",
      description:
        "For the finance industry, AI-enabled OCR is particularly valuable because financial organizations process huge volumes of documents, forms, statements, invoices, KYC documents, loan papers, and compliance records. Traditional OCR only extracts text; AI + OCR understands the document and converts it into actionable Salesforce data.",
      secondaryDescription:
        "Automatically capture, understand, validate, and process information from KYC documents, loan applications, bank statements, financial statements, contracts, invoices, and compliance documents using AI-powered OCR integrated with Salesforce.",
      image: IMAGES["financial-services"],
    },
    useCases: {
      title: "Why Finance Needs AI-Enabled OCR",
      columns: 2,
      items: [
        {
          title: "1. Faster KYC & Customer Onboarding",
          body: "Financial institutions receive identity and address documents such as:",
          bullets: [
            "PAN / Aadhaar",
            "Passport",
            "Driving licence",
            "Address proof",
            "Bank statements",
            "Customer application forms",
          ],
          footer:
            "AI OCR can extract relevant information automatically and populate Salesforce, reducing manual data entry and onboarding time.",
        },
        {
          title: "2. Loan & Credit Processing",
          body: "Loan applications involve large amounts of documentation:",
          bullets: [
            "Income statements",
            "Bank statements",
            "Salary slips",
            "Tax documents",
            "Credit reports",
            "Property documents",
            "Business financial statements",
          ],
          flow: "Document → AI OCR → Data Extraction → Validation → Salesforce",
          footer: "AI OCR can extract key information and structure it for Salesforce. This can significantly reduce manual document processing.",
        },
        {
          title: "3. Financial Statement Analysis",
          body: "Instead of simply reading a PDF, AI can identify:",
          bullets: [
            "Account holder",
            "Statement period",
            "Bank name",
            "Transactions",
            "Credits/debits",
            "Balances",
            "Important financial fields",
          ],
          footer: "This makes documents searchable and usable within business processes.",
        },
        {
          title: "4. Invoice & Expense Processing",
          body: "For banks, NBFCs, insurance companies, and financial organizations, AI OCR can extract:",
          bullets: [
            "Invoice number",
            "Vendor",
            "Date",
            "Tax",
            "Amount",
            "Line items",
            "Payment details",
          ],
          footer: "The extracted information can then be integrated with Salesforce workflows or financial systems.",
        },
        {
          title: "5. Contract & Agreement Intelligence",
          body: "Financial organizations manage thousands of:",
          bullets: [
            "Loan agreements",
            "Customer contracts",
            "Partner agreements",
            "Investment documents",
            "Insurance documents",
          ],
          footer: "AI can identify important fields, clauses, dates, parties, amounts, and expiry information.",
        },
        {
          title: "6. Compliance & Audit",
          body: "AI OCR can convert unstructured documents into searchable information, making it easier to:",
          bullets: [
            "Find documents",
            "Identify required information",
            "Maintain audit trails",
            "Validate submitted documents",
            "Detect missing information",
            "Support compliance processes",
          ],
        },
        {
          title: "7. Fraud & Anomaly Detection",
          body: "This is where AI becomes more powerful than traditional OCR. AI can compare extracted information and identify potential anomalies such as:",
          bullets: [
            "Inconsistent customer information",
            "Duplicate documents",
            "Suspicious alterations",
            "Mismatched amounts",
            "Missing information",
            "Unusual document patterns",
          ],
          footer: "The system can flag the document for human review.",
        },
        {
          title: "8. Reduce Manual Data Entry",
          beforeAfter: {
            without: "Document → Employee reads → Employee enters data → Employee validates → Salesforce",
            with: "Document → AI OCR → AI understands → Validates → Salesforce → Automation",
          },
          footer: "This can reduce repetitive work and improve data consistency.",
        },
      ],
    },
    comparisonTable: {
      title: "OCR vs AI-Enabled OCR",
      col1Label: "Traditional OCR",
      col2Label: "AI-Enabled OCR",
      rows: [
        { left: "Reads text", right: "Understands documents" },
        { left: "Basic text extraction", right: "Context-aware extraction" },
        { left: "Fixed formats work best", right: "Handles multiple document formats" },
        { left: "Limited validation", right: "Intelligent validation" },
        { left: "Manual review required", right: "Confidence-based review" },
        { left: "Text output", right: "Structured business data" },
        { left: "Limited automation", right: "Workflow automation" },
        { left: "Difficult with complex tables", right: "Better table/field understanding" },
      ],
    },
    opportunityFlow: {
      title: "The Real Opportunity: AI OCR + Salesforce",
      subtitle: "For your Salesforce offering, position it as:",
      steps: ["Capture", "Understand", "Validate", "Automate", "Store", "Protect"],
      exampleTitle: "For example:",
      exampleSteps: [
        "Customer uploads bank statement",
        "AI OCR reads the document",
        "AI identifies customer, account, transactions and balances",
        "Data validation & confidence check",
        "Salesforce record automatically updated",
        "Document securely stored and backed up",
      ],
    },
    valueProposition: {
      eyebrow: "Strong Finance Industry Positioning",
      title: "AI-Powered Document Intelligence for Financial Services",
      description:
        "Transform Financial Documents into Actionable Salesforce Data. Automatically capture, understand, validate, and process information from KYC documents, loan applications, bank statements, financial statements, contracts, invoices, and compliance documents using AI-powered OCR integrated with Salesforce.",
    },
    modules: {
      title: "End-to-End Salesforce Financial Data Management",
      subtitle: "For Kloudvault",
      description:
        "Together, this gives you an end-to-end Salesforce Financial Data Management platform rather than positioning OCR as just a document-scanning feature.",
      items: [
        {
          title: "AI OCR & Document Intelligence",
          body: "Capture and structure financial documents with AI-powered OCR integrated with Salesforce.",
        },
        {
          title: "Salesforce Data Backup & Recovery",
          body: "Protect financial records and files with automated backup and rapid recovery.",
        },
        {
          title: "Salesforce Data Archival",
          body: "Manage historical financial data and optimize storage without losing access.",
        },
        {
          title: "AI-Powered Search & Retrieval",
          body: "Quickly find customer and financial documents across your Salesforce environment.",
        },
      ],
    },
    cta: {
      title: "Ready to transform financial documents with AI-powered OCR?",
      description:
        "Talk to Kloudvault about KloudScan for finance-focused document intelligence integrated with Salesforce.",
      button: "Book a Demo",
    },
  },
  kloudfiles: {
    hero: {
      badge: "Financial Services · KloudFiles",
      title: "Salesforce Files Backup & Recovery for Finance",
      tagline: "Protect Every Critical Financial Document",
      description:
        "Financial institutions manage sensitive documents across Salesforce, including KYC documents, financial statements, loan applications, contracts, customer forms, agreements, and compliance records. Losing these files can create operational, financial, and compliance risks.",
      secondaryDescription:
        "Salesforce Files Backup & Recovery for Finance provides automated protection for critical Salesforce Files, Attachments, and documents—helping financial organizations securely back up, monitor, search, and quickly restore files when they are accidentally deleted, corrupted, or modified.",
      image: IMAGES["financial-services"],
    },
    dataTable: {
      title: "Key Finance Use Cases",
      subtitle: "Protect the file types that power onboarding, lending, compliance, and customer service across financial Salesforce environments.",
      col1Label: "Use Case",
      col2Label: "Files Protected",
      col3Label: "Business Benefit",
      rows: [
        {
          category: "KYC & Customer Onboarding",
          examples: "Identity documents, address proof, customer forms",
          reason: "Faster recovery and uninterrupted onboarding",
        },
        {
          category: "Loan & Credit Processing",
          examples: "Loan applications, income documents, credit reports",
          reason: "Protect critical lending documentation",
        },
        {
          category: "Financial Statements",
          examples: "Bank statements, income statements, investment documents",
          reason: "Preserve important financial records",
        },
        {
          category: "Contracts & Agreements",
          examples: "Customer agreements, partner contracts, loan agreements",
          reason: "Reduce document-loss risk",
        },
        {
          category: "Compliance Documents",
          examples: "Regulatory documents, audit evidence, consent records",
          reason: "Support compliance and audits",
        },
        {
          category: "Insurance Documents",
          examples: "Policy documents, claim documents, supporting files",
          reason: "Protect customer and claims information",
        },
        {
          category: "Customer Service",
          examples: "Case attachments, complaints, supporting documents",
          reason: "Maintain complete customer history",
        },
        {
          category: "Partner & Agent Documents",
          examples: "Agreements, certifications, onboarding documents",
          reason: "Protect partner operations",
        },
      ],
    },
    useCases: {
      title: "Why Financial Organizations Need Files Backup",
      items: [
        {
          title: "Accidental Deletion",
          body: "Recover documents deleted by users or automated processes.",
        },
        {
          title: "Data Corruption",
          body: "Restore clean copies of documents when files become corrupted or incorrectly modified.",
        },
        {
          title: "Integration Errors",
          body: "Protect files affected by integrations with banking, lending, payment, ERP, KYC, or other systems.",
        },
        {
          title: "Compliance & Audit",
          body: "Maintain historical copies of important financial and customer documents according to organizational retention policies.",
        },
        {
          title: "Business Continuity",
          body: "Ensure critical documents remain accessible when unexpected data-loss events occur.",
        },
      ],
    },
    architecture: {
      title: "Key Capabilities",
      capabilities: [
        "Automated Salesforce Files backup",
        "Salesforce Files, Attachments & Documents backup",
        "File version backup",
        "Record-to-file relationship preservation",
        "Scheduled & incremental backup",
        "Encrypted backup storage",
        "Point-in-time recovery",
        "Individual file restoration",
        "Bulk file restoration",
        "Search & retrieve backed-up files",
        "Retention policies",
        "Role-based access",
        "Audit trail",
        "Backup monitoring & alerts",
        "API-based backup and recovery",
      ],
    },
    valueProposition: {
      eyebrow: "Why KloudFiles for Finance",
      title: "Protect Every Critical Financial Document.",
      description:
        "Salesforce Files Backup & Recovery for Finance provides automated protection for critical Salesforce Files, Attachments, and documents—helping financial organizations securely back up, monitor, search, and quickly restore files when they are accidentally deleted, corrupted, or modified.",
    },
    cta: {
      title: "Ready to protect your financial services Salesforce files?",
      description:
        "Talk to Kloudvault about KloudFiles for finance-focused file backup, recovery, and document protection.",
      button: "Book a Demo",
    },
  },
};

const education = {
  klouddata: withArchitecture("Education", "klouddata", {
    hero: {
      badge: "Education · KloudData",
      title: "Salesforce Data Backup & Recovery for Education",
      description:
        "Schools, universities, and ed-tech teams manage student, alumni, admissions, and enrollment data in Salesforce. KloudData protects academic and administrative records.",
      secondaryDescription: "Maintain continuity across admissions cycles, alumni engagement, and student services.",
      image: IMAGES.education,
    },
    dataTable: {
      title: "Education Data — What Needs Backup",
      subtitle: "Protect student, alumni, and institutional records in Salesforce.",
      col1Label: "Education Data",
      col2Label: "What Needs Backup",
      col3Label: "Why It Matters",
      rows: [
        { category: "Student Records", examples: "Students, enrollments, academic status", reason: "Preserve student lifecycle and academic history" },
        { category: "Admissions Data", examples: "Applications, inquiries, acceptance records", reason: "Protect enrollment pipeline and yield data" },
        { category: "Alumni Relations", examples: "Alumni profiles, giving, engagement", reason: "Maintain fundraising and community connections" },
        { category: "Courses & Programs", examples: "Courses, sections, program offerings", reason: "Protect academic catalog and scheduling data" },
        { category: "Faculty & Staff", examples: "Faculty profiles, departments, assignments", reason: "Support institutional operations" },
        { category: "Financial Aid", examples: "Aid applications, awards, disbursements", reason: "Protect sensitive financial assistance records" },
        { category: "Cases & Services", examples: "Student support, advising, accommodations", reason: "Preserve student services history" },
        { category: "Custom Objects", examples: "SIS-integrated education objects", reason: "Protect institution-specific configurations" },
      ],
    },
    useCases: {
      title: "Key Education Use Cases",
      items: [
        { title: "Student Record Recovery", body: "Restore student profiles and enrollment data after accidental deletion or import errors." },
        { title: "Admissions Cycle Protection", body: "Recover application and inquiry records during peak enrollment periods." },
        { title: "Alumni Data Restoration", body: "Roll back incorrect bulk updates to alumni profiles and giving history." },
        { title: "SIS Integration Failures", body: "Recover data corrupted by student information system integrations." },
        { title: "FERPA Compliance", body: "Maintain historical student records for privacy and audit requirements." },
        { title: "Deployment Recovery", body: "Restore production data affected by Salesforce configuration changes." },
      ],
    },
    valueProposition: {
      eyebrow: "Education Value",
      title: "Protect Every Student, Alumni & Enrollment Record.",
      description: "Educational institutions depend on accurate Salesforce data across the student lifecycle. KloudData provides automated backup and recovery for academic and administrative teams.",
    },
    modules: {
      title: "Education Salesforce Data Protection",
      items: [
        { title: "Student Record Protection", body: "Backup enrollments, academic status, and student profiles." },
        { title: "Admissions Data Backup", body: "Protect applications, inquiries, and acceptance records." },
        { title: "Alumni Relationship Backup", body: "Secure alumni profiles, giving, and engagement data." },
        { title: "Academic Catalog Protection", body: "Backup courses, programs, and scheduling records." },
        { title: "Financial Aid Records", body: "Protect aid applications, awards, and disbursement data." },
        { title: "Automated Recovery", body: "Restore records with relationship preservation across objects." },
      ],
    },
    cta: { title: "Ready to protect your education Salesforce data?", description: "Talk to Kloudvault about backup and recovery for schools and universities.", button: "Book a Demo" },
  }),
  kloudscan: withArchitecture("Education", "kloudscan", {
    hero: {
      badge: "Education · KloudScan",
      title: "AI Document Intelligence for Education on Salesforce",
      description:
        "Admissions teams process applications, transcripts, enrollment forms, and financial aid documents. KloudScan automates extraction into Salesforce student records.",
      secondaryDescription: "Accelerate admissions intake and reduce manual data entry during peak enrollment cycles.",
      image: IMAGES.education,
    },
    dataTable: {
      title: "Education Documents — What KloudScan Processes",
      subtitle: "Automate extraction from academic and administrative documents.",
      col1Label: "Document Type",
      col2Label: "Common Examples",
      col3Label: "Business Value",
      rows: [
        { category: "Applications", examples: "Undergraduate, graduate, transfer applications", reason: "Accelerate admissions review workflows" },
        { category: "Transcripts", examples: "High school, college, international transcripts", reason: "Populate academic history automatically" },
        { category: "Enrollment Forms", examples: "Registration, course selection, housing forms", reason: "Speed up student onboarding" },
        { category: "Financial Aid Forms", examples: "FAFSA summaries, scholarship applications", reason: "Streamline aid processing workflows" },
        { category: "Identity Documents", examples: "Student IDs, passports, verification forms", reason: "Support enrollment verification" },
        { category: "Recommendation Letters", examples: "Faculty references, employer recommendations", reason: "Capture reference data for admissions" },
      ],
    },
    useCases: {
      title: "Key Education Document Use Cases",
      items: [
        { title: "Admissions Application Intake", body: "Extract applicant details, test scores, and program preferences from applications." },
        { title: "Transcript Processing", body: "Parse course credits, grades, and GPA from academic transcripts." },
        { title: "Enrollment Form Automation", body: "Populate student records from registration and housing forms." },
        { title: "Financial Aid Processing", body: "Extract aid eligibility and award details from financial documents." },
        { title: "Peak Season Scalability", body: "Process high volumes of applications during admissions cycles." },
        { title: "FERPA-Compliant Processing", body: "Maintain audit trails for student document handling." },
      ],
    },
    valueProposition: {
      eyebrow: "Education Value",
      title: "Turn Academic Documents into Student Records.",
      description: "KloudScan helps admissions and registrar teams process applications and enrollment documents faster with validated data flowing into Salesforce.",
    },
    modules: {
      title: "Education Document Intelligence Modules",
      items: [
        { title: "Application Extraction", body: "Parse applicant, program, and test score data from admission forms." },
        { title: "Transcript Parsing", body: "Extract courses, credits, and grades from academic transcripts." },
        { title: "Enrollment Form Processing", body: "Automate registration and housing form data capture." },
        { title: "Financial Aid Intake", body: "Extract aid details from scholarship and financial aid documents." },
        { title: "Identity Verification", body: "Process student ID and verification documents for enrollment." },
        { title: "Salesforce Sync", body: "Map extracted data to student, application, and enrollment objects." },
      ],
    },
    cta: { title: "Ready to automate education document processing?", description: "Talk to Kloudvault about KloudScan for admissions and registrar teams.", button: "Book a Demo" },
  }),
  kloudfiles: withArchitecture("Education", "kloudfiles", {
    hero: {
      badge: "Education · KloudFiles",
      title: "Salesforce Files Backup & Recovery for Education",
      description:
        "Student records, transcripts, certificates, and course materials are stored in Salesforce Files. KloudFiles ensures academic documents are backed up and recoverable.",
      secondaryDescription: "Protect files across students, alumni, admissions, and faculty records.",
      image: IMAGES.education,
    },
    dataTable: {
      title: "Education Files — What Needs Protection",
      subtitle: "Protect academic and administrative documents in Salesforce.",
      col1Label: "File Category",
      col2Label: "Common Examples",
      col3Label: "Why It Matters",
      rows: [
        { category: "Student Documents", examples: "Transcripts, certificates, ID copies", reason: "Preserve academic and enrollment records" },
        { category: "Admissions Files", examples: "Applications, essays, recommendation letters", reason: "Maintain admissions review documentation" },
        { category: "Course Materials", examples: "Syllabi, assignments, lecture resources", reason: "Protect academic content and resources" },
        { category: "Financial Aid Files", examples: "Aid applications, award letters", reason: "Support aid compliance and auditing" },
        { category: "Alumni Materials", examples: "Donor correspondence, event materials", reason: "Preserve alumni engagement documentation" },
        { category: "Faculty Files", examples: "CVs, research documents, credentials", reason: "Maintain institutional personnel records" },
      ],
    },
    useCases: {
      title: "Key Education File Use Cases",
      items: [
        { title: "Student File Recovery", body: "Restore transcripts and certificates linked to student records." },
        { title: "Admissions Document Protection", body: "Backup and recover application files during enrollment cycles." },
        { title: "FERPA Compliance", body: "Maintain secure file histories for student privacy requirements." },
        { title: "Course Material Backup", body: "Protect syllabi and academic resources on course records." },
        { title: "Accidental Deletion Recovery", body: "Restore files removed during staff transitions or bulk operations." },
        { title: "Disaster Recovery", body: "Rapidly restore academic file libraries after data incidents." },
      ],
    },
    valueProposition: {
      eyebrow: "Education Value",
      title: "Protect Every Academic Document & File.",
      description: "KloudFiles provides automated backup and recovery for student records, admissions files, and academic materials in Salesforce.",
    },
    modules: {
      title: "Education Files Protection Modules",
      items: [
        { title: "Student Document Backup", body: "Protect transcripts, certificates, and enrollment files." },
        { title: "Admissions File Recovery", body: "Restore applications and recommendation letters." },
        { title: "Course Material Protection", body: "Backup syllabi and academic resources." },
        { title: "Financial Aid File Archival", body: "Secure aid applications and award documentation." },
        { title: "Version History", body: "Access previous versions of updated academic documents." },
        { title: "Bulk File Restore", body: "Recover multiple files across student and admissions records." },
      ],
    },
    cta: { title: "Ready to protect your education Salesforce files?", description: "Talk to Kloudvault about KloudFiles for schools and universities.", button: "Book a Demo" },
  }),
};

export const INDUSTRY_PAGE_CONTENT_PART2 = {
  "financial-services": financialServices,
  education,
};
