export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
}

export const experiences: Experience[] = [
  {
    company: "Yahoo",
    role: "Software Development Engineer I",
    period: "February 2024 — Present",
    location: "Dublin, Ireland",
    bullets: [
      "Built 10+ Airflow DAGs processing 1.28B+ daily events across 400+ audience segments on AWS EMR.",
      "Led Accelerated Audience Activation — cut segment freshness from days to <24 hours across 480+ live segments.",
      "Shipped Yahoo Standard Audiences GA — OpenSearch pipeline expanding user reach by 60%.",
      "Migrated 4 scoring systems to new infrastructure, cutting costs 13% and upgrading to EMR v7.",
      "Designed segment reprocessing system recovering missed segments from 113K+ catalog with automated alerting.",
      "Shipped geo-aware segmentation and authored impression-based scoring design over 554GB+ daily volumes.",
    ],
  },
  {
    company: "TIAA GBS",
    role: "Software Developer",
    period: "June 2021 — June 2022",
    location: "Mumbai, India",
    bullets: [
      "Migrated 150+ test cases from Selenium to WebDriver in 14 days — manual regression to automated nightly runs.",
      "Cut data-collection downtime by 50% with REST API ingestion, enabling same-day reporting.",
    ],
  },
];
