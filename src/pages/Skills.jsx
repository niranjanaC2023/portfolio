export default function Skills() {
  return (
    <div style={styles.container}>
      <h2>Skills</h2>

      <h3>Backend</h3>
      <ul>
        <li>Java (Core Java, OOPs, Collections)</li>
        <li>Spring Boot</li>
        <li>Spring Security</li>
        <li>Spring Data JPA</li>
        <li>RESTful APIs</li>
      </ul>

      <h3>Frontend</h3>
      <ul>
        <li>React.js</li>
        <li>JavaScript (ES6+)</li>
        <li>HTML5, CSS3</li>
      </ul>

      <h3>Database</h3>
      <ul>
        <li>MySQL</li>
      </ul>

      <h3>Tools & Platforms</h3>
      <ul>
        <li>Git & GitHub</li>
        <li>Postman</li>
        <li>VS Code</li>
        <li>Maven</li>
      </ul>
    </div>
  );
}

const styles = {
  container: { padding: "40px" },
};