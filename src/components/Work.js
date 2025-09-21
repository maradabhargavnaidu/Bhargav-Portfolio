import React from "react";

const Work = () => {
  return (
    <div className="p-4">
      <p className="text-purple-500 text-3xl font-semibold">Experience</p>
      <br />
      <div>
        <p className="text-white">
          [July.2025 - Present] Cognizant Technology Solutions Pvt Ltd
        </p>
        <p className="text-white">
          DevOps Engineer | Programmer Analyst Trainee
        </p>
        <ul className="list-disc list-inside">
          <li>
            Undergoing training in{" "}
            <span className="text-white">
              Linux, Shell scripting, Azure, Python Jenkins, Ansible, Docker,
              Kubernetes, Jira and Agile Methodologies.
            </span>
          </li>
          <li>
            Implemented <span className="text-white">CI/CD pipeline</span> using
            <span className="text-white"> Jenkins</span> for Maven-based Java
            app, with automated deployment to
            <span className="text-white"> Apache Tomcat</span>
          </li>
        </ul>
      </div>
      <br />
      <br />
      <div>
        <p className="text-white">[Feb.2025 - June.2025] Accenture</p>
        <p className="text-white">
          Java Developer Intern | Packaged App Dev Associate
        </p>
        <ul className="list-disc list-inside">
          <li>
            Trained in{" "}
            <span className="text-white">
              Java, Spring Boot, Agile, JPA, RDBMS, JUnit and Design Patterns.
            </span>
          </li>
          <li>
            Developed backend services using{" "}
            <span className="text-white">Spring Boot </span>for mock enterprise
            applications to simulate real-world use cases.
          </li>
          <li>
            Automated end-to-end test cases using{" "}
            <span className="text-white">Playwright</span>, improving test
            reliability and reducing manual testing time.
          </li>
        </ul>
      </div>
      <br />
      <br />
      <div>
        <p className="text-white">
          [Oct.2024 - Feb.2025] Meluha Technologies Pvt Ltd
        </p>
        <p className="text-white">Full Stack Developer Intern | MERN Stack</p>
        <ul className="list-disc list-inside">
          <li>
            Developed the Organization Setup and Time Table modules for a School
            ERP, efficiently handling 50K+ students
          </li>
          <li>
            Reduced API response time by 40% by optimizing{" "}
            <span className="text-white">MongoDB queries </span>
            implementing indexing.
          </li>
          <li>
            Improved frontend rendering speed by 35% using{" "}
            <span className="text-white">lazy loading, code splitting </span>in
            React.js.
          </li>
          <li>
            Developed and optimized scalable web applications using{" "}
            <span className="text-white">ReactJS</span> and
            <span className="text-white"> NodeJS</span>, integrating{" "}
            <span className="text-white">REST API’s</span>
            and deploying on{" "}
            <span className="text-white">AWS (EC2, Lambda)</span> with{" "}
            <span className="text-white">MongoDB</span> as the database.
          </li>
          <li>
            Worked in an <span className="text-white">Agile environment</span>,
            participating in sprints and team meetings to enhance productivity
            and quality.
          </li>
        </ul>
      </div>
      <br />
      <br />
      <div>
        <p className="text-white">
          [Mar.2023 - Jun.2023] Sky Goal Innova Technologies Pvt Ltd
        </p>
        <p className="text-white">Web Developer Intern | MERN Stack</p>
        <ul className="list-disc list-inside">
          <li>
            Independently built a fully functional admin panel for an e-learning
            platform, enabling seamless course creation, user management, and
            access control, reducing administrative workload by 40%.
          </li>
          <li>
            Collaborated with a team to develop an e-learning platform and
            actively participated in{" "}
            <span className="text-white">scrum meetings </span>and{" "}
            <span className="text-white">code reviews.</span>
          </li>
          <li>
            Implemented secure{" "}
            <span className="text-white">Firebase authentication</span> using{" "}
            <span className="text-white">JWT-based session </span>
            management.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Work;
