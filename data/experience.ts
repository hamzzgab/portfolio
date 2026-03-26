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
      "Architected 10+ Apache Airflow DAGs orchestrating Spark/PySpark batch scoring pipelines on AWS EMR, processing 1.28B+ daily events across 400+ audience segments to power Yahoo DSP's programmatic ad targeting for hundreds of millions of users.",
      "Led the Accelerated Audience Activation initiative, designing Kafka (MSK) streaming and sensor-based orchestration to cut audience segment freshness from days to under 24 hours within a 6-hour SLA, enabling near-real-time ad targeting across 480+ live segments.",
      "Shipped the Yahoo Standard Audiences GA release, building the OpenSearch rules upload pipeline and URL mapping aggregation DAG that improved 400+ audience segment definitions, expanding potential user reach by 60% through new contextual data sources.",
      "Migrated 4 scoring systems (MRT, PR, Rule Scoring, Premium Audiences) to new cloud infrastructure, cutting costs 13% by optimising instance types and switching from Glue catalog to direct S3 reads. Upgraded EMR to v7 and transitioned monitoring to Chronosphere for sub-minute alerting.",
      "Designed a segment reprocessing system for the SRT pipeline to recover segments from a catalog of 113K+ IDs missed by the forward-only hourly pipeline, with a health-check DAG and Slack alerting that eliminated client-reported zero-count incidents.",
      "Designed and shipped geo-aware audience segmentation with country/state-level restrictions and feature flag rollout. Authored the technical design for impression-based scoring using OpenSearch and windowed aggregation over 554GB+ daily data volumes.",
    ],
  },
  {
    company: "TIAA GBS",
    role: "Software Developer",
    period: "June 2021 — June 2022",
    location: "Mumbai, India",
    bullets: [
      "Migrated 150+ automation test cases from Selenium to WebDriver in 14 days, enabling fully automated regression testing via Jenkins CI/CD pipelines.",
      "Reduced data collection downtime by 50% by building REST API integrations for automated data fetching, replacing manual collection workflows.",
    ],
  },
];
