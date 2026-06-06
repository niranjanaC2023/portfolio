export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        
        {/* Left Section */}
        <div>
          <h3 style={styles.heading}>Niranjan</h3>
          <p>Java Full Stack Developer</p>
          <p>Building scalable apps using Spring Boot & React</p>
        </div>

        {/* Contact Section */}
        <div>
          <h3 style={styles.heading}>Contact</h3>
          <p>Email: prasantakumarcharty123@gmail.com</p>
          <p>Phone: +91 9776176933</p>
        </div>

        {/* Address Section */}
        <div>
          <h3 style={styles.heading}>Address</h3>
          <p>At: Karapada, P.O: Karapada, Dist: Ganjam, Pin: 761026</p>
          <p>Odisha, India</p>
        </div>

      </div>

      {/* Bottom Line */}
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