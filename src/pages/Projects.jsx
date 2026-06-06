export default function Projects() {
  return (
    <div style={{ padding: "40px" }}>
      <h2>Projects</h2>
      {/* <div style={styles.grid}>
        <div style={styles.card}>
          <h3>Auth Service</h3>
          <p>Spring Boot + JWT Authentication</p>
        </div>

        <div style={styles.card}>
          <h3>React CRUD App</h3>
          <p>Full CRUD operations with API integration</p>
        </div>
      </div> */}

      <div style={styles.card}>
        <h3>Auth Service</h3>

        <p>
          A Spring Boot based authentication system that handles user login and
          registration using JWT tokens.
        </p>

        <ul>
          <li>User registration and login functionality</li>
          <li>JWT-based authentication for secure access</li>
          <li>Password encryption using BCrypt</li>
          <li>Basic role-based access control</li>
        </ul>

        <p>
          <b>Tech Stack:</b> Java, Spring Boot, Spring Security, JWT, MySQL
        </p>
      </div>

      <div style={styles.card}>
        <h3>React CRUD App</h3>

        <p>
          A simple React application that performs basic CRUD operations by
          connecting with REST APIs.
        </p>

        <ul>
          <li>Create, read, update, and delete records</li>
          <li>API integration using Axios</li>
          <li>Basic form validation</li>
          <li>Responsive UI design</li>
        </ul>

        <p>
          <b>Tech Stack:</b> React, JavaScript, Axios, HTML, CSS
        </p>
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
