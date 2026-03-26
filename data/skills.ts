export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Data Engineering",
    skills: ["Apache Spark", "PySpark", "Apache Airflow", "Apache Flink", "Kafka", "OpenSearch", "Avro/ORC"],
  },
  {
    name: "Cloud & DevOps",
    skills: ["AWS EMR", "AWS S3", "AWS Glue", "AWS Lambda", "EC2", "Docker", "Kubernetes", "Jenkins", "CI/CD"],
  },
  {
    name: "Languages",
    skills: ["Python", "Scala", "Java", "C++", "JavaScript", "TypeScript"],
  },
  {
    name: "Databases & Web",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "React", "Flask", "Django", "Spring Boot"],
  },
];
