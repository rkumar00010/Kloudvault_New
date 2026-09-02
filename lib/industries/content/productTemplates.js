export const PRODUCT_META = {
  klouddata: {
    productName: "KloudData",
    architectureSubtitle:
      "End-to-end protection from Salesforce through secure storage to rapid restore.",
    steps: ["Salesforce", "Automated Backup", "Secure Storage", "Multiple Recovery Points", "Restore"],
    capabilities: [
      "Automated daily/hourly backups",
      "Incremental backup",
      "Full Salesforce data backup",
      "Metadata backup",
      "Files & attachments backup",
      "Cross-object relationship preservation",
      "Point-in-time recovery",
      "Record-level restore",
      "Bulk restore",
      "Sandbox recovery",
      "Backup encryption",
      "Role-based access",
      "Backup monitoring and alerts",
      "Backup retention policies",
      "Audit logs",
      "API-based backup and restore",
    ],
  },
  kloudscan: {
    productName: "KloudScan",
    architectureSubtitle:
      "Turn unstructured documents into validated, structured Salesforce data with AI-powered intelligence.",
    steps: ["Ingest Documents", "Classify & Parse", "Extract Fields", "Validate & Review", "Sync to Salesforce"],
    capabilities: [
      "AI-powered OCR and field extraction",
      "Document classification by type",
      "Table and line-item parsing",
      "Confidence scoring with human review",
      "Multi-format support (PDF, image, scan)",
      "Template learning for recurring forms",
      "CRM and ERP field mapping",
      "Batch processing at scale",
      "Exception handling workflows",
      "Audit trail for extracted data",
      "Salesforce object auto-population",
      "API-based document intake",
      "Role-based review queues",
      "Compliance-ready processing logs",
      "Duplicate detection",
      "Sandbox and production sync",
    ],
  },
  kloudfiles: {
    productName: "KloudFiles",
    architectureSubtitle:
      "Automated backup and recovery for Salesforce Files, attachments, and document relationships.",
    steps: ["Salesforce Files", "Automated Backup", "Encrypted Storage", "Version History", "Restore"],
    capabilities: [
      "Automated Salesforce Files backup",
      "Attachment and ContentDocument coverage",
      "Encrypted storage with retention policies",
      "Individual and bulk file recovery",
      "Version history preservation",
      "Record-to-file relationship mapping",
      "Point-in-time file restore",
      "Cross-object file context recovery",
      "Role-based access controls",
      "Backup monitoring and alerts",
      "Compliance and audit visibility",
      "API-based backup and restore",
      "Sandbox file recovery",
      "Incremental file backup",
      "Large file handling",
      "Disaster recovery readiness",
    ],
  },
};

export function buildArchitecture(industryLabel, productSlug) {
  const product = PRODUCT_META[productSlug];
  const productLabel = product.productName;
  const titles = {
    klouddata: `${industryLabel} Backup Architecture`,
    kloudscan: `${industryLabel} Document Intelligence Architecture`,
    kloudfiles: `${industryLabel} Files Protection Architecture`,
  };
  return {
    title: titles[productSlug],
    subtitle: product.architectureSubtitle,
    steps: product.steps,
    capabilities: product.capabilities,
  };
}
