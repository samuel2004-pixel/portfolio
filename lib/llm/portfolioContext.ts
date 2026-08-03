import personal from "@/data/personal.json";
import skills from "@/data/skills.json";
import experience from "@/data/experience.json";
import education from "@/data/education.json";
import projects from "@/data/projects.json";
import certifications from "@/data/certifications.json";

const PORTFOLIO_CONTEXT = `
PERSONAL
${JSON.stringify(personal, null, 2)}

SKILLS
${JSON.stringify(skills, null, 2)}

EXPERIENCE
${JSON.stringify(experience, null, 2)}

EDUCATION
${JSON.stringify(education, null, 2)}

CERTIFICATIONS
${JSON.stringify(certifications, null, 2)}

PROJECTS
${JSON.stringify(projects, null, 2)}
`;

export { PORTFOLIO_CONTEXT };