import "./services.scss";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "CRM TECH",
    period: "Nov 2025 — Apr 2026",
    points: [
      "Owned platform features end-to-end across multiple full-stack projects, from requirement analysis to production deployment with React.js, Node.js, Express.js, and MongoDB.",
      "Designed REST APIs and scalable relational/NoSQL database schemas for production modules, with attention to reliability and observability.",
      "Implemented JWT-based authentication and complete CRUD services, collaborating with a cross-functional team using Git/GitHub.",
    ],
  },
];

const education = [
  {
    school: "Maharana Pratap Engineering College, Kanpur",
    degree: "B.Tech in Computer Science & Engineering",
    period: "2022 — 2026",
    grade: "CGPA: 7.3",
  },
];

const achievements = [
  "7th Rank in HackTU 6.0 Hackathon at Thapar University",
  "5th Rank in college-level coding contest; selected for SIH screening rounds",
  "600+ DSA problems solved across LeetCode, CodeChef, and HackerBlocks",
  "Advanced coursework in MERN Stack, DSA, and React Native mobile app development",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const About = () => {
  return (
    <div className="about-section">
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.span className="section-label" variants={itemVariants}>
            About Me
          </motion.span>
          <motion.h2 className="section-title" variants={itemVariants}>
            Experience & Background
          </motion.h2>

          <motion.p className="about-intro" variants={itemVariants}>
            Systems-oriented full-stack engineer with hands-on experience designing REST APIs,
            relational and NoSQL data models, and backend services deployed to production.
            Comfortable owning platform features end-to-end, working across ambiguous requirements,
            and collaborating with cross-functional teams to build scalable, reliable systems.
          </motion.p>

          <div className="about-grid">
            <motion.div className="experience-col" variants={itemVariants}>
              <h3 className="col-heading">Experience</h3>
              {experiences.map((exp, i) => (
                <div className="exp-card" key={i}>
                  <div className="exp-header">
                    <div>
                      <h4>{exp.role}</h4>
                      <span className="exp-company">{exp.company}</span>
                    </div>
                    <span className="exp-period">{exp.period}</span>
                  </div>
                  <ul className="exp-points">
                    {exp.points.map((point, j) => (
                      <li key={j}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}

              <h3 className="col-heading" style={{ marginTop: 40 }}>Education</h3>
              {education.map((edu, i) => (
                <div className="exp-card" key={i}>
                  <div className="exp-header">
                    <div>
                      <h4>{edu.school}</h4>
                      <span className="exp-company">{edu.degree}</span>
                    </div>
                    <div className="edu-right">
                      <span className="exp-period">{edu.period}</span>
                      <span className="exp-grade">{edu.grade}</span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div className="achievements-col" variants={itemVariants}>
              <h3 className="col-heading">Achievements</h3>
              <div className="achievements-list">
                {achievements.map((a, i) => (
                  <div className="achievement-item" key={i}>
                    <div className="achievement-icon">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span>{a}</span>
                  </div>
                ))}
              </div>

              <h3 className="col-heading" style={{ marginTop: 40 }}>Extracurricular</h3>
              <div className="achievements-list">
                <div className="achievement-item">
                  <div className="achievement-icon">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>Teach DSA in C++ to students, building their problem-solving and analytical skills</span>
                </div>
                <div className="achievement-item">
                  <div className="achievement-icon">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>Conduct regular sessions on core DSA concepts and coding best practices</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
