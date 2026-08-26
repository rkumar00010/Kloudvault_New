import { buildArchitecture, PRODUCT_META } from "./productTemplates";

const HERO_IMAGE = "/Offer.png";

export const retailContent = {
  klouddata: {
    hero: {
      badge: "Retail · KloudData",
      title: "Salesforce Data Backup & Recovery for Retail",
      description:
        "For retail on Salesforce, Data Backup & Restore is critical because retailers typically have high-volume customer, order, product, and transaction-related data.",
      secondaryDescription:
        "KloudData provides automated protection and rapid restoration of critical retail data—helping businesses minimize downtime, reduce operational risk, and maintain business continuity.",
      image: HERO_IMAGE,
    },
    dataTable: {
      title: "Retail Data — What Needs Backup",
      subtitle: "High-volume retail Salesforce environments depend on protecting every category of business-critical data.",
      col1Label: "Retail Data",
      col2Label: "What Needs Backup",
      col3Label: "Why It Matters",
      rows: [
        { category: "Customer Data", examples: "Accounts, Contacts, customer profiles", reason: "Prevent loss of customer history and relationships" },
        { category: "Sales & Orders", examples: "Orders, Order Items, Opportunities", reason: "Critical for sales and revenue operations" },
        { category: "Product Data", examples: "Products, Price Books, SKUs", reason: "Protect product catalog and pricing" },
        { category: "Inventory Data", examples: "Inventory records, stock information", reason: "Avoid operational disruption" },
        { category: "Service Data", examples: "Cases, complaints, service history", reason: "Preserve customer service history" },
        { category: "Marketing Data", examples: "Campaigns, leads, marketing records", reason: "Protect customer acquisition data" },
        { category: "Loyalty Data", examples: "Loyalty members, points, rewards", reason: "Protect customer loyalty programs" },
        { category: "Store Data", examples: "Stores, locations, store managers", reason: "Maintain retail operations data" },
        { category: "Files & Attachments", examples: "Invoices, product documents, customer files", reason: "Prevent loss of critical business documents" },
        { category: "Custom Objects", examples: "Retail-specific Salesforce objects", reason: "Protect business-specific data" },
      ],
    },
    useCases: {
      title: "Key Retail Use Cases",
      items: [
        { title: "Accidental Data Deletion", body: "A user accidentally deletes thousands of customer, order, or product records. The backup solution allows the business to identify and restore the lost data." },
        { title: "Mass Data Update Error", body: "A bulk upload or integration incorrectly updates prices, inventory, customer information, or order records. Previous versions can be recovered." },
        { title: "Integration Failure", body: "Retailers integrate Salesforce with ERP, POS, e-commerce, payment, loyalty, and marketing systems. If an integration corrupts data, backup provides a recovery point." },
        { title: "Salesforce Deployment Issues", body: "A release or configuration change causes unexpected data problems. Backup enables recovery of critical retail information." },
        { title: "Ransomware / Cybersecurity Incident", body: "If Salesforce data is compromised or maliciously modified, clean backup copies help restore business-critical retail records." },
        { title: "Compliance & Audit", body: "Retail organizations need historical customer, transaction, consent, and operational data for audit and compliance requirements." },
      ],
    },
    valueProposition: {
      eyebrow: "Retail-Specific Value",
      title: "Protect Every Customer, Order & Transaction.",
      description:
        "Retail businesses cannot afford to lose customer records, orders, product information, inventory data, loyalty points, or service history. A Salesforce backup and recovery solution provides automated protection and rapid restoration of critical retail data.",
    },
    modules: {
      title: "Retail Salesforce Data Protection",
      items: [
        { title: "Customer Data Protection", body: "Protect customer profiles, contacts, preferences, consent and interaction history." },
        { title: "Order & Transaction Protection", body: "Backup orders, order items, opportunities and related transaction records." },
        { title: "Product & Pricing Protection", body: "Protect products, SKUs, price books and pricing structures." },
        { title: "Loyalty Data Protection", body: "Secure loyalty membership, points, rewards and customer engagement data." },
        { title: "Files & Document Backup", body: "Protect invoices, contracts, product documents and customer attachments." },
        { title: "Automated Recovery", body: "Restore individual records, related records or complete datasets with minimal business disruption." },
      ],
    },
    cta: {
      title: "Ready to protect your retail Salesforce data?",
      description: "Talk to Kloudvault about retail-focused backup, recovery, and data protection for your Salesforce environment.",
      button: "Book a Demo",
    },
  },
  kloudscan: {
    hero: {
      badge: "Retail · KloudScan",
      title: "AI Document Intelligence for Retail on Salesforce",
      description:
        "Retail teams process high volumes of vendor invoices, purchase orders, product catalogs, and supplier documents. KloudScan automates extraction and validation so data flows into Salesforce without manual entry.",
      secondaryDescription:
        "Reduce processing time across procurement, merchandising, and operations while improving accuracy for retail document workflows.",
      image: HERO_IMAGE,
    },
    dataTable: {
      title: "Retail Documents — What KloudScan Processes",
      subtitle: "Automate extraction from the document types that drive retail procurement and operations.",
      col1Label: "Document Type",
      col2Label: "Common Examples",
      col3Label: "Business Value",
      rows: [
        { category: "Vendor Invoices", examples: "Supplier invoices, credit notes, statements", reason: "Accelerate accounts payable and reconciliation" },
        { category: "Purchase Orders", examples: "POs, amendments, delivery schedules", reason: "Sync procurement data into Salesforce faster" },
        { category: "Product Catalogs", examples: "SKU lists, spec sheets, price lists", reason: "Keep product and pricing data current" },
        { category: "Shipping Documents", examples: "Bills of lading, packing slips, ASN", reason: "Improve inventory and fulfillment visibility" },
        { category: "Vendor Agreements", examples: "Supplier contracts, rebate terms", reason: "Capture commercial terms without manual review" },
        { category: "Returns & Claims", examples: "RMA forms, damage claims, credit requests", reason: "Speed up returns processing and vendor disputes" },
      ],
    },
    useCases: {
      title: "Key Retail Document Use Cases",
      items: [
        { title: "Invoice Processing at Scale", body: "Process hundreds of vendor invoices daily with automated field extraction into Salesforce accounts, orders, and payables workflows." },
        { title: "Catalog & SKU Ingestion", body: "Extract product attributes, SKUs, and pricing from supplier catalogs to update Salesforce product records." },
        { title: "Multi-Format Vendor Documents", body: "Handle PDFs, scans, and images from diverse suppliers with consistent extraction quality." },
        { title: "Procurement Workflow Automation", body: "Populate purchase order fields and line items directly from incoming documents to reduce manual data entry." },
        { title: "Exception Review Queues", body: "Route low-confidence extractions to merchandising or finance teams for quick human validation." },
        { title: "Audit-Ready Document Trails", body: "Maintain processing logs and extracted data history for vendor and financial audits." },
      ],
    },
    valueProposition: {
      eyebrow: "Retail-Specific Value",
      title: "Turn Retail Documents into Salesforce Data.",
      description:
        "Retail operations depend on fast, accurate document processing across vendors, suppliers, and internal teams. KloudScan eliminates manual entry bottlenecks and feeds validated data directly into your Salesforce workflows.",
    },
    modules: {
      title: "Retail Document Intelligence Modules",
      items: [
        { title: "Invoice & AP Extraction", body: "Extract vendor, amount, line items, and payment terms from retail invoices." },
        { title: "Purchase Order Parsing", body: "Capture PO numbers, quantities, SKUs, and delivery details automatically." },
        { title: "Product Catalog Ingestion", body: "Parse SKU lists, descriptions, and pricing from supplier catalogs." },
        { title: "Shipping Document Processing", body: "Extract tracking, quantities, and shipment details for fulfillment workflows." },
        { title: "Contract & Agreement Review", body: "Identify key terms from vendor agreements and commercial documents." },
        { title: "Salesforce Sync", body: "Map extracted fields to Salesforce objects with validation and review controls." },
      ],
    },
    cta: {
      title: "Ready to automate retail document processing?",
      description: "Talk to Kloudvault about KloudScan for retail procurement, merchandising, and operations on Salesforce.",
      button: "Book a Demo",
    },
  },
  kloudfiles: {
    hero: {
      badge: "Retail · KloudFiles",
      title: "Salesforce Files Backup & Recovery for Retail",
      description:
        "Retail organizations store product images, invoices, contracts, and customer attachments in Salesforce. KloudFiles ensures these critical files are backed up, versioned, and recoverable.",
      secondaryDescription:
        "Protect file-to-record relationships across customers, orders, products, and vendor accounts with automated backup and rapid restore.",
      image: HERO_IMAGE,
    },
    dataTable: {
      title: "Retail Files — What Needs Protection",
      subtitle: "Every file attached to retail Salesforce records represents operational, commercial, or customer value.",
      col1Label: "File Category",
      col2Label: "Common Examples",
      col3Label: "Why It Matters",
      rows: [
        { category: "Product Images", examples: "SKU photos, packaging images, spec sheets", reason: "Maintain product catalog integrity across channels" },
        { category: "Customer Documents", examples: "Contracts, correspondence, consent forms", reason: "Preserve customer relationship history" },
        { category: "Invoices & Receipts", examples: "Sales invoices, credit memos, payment proofs", reason: "Support finance, disputes, and audits" },
        { category: "Vendor Files", examples: "Supplier agreements, catalogs, certifications", reason: "Protect procurement and compliance records" },
        { category: "Marketing Assets", examples: "Campaign creatives, promotional materials", reason: "Recover brand and campaign documentation" },
        { category: "Service Attachments", examples: "Case files, return photos, warranty docs", reason: "Maintain complete customer service history" },
      ],
    },
    useCases: {
      title: "Key Retail File Use Cases",
      items: [
        { title: "Accidental File Deletion", body: "Restore product images, invoices, or customer attachments deleted by users or automated processes." },
        { title: "Bulk File Corruption", body: "Recover files affected by integration errors or failed bulk operations across retail records." },
        { title: "Record Context Recovery", body: "Restore files with their original links to orders, products, accounts, and cases." },
        { title: "Version History Access", body: "Retrieve previous versions of updated product documents, contracts, or marketing assets." },
        { title: "Compliance & Audit Support", body: "Provide auditors with complete file histories for customer transactions and vendor records." },
        { title: "Disaster Recovery", body: "Recover retail file libraries quickly after incidents to minimize operational disruption." },
      ],
    },
    valueProposition: {
      eyebrow: "Retail-Specific Value",
      title: "Never Lose a Retail File Again.",
      description:
        "From product images to customer invoices, retail teams depend on files stored in Salesforce. KloudFiles provides automated backup, encryption, and recovery so your documents are always protected.",
    },
    modules: {
      title: "Retail Files Protection Modules",
      items: [
        { title: "Product Asset Backup", body: "Protect images, spec sheets, and catalog files linked to product records." },
        { title: "Customer File Recovery", body: "Restore contracts, correspondence, and attachments on account and contact records." },
        { title: "Financial Document Protection", body: "Backup invoices, receipts, and payment documents across retail transactions." },
        { title: "Vendor File Archival", body: "Secure supplier agreements, catalogs, and compliance documents." },
        { title: "Version & Relationship Preservation", body: "Maintain file versions and record-to-file context after recovery." },
        { title: "Bulk File Restore", body: "Recover multiple files across objects with minimal manual effort." },
      ],
    },
    cta: {
      title: "Ready to protect your retail Salesforce files?",
      description: "Talk to Kloudvault about KloudFiles for automated backup and recovery of retail documents in Salesforce.",
      button: "Book a Demo",
    },
  },
};

export function getRetailContent(productSlug) {
  const content = retailContent[productSlug];
  if (!content) return null;
  const product = PRODUCT_META[productSlug];
  return {
    industrySlug: "retail",
    productSlug,
    industryLabel: "Retail",
    productName: product.productName,
    ...content,
    architecture: buildArchitecture("Retail", productSlug),
  };
}
