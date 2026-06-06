export default function Education() {
  return (
    <div style={styles.container}>
      <h2>Education</h2>

      <div style={styles.card}>
        <h3>B.Tech in Mechanical Engineering</h3>
        <p>Gandhi Institute for Technology, Bhubaneswar, Odisha</p>
        <p>JNTU | 2017 - 2021</p>
        <p>Percentage: 72%</p>
      </div>

      <div style={styles.card}>
        <h3>Intermediate (MPC/PCMB)</h3>
        <p>Narayana Junior College, Berhampur, Odisha</p>
        <p>Board of Intermediate Education | 2015 - 2017</p>
        <p>Percentage: 85%</p>
      </div>

      <div style={styles.card}>
        <h3>SSC (10th Standard)</h3>
        <p>Narayana School, Berhampur, Odisha</p>
        <p>Board of Secondary Education | 2015</p>
        <p>Percentage: 70%</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
  },
  card: {
    background: "#1e293b",
    color: "white",
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "20px",
  },
};