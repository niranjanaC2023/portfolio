// export default function Education() {
//   return (
//     <div style={{ padding: "40px" }}>
//       <h2>Education</h2>

//       <ul>
//         <li>B.Tech CSE - 2021 - 72%</li>
//         <li>Intermediate - PCMB - 80%</li>
//         <li>SSC - 70%</li>
//       </ul>
//     </div>
//   );
// }

export default function Education() {
  return (
    <div style={styles.container}>
      <h2>Education</h2>

      <div style={styles.card}>
        <h3>B.Tech (Mechanical Branch)</h3>
        <p>Gandhi Institute for Technology, Bhubaneswar, Odisha</p>
        <p>2021 | 72%</p>
      </div>

      <div style={styles.card}>
        <h3>Intermediate (PCMB)</h3>
        <p>Narayana College, Berhampur, Odisha</p>
        <p>2017 | 85%</p>
      </div>

      <div style={styles.card}>
        <h3>SSC (10th)</h3>
        <p>Narayana School, Berhampur, Odisha</p>
        <p>2015 | 70%</p>
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