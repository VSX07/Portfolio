import "./parallax.scss";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "C", "C++", "HTML", "CSS"],
  },
  {
    title: "Backend & APIs",
    skills: ["Node.js", "Express.js", "REST API Design", "JWT Auth", "System Design"],
  },
  {
    title: "Data",
    skills: ["MongoDB", "MySQL", "SQL/NoSQL Modeling", "Query Optimization"],
  },
  {
    title: "Cloud & Tools",
    skills: ["AWS Fundamentals", "Git", "GitHub", "Postman", "VS Code", "npm"],
  },
  {
    title: "Core Competencies",
    skills: ["DSA", "Distributed Systems", "Problem Solving", "Cross-Functional Collaboration"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Skills = () => {
  return (
    <div className="skills-section">
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.span className="section-label" variants={itemVariants}>
            Tech Stack
          </motion.span>
          <motion.h2 className="section-title" variants={itemVariants}>
            Skills & Technologies
          </motion.h2>

          <div className="skills-grid">
            {skillCategories.map((cat, i) => (
              <motion.div className="skill-category" key={i} variants={itemVariants}>
                <h3>{cat.title}</h3>
                <div className="skill-tags">
                  {cat.skills.map((skill, j) => (
                    <span className="skill-tag" key={j}>
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
