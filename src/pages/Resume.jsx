export default function Resume() {
  const resume = `${import.meta.env.BASE_URL}Prasanta_Kumar_Charty_Resume.pdf`;
  return (
    <div style={{ textAlign: "center", padding: "60px" }}>
      <h2>My Resume</h2>

      <div style={{ marginTop: "20px" }}>
        
        <a href={resume} target="_blank" style={styles.btn}>
          View Resume
        </a>

        {/* <a href={`${import.meta.env.BASE_URL}Prasanta_Kumar_Charty_Resume.pdf`} download style={styles.btnOutline}>
          Download Resume
        </a> */}

        <a href={resume} download style={styles.btnOutline}>
          Download Resume
        </a>
       
      </div>
    </div>
  );
}

const styles = {
  btn: {
    background: "#38bdf8",
    padding: "10px 20px",
    marginRight: "10px",
    color: "black",
    borderRadius: "5px",
  },
  btnOutline: {
    border: "1px solid #38bdf8",
    padding: "10px 20px",
    borderRadius: "5px",
  },
};
