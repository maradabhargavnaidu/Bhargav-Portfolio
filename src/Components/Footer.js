const Footer = () => {
  const github = (
    <a href="https://github.com/maradabhargavnaidu">
      <i class="fa fa-github" aria-hidden="true"></i>
    </a>
  );
  const linkedin = (
    <a href="https://www.linkedin.com/in/bhargav-naidu">
      <i class="fa fa-linkedin" aria-hidden="true"></i>
    </a>
  );
  const instagram = (
    <a href="https://instagram.com/maradabhargavnaidu?igshid=YzgyMTM2MGM=">
      <i class="fa fa-instagram" aria-hidden="true"></i>
    </a>
  );
  const Mail = (
    <a href="mailto:bhargav.naidu.mbn.18@gmail.com">
      <i class="fa fa-envelope" aria-hidden="true"></i>
    </a>
  );

  return (
    <footer className="footer-bg">
      <div className="footer-content">
        <h1>MARADA BHARGAV NAIDU</h1>
        <h6 style={{ fontSize: "20px" }}>STAY CONNECTED</h6>
        {/* <!-----------------------Footer-Links--------------------------> */}
        <div class="links">
          {github}
          {linkedin}
          {instagram}
          {Mail}
        </div>
        <br />
        <p style={{ fontSize: "15px" }}>bhargavnaidu &copy; 2023</p>
      </div>
    </footer>
  );
};
export default Footer;
