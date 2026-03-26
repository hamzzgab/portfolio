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
      "Architected and maintained 10+ Apache Airflow DAGs orchestrating Spark/PySpark batch scoring pipelines on AWS EMR, processing audience segments across Yahoo DSP's 400+ standard audiences used by advertisers to reach hundreds of millions of users.",
      "Led the Accelerated Audience Activation initiative end-to-end, designing Kafka (MSK) streaming integration, bucket calculation logic, and sensor-based orchestration to reduce audience segment freshness from days to under 24 hours, directly enabling near-real-time ad targeting.",
      "Contributed to the Yahoo Standard Audiences GA release, improving definitions of 400+ audience segments. Built the OpenSearch rules upload pipeline, rule conversion from wiki-based ensembles to targeting format, and URL mapping aggregation DAG for contextual audience scoring.",
      "Drove cloud migration of 4 scoring systems to new infrastructure, evaluating trade-offs between Glue catalog vs. direct S3 reads for cost and latency. Upgraded EMR clusters to v7 and transitioned monitoring to Chronosphere for sub-minute alerting.",
      "Designed a watermark-bypass reprocessing system for the SRT pipeline to recover segments missed by the forward-only hourly pipeline, including a helper script for expired segment recovery and a health-check DAG with Slack alerting.",
      "Designed and shipped geo-aware audience segmentation with country/state-level category restrictions and feature flag rollout. Authored the technical design for impression-based premium audience scoring using OpenSearch and windowed aggregation.",
    ],
  },
  {
    company: "TIAA GBS",
    role: "Software Developer",
    period: "June 2021 — June 2022",
    location: "Mumbai, India",
    bullets: [
      "Migrated 150+ automation test cases from Selenium to WebDriver in 14 days and automated execution via Jenkins CI/CD.",
      'Awarded "Pat on the Back" for reducing data collection downtime by 50% through REST API integration into the test automation framework.',
    ],
  },
];
