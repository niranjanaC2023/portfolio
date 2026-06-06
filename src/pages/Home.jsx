export default function Home() {
  const resume = `${import.meta.env.BASE_URL}Niranjan_Charty_Java_Developer.pdf`;
  return (
    <div style={styles.hero}>
      <h1>Hi, I'm Prasanta Kumar Charty 👋</h1>

      <h2 style={{ color: "#38bdf8" }}>
        Java Full Developer (Fresher)
      </h2>

      <p style={styles.desc}>
        Motivated and passionate developer with strong knowledge in 
        <b> Java, Spring Boot, and React</b>. 
        Interested in building scalable backend systems and modern web applications.
      </p>

      {/* Skills */}
      <p style={styles.skills}>
        Java | Spring Boot | React | MySQL | REST APIs
      </p>

      {/* 🔗 Social Links */}
      <div style={styles.social}>
        <a href="https://github.com/niranjanaC2023/portfolio" target="_blank">
          GitHub
        </a>

        <a href="https://linkedin.com/in/your-linkedin-id" target="_blank">
          LinkedIn
        </a>
      </div>

      {/* Buttons */}
      <div style={{ marginTop: "20px" }}>
        <a href={resume} target="_blank" style={styles.btn}>
          View Resume
        </a>

        <a href={resume} download style={styles.btnOutline}>
          Download Resume
        </a>

        {/* <a href="/resume" style={styles.btn}>View Resume</a> */}

        <a href="/projects" style={styles.btnOutline}>View Projects</a>
      </div>
    </div>
  );
}

const styles = {
  hero: {
    textAlign: "center",
    padding: "100px 20px",
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
    color: "white",
  },
  desc: {
    maxWidth: "600px",
    margin: "20px auto",
    lineHeight: "1.6",
  },
  skills: {
    marginTop: "10px",
    color: "#94a3b8",
  },
  social: {
    marginTop: "15px",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  btn: {
    background: "#38bdf8",
    padding: "10px 20px",
    margin: "10px",
    borderRadius: "5px",
    color: "black",
  },
  btnOutline: {
    border: "1px solid #38bdf8",
    padding: "10px 20px",
    margin: "10px",
    borderRadius: "5px",
  },
};