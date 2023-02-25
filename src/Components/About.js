const About = () => {
    return(
        <section className="about-content" id="about">
            <h1 className="center">About</h1>
            <div className="content-container">
                {/* <!-- <div class="pic">
                    <img src="./images/portfolio-pic.png" alt="pic" width="200px" height="200px"/>
                </div> --> */}
                <div>
                    <h1 className="center font" style={{fontSize:'30px',color:'white'}}>My Name is <span style={{color:'white',fontSize:"30px"}}>Bhargav</span></h1>
                    <p className="center font" style={{fontSize:'30px',color:'white'}}>I'm a computer science student at Malla Reddy Engineering College. I love coding and have strong skills in website development</p>
                </div>
            </div>
        </section>
    )
}
export default About;