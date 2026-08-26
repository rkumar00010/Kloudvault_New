const HERO_IMAGE = "/Dashboard.png";

const manufacturingKloudData = {
  hero: {
    badge: "Manufacturing · KloudData",
    title: "Salesforce Data Backup & Restore for Manufacturing",
    tagline: "Protect Critical Manufacturing Data",
    description:
      "Manufacturing organizations use Salesforce to manage customers, dealers, distributors, sales opportunities, service operations, products, orders, suppliers, and field operations. Losing or corrupting this data can impact sales, production coordination, customer service, and business continuity.",
    image: HERO_IMAGE,
  },
  dataTable: {
    title: "Protect Critical Manufacturing Data",
    subtitle: "Backup the Salesforce records that power manufacturing sales, service, channel, and field operations.",
    col1Label: "Salesforce Data",
    col2Label: "Examples",
    col3Label: "Why Backup Matters",
    rows: [
      { category: "Customer Data", examples: "Accounts, Contacts, customer profiles", reason: "Protect customer relationships" },
      { category: "Sales Data", examples: "Opportunities, quotes, orders", reason: "Protect revenue pipeline" },
      { category: "Product Data", examples: "Products, SKUs, specifications", reason: "Maintain accurate product information" },
      { category: "Dealer & Distributor Data", examples: "Dealers, partners, territories", reason: "Protect channel operations" },
      { category: "Service Data", examples: "Cases, service requests, warranty claims", reason: "Maintain customer service history" },
      { category: "Asset Data", examples: "Installed products, equipment, machines", reason: "Track customer assets and service history" },
      { category: "Warranty Data", examples: "Warranty registrations and claims", reason: "Prevent loss of warranty information" },
      { category: "Supplier Data", examples: "Vendors, supplier records, agreements", reason: "Protect supplier relationships" },
      { category: "Field Service Data", examples: "Work orders, technicians, visits", reason: "Maintain field operations" },
      { category: "Documents & Files", examples: "Manuals, contracts, invoices, drawings", reason: "Protect critical business documents" },
      { category: "Custom Objects", examples: "Manufacturing-specific records", reason: "Protect business-specific processes" },
    ],
  },
  useCases: {
    title: "Key Manufacturing Use Cases",
    columns: 2,
    items: [
      {
        title: "1. Accidental Data Deletion",
        body: "A salesperson or service user accidentally deletes customer, asset, warranty, or order records.",
        flow: "Backup → Search → Identify → Restore",
        footer: "The organization can restore the required records without manually recreating them.",
      },
      {
        title: "2. Mass Data Update Errors",
        body: "A bulk data upload or automation incorrectly changes thousands of:",
        bullets: [
          "Product records",
          "Customer records",
          "Pricing information",
          "Orders",
          "Assets",
          "Warranty records",
        ],
        footer: "Backup enables recovery of the previous version of the data.",
      },
      {
        title: "3. ERP & Manufacturing Integration Failure",
        body: "Manufacturers commonly integrate Salesforce with:",
        bullets: [
          "SAP",
          "ERP systems",
          "Manufacturing systems",
          "E-commerce platforms",
          "Inventory systems",
          "Dealer management systems",
          "Finance systems",
        ],
        footer:
          "If an integration creates incorrect records or modifies Salesforce data, a clean backup provides a recovery point.",
      },
      {
        title: "4. Product & Pricing Data Protection",
        body: "Product catalogs, SKUs, price books, specifications, and customer-specific pricing can be critical to sales operations.",
        footer: "Backup protects this information from accidental modification or deletion.",
      },
      {
        title: "5. Asset & Warranty Recovery",
        body: "Manufacturing companies often maintain detailed asset information in Salesforce. For example:",
        flow: "Customer → Installed Product → Asset → Warranty → Service History",
        footer:
          "If one part of this relationship is lost, it can affect service operations. A relationship-aware restore capability can help recover the associated records.",
      },
      {
        title: "6. Field Service Data Recovery",
        body: "Manufacturers using Salesforce for field service need to protect:",
        bullets: [
          "Work orders",
          "Service appointments",
          "Technician information",
          "Equipment records",
          "Service history",
          "Customer complaints",
          "Repair documentation",
        ],
        footer: "Recovering this information quickly helps minimize disruption to service operations.",
      },
      {
        title: "7. Protection Against Data Corruption",
        body: "Data can be corrupted through:",
        bullets: [
          "Incorrect imports",
          "Flows",
          "Apex automation",
          "API integrations",
          "Data migrations",
          "User errors",
        ],
        footer: "Backup provides historical recovery points so organizations can restore clean data.",
      },
    ],
  },
  architecture: {
    title: "Manufacturing Backup Architecture",
    subtitle: "The solution should protect both structured Salesforce data and unstructured files.",
    steps: [
      "Salesforce",
      "Automated Data & Files Backup",
      "Secure Backup Storage",
      "Multiple Recovery Points",
      "Search & Compare",
      "Record-Level / Bulk Restore",
    ],
    capabilitiesTitle: "Important Capabilities",
    capabilities: [
      "Automated scheduled backup",
      "Incremental backup",
      "Full Salesforce data backup",
      "Salesforce Files backup",
      "Metadata backup",
      "Record-level restore",
      "Bulk restore",
      "Point-in-time recovery",
      "Relationship-aware recovery",
      "Asset and warranty recovery",
      "File and attachment recovery",
      "Encryption",
      "Role-based access",
      "Retention policies",
      "Audit logs",
      "Backup monitoring",
      "Alerts and notifications",
      "API-based backup",
      "Sandbox recovery",
    ],
  },
  valueProposition: {
    eyebrow: "Manufacturing-Specific Value Proposition",
    title: "Protect Every Customer, Product, Asset & Service Record.",
    description:
      "Salesforce Data Backup & Recovery for Manufacturing provides automated protection for customer, product, order, dealer, asset, warranty, field service, and manufacturing-related Salesforce data—helping manufacturers reduce data-loss risk and quickly recover critical business information.",
  },
  modules: {
    title: "Salesforce Data Backup & Recovery for Manufacturing",
    subtitle: "Protect → Monitor → Recover",
    description: "Suggested website positioning for a manufacturing-focused Salesforce data protection solution.",
    items: [
      {
        title: "Customer & Sales Data Protection",
        body: "Protect customer accounts, opportunities, quotes, orders, and sales history.",
      },
      {
        title: "Product & Pricing Protection",
        body: "Secure products, SKUs, specifications, price books, and pricing data.",
      },
      {
        title: "Asset & Warranty Protection",
        body: "Protect installed assets, warranty registrations, claims, and service history.",
      },
      {
        title: "Dealer & Distributor Protection",
        body: "Secure partner, dealer, territory, and channel information.",
      },
      {
        title: "Field Service Protection",
        body: "Backup work orders, service appointments, technician data, and service records.",
      },
      {
        title: "Intelligent Recovery",
        body: "Quickly find and restore individual records, related records, files, or large datasets after accidental deletion, corruption, or integration errors.",
      },
    ],
  },
  cta: {
    title: "Ready to protect your manufacturing Salesforce data?",
    description:
      "Talk to Kloudvault about manufacturing-focused backup, recovery, and data protection for your Salesforce environment.",
    button: "Book a Demo",
  },
};

export const manufacturingContent = {
  klouddata: manufacturingKloudData,
  kloudscan: {
    hero: {
      badge: "Manufacturing · KloudScan",
      title: "AI-Powered Document Intelligence for Manufacturing",
      description:
        "Manufacturing companies handle a huge volume of unstructured documents—purchase orders, invoices, engineering drawings, quality certificates, inspection reports, delivery documents, warranty papers, and supplier documentation.",
      secondaryDescription:
        "Traditional OCR only reads text. AI-enabled OCR understands the document, extracts relevant information, validates it, and converts it into structured Salesforce data.",
      image: HERO_IMAGE,
    },
    dataTable: {
      title: "Key Manufacturing Use Cases",
      subtitle: "AI OCR capabilities mapped to manufacturing document workflows and business outcomes.",
      col1Label: "Use Case",
      col2Label: "AI OCR Capability",
      col3Label: "Business Benefit",
      rows: [
        {
          category: "Purchase Orders",
          examples: "Extract PO number, SKU, quantity, price, delivery date",
          reason: "Faster order processing",
        },
        {
          category: "Supplier Invoices",
          examples: "Extract vendor, invoice number, GST, amount, line items",
          reason: "Reduce manual entry",
        },
        {
          category: "Product Documents",
          examples: "Extract SKU, specifications, model numbers",
          reason: "Better product data management",
        },
        {
          category: "Engineering Documents",
          examples: "Identify drawings, revisions, part numbers",
          reason: "Easier document management",
        },
        {
          category: "Quality Certificates",
          examples: "Extract batch number, test results, certificate details",
          reason: "Faster quality verification",
        },
        {
          category: "Inspection Reports",
          examples: "Capture measurements, defects, inspection results",
          reason: "Improve quality processes",
        },
        {
          category: "Warranty Claims",
          examples: "Extract product, serial number, purchase date",
          reason: "Faster claim processing",
        },
        {
          category: "Delivery Documents",
          examples: "Extract shipment, order and delivery information",
          reason: "Faster order fulfillment",
        },
        {
          category: "Supplier Documents",
          examples: "Extract certifications, registration and contract details",
          reason: "Faster supplier onboarding",
        },
        {
          category: "Service Reports",
          examples: "Extract equipment, parts, issue and repair information",
          reason: "Better field service",
        },
      ],
    },
    useCases: {
      title: "Manufacturing AI OCR Use Cases",
      columns: 2,
      items: [
        {
          title: "1. Automate Purchase Order Processing",
          body: "Manufacturers receive POs in different formats—PDFs, scans, emails and images. AI OCR can automatically identify:",
          flow: "Customer → PO Number → Products → Quantity → Price → Delivery Date",
          footer: "and transfer the information into Salesforce.",
          beforeAfter: {
            without: "PO → Employee reads → Manual entry → Validation → Salesforce",
            with: "PO → AI OCR → AI Validation → Salesforce → Automated Workflow",
          },
        },
        {
          title: "2. Improve Supplier Invoice Processing",
          body: "AI OCR can extract information from supplier invoices, including:",
          bullets: [
            "Vendor name",
            "Invoice number",
            "PO number",
            "Invoice date",
            "Tax/GST",
            "Product/part numbers",
            "Quantity",
            "Amount",
            "Payment terms",
          ],
          footer: "AI can then compare the extracted information against Salesforce records and flag discrepancies.",
        },
        {
          title: "3. Product & Part Number Recognition",
          body: "Manufacturing organizations often have thousands of:",
          bullets: ["SKUs", "Part numbers", "Model numbers", "Serial numbers", "Product specifications"],
          footer:
            "AI OCR can extract these details from documents and associate them with the correct Product, Asset or Order record in Salesforce.",
        },
        {
          title: "4. Quality & Compliance",
          body: "Manufacturers generate large volumes of quality documentation. AI OCR can extract information from:",
          bullets: [
            "Quality inspection reports",
            "Test certificates",
            "Material certificates",
            "Compliance certificates",
            "Inspection checklists",
            "Calibration certificates",
          ],
          footer: "The information can be connected to the relevant Product, Batch, Asset or Supplier record.",
        },
        {
          title: "5. Warranty & Service Automation",
          body: "A customer submits a warranty document or service report. AI OCR can identify:",
          flow: "Customer + Product + Serial Number + Purchase Date + Warranty Period",
          footer:
            "Salesforce can then automatically determine whether the product is under warranty and initiate the appropriate service workflow.",
        },
        {
          title: "6. AI Goes Beyond OCR",
          body: "This is the biggest reason to use AI-enabled OCR instead of traditional OCR.",
          beforeAfter: {
            withoutLabel: "Traditional OCR",
            withLabel: "AI-Enabled OCR",
            without: 'Traditional OCR: "Serial Number: MFG-45821"',
            with: "AI-enabled OCR understands: This is a manufacturing equipment serial number, associated with a specific product and customer, and the document is a warranty claim.",
          },
          bulletsIntro: "AI can also:",
          bullets: [
            "Classify documents",
            "Extract tables and line items",
            "Understand different document formats",
            "Validate extracted information",
            "Identify missing fields",
            "Detect duplicate documents",
            "Assign confidence scores",
            "Flag anomalies for human review",
            "Trigger Salesforce workflows",
          ],
        },
      ],
    },
    opportunityFlow: {
      title: "Manufacturing AI OCR Architecture",
      steps: [
        "Document / PDF / Image",
        "AI-Powered OCR",
        "Document Classification",
        "Data & Field Extraction",
        "AI Validation",
        "Salesforce",
        "Automation / Approval / Service / Order Processing",
      ],
    },
    valueProposition: {
      eyebrow: "Manufacturing Document Intelligence",
      title: "AI-Powered Document Intelligence for Manufacturing",
      description:
        "Transform unstructured manufacturing documents into structured Salesforce data with AI-enabled OCR that understands, validates, and automates document-heavy workflows.",
    },
    modules: {
      title: "Why It Matters to Manufacturers",
      description: "The key benefits are:",
      items: [
        {
          title: "Reduce Manual Work",
          body: "Less time spent entering information from documents.",
        },
        {
          title: "Improve Data Accuracy",
          body: "Reduce human errors during data entry.",
        },
        {
          title: "Speed Up Operations",
          body: "Accelerate PO, invoice, warranty and quality processes.",
        },
        {
          title: "Improve Traceability",
          body: "Connect documents to customers, products, assets, orders and suppliers.",
        },
        {
          title: "Reduce Processing Costs",
          body: "Automate repetitive document-heavy processes.",
        },
        {
          title: "Improve Customer Experience",
          body: "Faster order, service and warranty processing.",
        },
      ],
    },
    cta: {
      title: "Ready to automate manufacturing document processing with AI?",
      description:
        "Talk to Kloudvault about KloudScan for manufacturing purchase orders, invoices, quality documents, and service workflows.",
      button: "Book a Demo",
    },
  },
  kloudfiles: {
    hero: {
      badge: "Manufacturing · KloudFiles",
      title: "Salesforce Files Backup & Recovery for Manufacturing",
      tagline: "Protect Every Critical Manufacturing Document",
      description:
        "Manufacturing companies manage a large volume of critical documents in Salesforce, including product specifications, engineering drawings, quality certificates, invoices, contracts, warranty documents, service reports, and customer files. Losing these files can disrupt sales, service, quality, and operational processes.",
      secondaryDescription:
        "Salesforce Files Backup & Recovery for Manufacturing provides automated protection for Salesforce Files, Attachments, and business documents, helping manufacturers securely back up, search, and quickly restore critical files when they are accidentally deleted, corrupted, or modified.",
      image: HERO_IMAGE,
    },
    dataTable: {
      title: "Key Manufacturing Use Cases",
      subtitle: "Protect the file types that power product, engineering, quality, service, and channel operations.",
      col1Label: "Use Case",
      col2Label: "Files Protected",
      col3Label: "Business Benefit",
      rows: [
        {
          category: "Product Documentation",
          examples: "Product specifications, datasheets, manuals",
          reason: "Protect critical product information",
        },
        {
          category: "Engineering Documents",
          examples: "Drawings, designs, technical documents",
          reason: "Prevent loss of engineering information",
        },
        {
          category: "Quality Documents",
          examples: "Inspection reports, quality certificates, test reports",
          reason: "Support quality & compliance processes",
        },
        {
          category: "Customer Documents",
          examples: "Customer requirements, agreements, quotations",
          reason: "Maintain complete customer history",
        },
        {
          category: "Warranty Documents",
          examples: "Warranty certificates, claim documents",
          reason: "Faster warranty processing",
        },
        {
          category: "Service Documents",
          examples: "Service reports, repair documents, technician reports",
          reason: "Maintain service history",
        },
        {
          category: "Supplier Documents",
          examples: "Supplier contracts, certificates, purchase documents",
          reason: "Protect supplier relationships",
        },
        {
          category: "Invoices & Orders",
          examples: "Invoices, purchase orders, sales orders",
          reason: "Preserve transaction documentation",
        },
        {
          category: "Compliance Documents",
          examples: "Certifications, audit documents, regulatory records",
          reason: "Support audits and compliance",
        },
        {
          category: "Dealer Documents",
          examples: "Dealer agreements, onboarding documents",
          reason: "Protect channel operations",
        },
      ],
    },
    useCases: {
      title: "Why Manufacturers Need File Backup",
      columns: 2,
      items: [
        {
          title: "1. Accidental File Deletion",
          body: "Users can accidentally delete important drawings, contracts, service reports, or customer documents. Backup enables quick recovery.",
        },
        {
          title: "2. Data & Integration Errors",
          body: "ERP, SAP, e-commerce, or other integrations can unintentionally modify or delete files. A backup provides a clean recovery point.",
        },
        {
          title: "3. Engineering & Product Data Protection",
          body: "Product specifications, technical documents, manuals, and engineering files can represent significant business value. Protecting these files helps prevent operational disruption.",
        },
        {
          title: "4. Warranty & Service Continuity",
          body: "Service teams depend on historical service reports, warranty documents, equipment manuals, and customer files. Rapid recovery helps technicians continue supporting customers.",
        },
        {
          title: "5. Quality & Compliance",
          body: "Quality certificates, inspection reports, testing records, and audit documentation may need to be retained and retrieved when required.",
        },
        {
          title: "6. Business Continuity",
          body: "Critical manufacturing documents should remain recoverable even when files are accidentally deleted or corrupted.",
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
        "Scheduled and incremental backup",
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
    opportunityFlow: {
      title: "Manufacturing File Recovery",
      steps: [
        "Salesforce Record",
        "Customer / Product / Asset / Warranty",
        "Associated Files",
        "Automated Backup",
        "Secure Storage",
        "Search & Restore",
      ],
      subtitle:
        "This relationship-aware approach is especially valuable in manufacturing because a document often has a direct relationship with a customer, product, asset, warranty, order, or service case.",
    },
    valueProposition: {
      eyebrow: "Suggested Website Positioning",
      title: "Protect Manufacturing Documents. Recover Without Disruption.",
      description:
        "Salesforce Files Backup & Recovery for Manufacturing helps manufacturers protect product documentation, engineering drawings, quality certificates, customer contracts, warranty documents, service reports, invoices, and compliance records with automated backup and rapid recovery.",
    },
    cta: {
      title: "Ready to protect your manufacturing Salesforce files?",
      description:
        "Talk to Kloudvault about KloudFiles for manufacturing document backup, recovery, and business continuity.",
      button: "Book a Demo",
    },
  },
};
