import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SSC (10th Standard)</h4>
                <h5>Little Flower High School, Aurangabad</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Completed SSC from Maharashtra State Board.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Diploma in Computer Engineering</h4>
                <h5>P.E.S College, Aurangabad</h5>
              </div>
              <h3>2022-2025</h3>
            </div>
            <p>
              Completed Diploma in Computer Engineering with 76.69%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Technology (B.Tech)</h4>
                <h5>Enrolled</h5>
              </div>
              <h3>2025 - Present</h3>
            </div>
            <p>
              Currently pursuing Bachelor of Technology program.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
