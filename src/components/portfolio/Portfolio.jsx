import "./portfolio.scss";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "VirtualCourtroom Platform",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini AI", "Pinecone"],
    description:
      "AI-powered platform supporting multi-round, stateful debate sessions with a RAG pipeline using vector embeddings for low-latency semantic retrieval.",
    points: [
      "Built Retrieval-Augmented Generation (RAG) pipeline using vector embeddings and Pinecone",
      "Designed data models and API contracts to persist argument history and session state",
      "Built secure backend systems using JWT authentication and optimized MongoDB schemas",
    ],
    url: "https://github.com/VSX07",
  },
  {
    id: 2,
    title: "Event Management System",
    tech: ["React.js", "React Native", "Node.js", "MongoDB"],
    description:
      "Cross-platform event management system handling user roles and concurrent registrations at scale, with web and mobile clients.",
    points: [
      "Designed REST APIs to handle user roles and concurrent registrations at scale",
      "Implemented role-based access control (RBAC) and optimized database schema",
      "Ensured data consistency across web and mobile clients through careful API and state design",
    ],
    url: "https://github.com/VSX07",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Portfolio = () => {
  return (
    <div className="projects-section">
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.span className="section-label" variants={itemVariants}>
            Projects
          </motion.span>
          <motion.h2 className="section-title" variants={itemVariants}>
            Featured Work
          </motion.h2>

          <div className="projects-grid">
            {projects.map((project) => (
              <motion.div className="project-card" key={project.id} variants={itemVariants}>
                <div className="project-top">
                  <div className="project-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                    </svg>
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label="View project"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </a>
                </div>

                <h3>{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <ul className="project-points">
                  {project.points.map((point, j) => (
                    <li key={j}>{point}</li>
                  ))}
                </ul>

                <div className="project-tech">
                  {project.tech.map((t, j) => (
                    <span key={j}>{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div className="projects-cta" variants={itemVariants}>
            <a
              href="https://github.com/VSX07"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-link"
            >
              View all projects on GitHub
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
