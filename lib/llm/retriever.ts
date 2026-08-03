import personal from "@/data/personal.json";
import skills from "@/data/skills.json";
import projects from "@/data/projects.json";
import experience from "@/data/experience.json";
import education from "@/data/education.json";
import certifications from "@/data/certifications.json";

export function retrievePortfolioContext(question: string) {
  const q = question.toLowerCase();

  const has = (...keywords: string[]) =>
    keywords.some((keyword) => q.includes(keyword));

  // Personal / Introduction
  if (
    has(
      "introduce",
      "yourself",
      "about you",
      "who are you",
      "summary",
      "profile",
      "hire",
      "career objective"
    )
  ) {
    return {
      section: "profile",
      context: {
        personal,
        education,
        experience,
        skills,
        projects,
      },
    };
  }

  // Projects
  if (
    has(
      "project",
      "projects",
      "portfolio",
      "application",
      "built",
      "developed",
      "github"
    )
  ) {
    return {
      section: "projects",
      context: projects,
    };
  }

  // Skills
  if (
    has(
      "skill",
      "skills",
      "technology",
      "technologies",
      "framework",
      "frameworks",
      "language",
      "languages",
      "python",
      "java",
      "sql",
      "machine learning",
      "deep learning",
      "ai",
      "llm",
      "rag",
      "langchain"
    )
  ) {
    return {
      section: "skills",
      context: skills,
    };
  }

  // Internship / Experience
  if (
    has(
      "intern",
      "internship",
      "experience",
      "work",
      "company",
      "organization",
      "responsibility",
      "responsibilities"
    )
  ) {
    return {
      section: "experience",
      context: experience,
    };
  }

  // Education
  if (
    has(
      "education",
      "college",
      "degree",
      "cgpa",
      "graduation",
      "school",
      "university"
    )
  ) {
    return {
      section: "education",
      context: education,
    };
  }

  // Certifications
  if (
    has(
      "certificate",
      "certificates",
      "certification",
      "certifications"
    )
  ) {
    return {
      section: "certifications",
      context: certifications,
    };
  }

  // Contact
  if (
    has(
      "contact",
      "email",
      "phone",
      "linkedin",
      "github",
      "reach"
    )
  ) {
    return {
      section: "contact",
      context: personal,
    };
  }

  // Default: Full portfolio
  return {
    section: "portfolio",
    context: {
      personal,
      education,
      experience,
      skills,
      certifications,
      projects,
    },
  };
}