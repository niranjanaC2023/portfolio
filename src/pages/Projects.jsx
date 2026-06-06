export default function Projects() {
  return (
    <div style={{ padding: "40px" }}>
      <h2>Projects</h2>

      <div style={styles.grid}>
        <div style={styles.card}>
          <h3>Auth Service</h3>
          <p>Spring Boot + JWT Authentication</p>
        </div>

        <div style={styles.card}>
          <h3>React CRUD App</h3>
          <p>Full CRUD operations with API integration</p>
        </div>

        
      </div>
    </div>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))",
    gap: "20px",
  },
  card: {
    background: "#1e293b",
    padding: "20px",
    borderRadius: "10px",
    color: "white",
  },
};