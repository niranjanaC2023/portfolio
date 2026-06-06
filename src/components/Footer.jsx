export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>

        <div>
          <h3 style={styles.heading}>Prasanta Kumar Charty</h3>
          <p>Java Developer</p>
          <p>Building scalable apps using Spring Boot & React</p>
        </div>

        <div>
          <h3 style={styles.heading}>Contact</h3>

          <p>
            Email:{" "}
            <a href="mailto:prasantakumarcharty123@gmail.com">
              prasantakumarcharty123@gmail.com
            </a>
          </p>

          <p>
            Phone:{" "}
            <a href="tel:+919776176933">+91 9776176933</a>
          </p>
        </div>

        <div>
          <h3 style={styles.heading}>Address</h3>
          <p>Karapada, Ganjam, Odisha</p>
          <p>India - 761026</p>
        </div>

      </div>

      <div style={styles.bottom}>
        © 2026 Prasanta | All Rights Reserved
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background: "#020617",
    color: "white",
    marginTop: "50px",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    padding: "40px",
    flexWrap: "wrap",
    gap: "20px",
  },
  heading: {
    color: "#38bdf8",
    marginBottom: "10px",
  },
  bottom: {
    textAlign: "center",
    padding: "15px",
    borderTop: "1px solid #1e293b",
    fontSize: "14px",
  },
};