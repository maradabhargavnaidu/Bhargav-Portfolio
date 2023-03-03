const Home = () => {
  return (
    <section className="main-content">
      <div className="intro" id="home">
        <h1 style={{ fontSize: "75px" }}>G'day,</h1>
        <h1>
          I'm{" "}
          <span style={{ color: "#7e22ce", fontSize: "75px" }}>Bhargav</span>
        </h1>
        <h3 style={{ color: "#fd841f" }}>Web Developer</h3>
        <br />
        <br />
        <a href="" style={{ fontSize: "40px" }}>
          Download CV&nbsp;
          <i class="fa fa-arrow-circle-o-down" aria-hidden="true"></i>
        </a>
      </div>

      {/* <!------------Intro-Social Links-----------> */}

      <div class="about">
        <a href="https://github.com/maradabhargavnaidu">
          <i class="fa fa-github" aria-hidden="true"></i>
        </a>
        <a href="https://www.linkedin.com/in/bhargav-naidu">
          <i class="fa fa-linkedin" aria-hidden="true"></i>
        </a>
        <a href="https://instagram.com/maradabhargavnaidu?igshid=YzgyMTM2MGM=">
          <i class="fa fa-instagram" aria-hidden="true"></i>
        </a>
      </div>
    </section>
  );
};
export default Home;
