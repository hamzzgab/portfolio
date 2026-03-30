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
      "Built real-time multi-level ad targeting in Flink — evaluating campaigns at package and order granularity by extending the Java segment cache.",
      "Shipped Yahoo Standard Audiences to production — built the OpenSearch rules pipeline improving 400+ audience definitions, expanding reach by 60%.",
      "Migrated 4 scoring systems to new infrastructure, cutting costs 13% and upgrading to EMR v7.",
      "Designed a reprocessing system to recover audience segments dropped by the hourly pipeline, covering 113K+ segments with health-check alerting.",
      "Shipped geo-aware audience segmentation with country-level targeting. Authored system design for impression-based scoring processing 554GB+ daily.",
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
