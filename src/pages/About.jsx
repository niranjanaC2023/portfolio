export default function About() {
  return (
    <div style={styles.container}>
      <h2>About Me 🧠</h2>

      <p style={styles.text}>
        Passionate Java developer seeking an entry-level opportunity in backend
        development. I enjoy building scalable and efficient applications using
        Spring Boot and React.
      </p>

      <p style={styles.text}>
        I am a quick learner with strong problem-solving skills and a strong
        interest in building real-world software solutions.
      </p>

      <h3>Strengths 💪</h3>
      <ul>
        <li>Strong understanding of Java & OOP concepts</li>
        <li>Backend development using Spring Boot</li>
        <li>Frontend development using React</li>
        <li>Problem-solving & debugging skills</li>
      </ul>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    color: "white",
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
    minHeight: "100vh",
  },
  text: {
    lineHeight: "1.6",
    marginBottom: "15px",
  },
};