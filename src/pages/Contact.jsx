export default function Contact() {
  return (
    <div style={styles.container}>
      <h2>Contact 📞</h2>

      <p>Feel free to reach out for job opportunities or collaboration 👍</p>

      <div style={styles.card}>
        <p>
          📧 Email:{" "}
          <a href="mailto:prasantakumarcharty123@gmail.com">
            prasantakumarcharty123@gmail.com
          </a>
        </p>

        <p>
          📱 Phone:{" "}
          <a href="tel:+919776176933">+91 9776176933</a>
        </p>

        <p>
          🔗 GitHub:{" "}
          <a
            href="https://github.com/niranjanaC2023"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/niranjanaC2023
          </a>
        </p>
      </div>
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
  card: {
    marginTop: "20px",
    padding: "20px",
    background: "#0f172a",
    borderRadius: "10px",
    border: "1px solid #38bdf8",
    lineHeight: "1.8",
  },
};