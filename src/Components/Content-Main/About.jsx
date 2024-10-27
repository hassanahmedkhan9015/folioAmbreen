import React, { useEffect, useState } from "react";
import "./About.css";
import Download from "../../assets/Images/download.svg";
import Coderatory from "../../assets/Images/coderatory.svg";
import Insoft from "../../assets/Images/insoft.svg";
import Hassan from "../../assets/Images/hassan.pdf";

function About() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  //   Skills-Section
  const SkillProgressBar = ({ skill, percentage }) => (
    <div className="col-6 mb-5">
      <p className="prog-head mx-2">{skill}</p>
      <div className="progress">
        <div
          className="progress-bar progress-bg"
          role="progressbar"
          aria-label="Basic example"
          style={{ width: `${percentage}%` }}
          aria-valuenow={percentage}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {percentage}%
        </div>
      </div>
    </div>
  );

  const skillsData = [
    { skill: "HTML", percentage: 80 },
    { skill: "CSS", percentage: 70 },
    { skill: "BOOTSTRAP", percentage: 85 },
    { skill: "TAILWIND", percentage: 85 },
    { skill: "REACT.JS", percentage: 70 },
    { skill: "NEXT.JS", percentage: 70 },
    { skill: "EXPRESS.JS", percentage: 50 },
    { skill: "NODE.JS", percentage: 60 },
    { skill: "MONGODB", percentage: 45 },
  ];

  // TimeLine-Section
  const TimelineItem = ({ icon, title, company, date }) => (
    <li className="timeline-item mb-5">
      <span className="timeline-icon">
        <img src={icon} alt="" />
      </span>
      <h5 className="fw-bold">{title}</h5>
      <p className="company mb-1 ">{company}</p>
      <p>{date}</p>
    </li>
  );

  const timelineData = [
    {
      icon: Coderatory,
      title: "Full Stack Developer Intern",
      company: "Coderatory",
      date: "Jul-2023 - Dec-2023",
    },
    {
      icon: Insoft,
      title: "Full Stack Developer",
      company: "Insoft IT",
      date: "Feb-2024 - Present",
    },
  ];

  return (
    <div className={`container ${isActive ? "fade-in active" : "fade-in"}`}>
      <div className="row">
        <h1 className="text-center mb-5 about-me-head">ABOUT ME</h1>

        <div className="col-xl-6 col-lg-6 col-md-6   d-flex  align-items-baseline">
          <div className="">
            <p className="des-about">
              I'm Hassan Ahmed from Karachi, also known as the City of Light.
              I'm a second-year Information Technology student at Benazir Bhutto
              Shaheed University of Karachi, and I thrive on challenges across
              diverse domains.
            </p>
            <p className="des-about">
              My focus is on web development, and I'm adept at creating dynamic
              sites and decentralized systems. My portfolio showcases
              innovation, and I'm committed to continuous learning to make
              impactful tech contributions. Feel free to reach out anytime for
              assistance or inquiries! 😊
            </p>
            {/* <button className="  btn btn-danger mb-5">Download Resume</button> */}
            <a href={Hassan} target="_blank" download="Hassan_Resume.pdf">
              <button className="btn-download-about mb-5">
                <span class="label"> Download Resume</span>
                <span class="icon">
                  <img src={Download} alt="" srcset="" />
                </span>
              </button>
            </a>
          </div>
        </div>

        <div className="col-xl-6 col-lg-6 col-md-6 ">
          <div class="d-flex justify-content-center">
            <div className=" p-3 card-design mx-2 card-width item">
              <div className="">
                <h5 className="card-title card-heading">12K+</h5>
                <p className="card-text mb-5 mx-2 card-des mt-2">
                  Lines Of Code
                </p>
              </div>
            </div>
            <div className=" p-3 card-design card-width item">
              <div className="">
                <h5 className="card-title card-heading">6+</h5>
                <p className="card-text mb-5 mx-2 card-des mt-2">Projects</p>
              </div>
            </div>
          </div>
          {/* 2-Card-Row  */}

          <div class="d-flex justify-content-center mt-2 m-bottom">
            <div className=" p-3 card-design mx-2 card-width item">
              <div className="">
                <h5 className="card-title card-heading">1+</h5>
                <p className="card-text mb-5 mx-2 mt-2 card-des">
                  Years of Experience
                </p>
              </div>
            </div>
            <div className=" p-3 card-design card-width item">
              <div className="">
                <h5 className="card-title card-heading">4+</h5>
                <p className="card-text mb-5 mx-2 card-des mt-2">
                  Professional Certification Earned
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SKILLS-SECTION  */}
      <div className="row mb-5">
        <h1 className="text-center mb-5 about-me-head">MY SKILLS</h1>

        {skillsData.map((skill, index) => (
          <SkillProgressBar key={index} {...skill} />
        ))}
      </div>

      {/* TIMELINE  */}
      <h1 className="text-center mb-5 about-me-head">MY TIMELINE</h1>
      <div className="d-flex justify-content-center">
        <section className="py-5">
          <ul className="timeline-with-icons">
            {timelineData.map((item, index) => (
              <TimelineItem key={index} {...item} />
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default About;
