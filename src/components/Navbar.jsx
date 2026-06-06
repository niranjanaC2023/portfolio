import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={{ color: "#38bdf8" }}>Portfolio</h2>

      <div style={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>   {/* 👈 ADD THIS */}
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/education">Education</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px",
    background: "#020617",
    color: "white",
  },
  links: {
    display: "flex",
    gap: "20px",
  },
};