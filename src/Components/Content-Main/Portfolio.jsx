import React, { useEffect, useState } from "react";
import "./Portfolio.css";
import "../Navbar/Dark.css";
import Calculator from "../../assets/Images/calculator.svg";
import Github from "../../assets/Images/github.svg";
import Live from "../../assets/Images/live.svg";
import Finyou from "../../assets/Images/finyou.svg";
import Dashboard from "../../assets/Images/dashboard.svg";
import Travel from "../../assets/Images/travel.svg";
import Todo from "../../assets/Images/todo.svg";
import Filmy from "../../assets/Images/filmy.svg";
import AuthApp from "../../assets/Images/authApp.svg";

function Portfolio() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Projects-Cards
  const projectsData = [
    {
      title: "Auth Application",
      image: AuthApp,
      description: "Next.js Authentication App",
      githubLink: "https://github.com/hassanahmedkhan9015/authApp",
      liveLink: "https://auth-app-hassan.vercel.app/",
    },
    {
      title: "Filmy Verse",
      image: Filmy,
      description: false,
      githubLink: "https://github.com/hassanahmedkhan9015/FilmyVerse",
      liveLink: "https://filmyverse-hassan.netlify.app/",
    },

    {
      title: "Landing Page",
      image: Finyou,
      description: "German Website",
    },
    {
      title: "E-Commerce Web",
      image: Dashboard,
      description: "Dashboard",
      githubLink: false,
      liveLink: false,
    },
    {
      title: "CALCULATOR",
      image: Calculator,
      description: false,
      githubLink: false,
      liveLink: "https://calculator-hassan.netlify.app/",
    },
    {
      title: "Travel Web",
      image: Travel,
      description: "Landing Page Basic",
      githubLink: "https://github.com/hassanahmedkhan9015/Porject-1-BN",
      liveLink: "https://qodertravels.netlify.app/",
    },
    {
      title: "Todo App",
      image: Todo,
      description: "Task add, Delete & Mark only",
      githubLink: "https://github.com/hassanahmedkhan9015/Todo-React",
      liveLink: "https://todolist-hassan.netlify.app/",
    },
  ];
  const ProjectCard = ({ title, image, description, githubLink, liveLink }) => (
    <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
      <div className="card">
        <img src={image} alt={title} className="w-100" />
        <div className="card__content text-center d-flex align-items-center justify-content-center">
          <div>
            <p className="des-card ">{title}</p>
            <p className="des-card-des">{description}</p>
            <div className="res-m">
              {githubLink && (
                <a
                  href={githubLink}
                  target="_blank"
                  className="card-btns btn rounded-circle my-1"
                >
                  <img src={Github} alt="GitHub" />
                </a>
              )}
              {liveLink && (
                <a
                  href={liveLink}
                  target="_blank"
                  className="card-btns btn rounded-circle "
                >
                  <img src={Live} alt="Live" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div className={`container ${isActive ? "fade-in active" : "fade-in"}`}>
      <h1 className="text-center mb-3 portfolio-head">PORTFOLIO</h1>
      <p className="text-center mb-5 des-portfolio">
        Hello and welcome to my portfolio! I'm a web developer, and I'm thrilled
        to share a handpicked collection of my impressive projects with you.
        These projects showcase my skills in crafting creative solutions using
        web technologies. Feel free to explore and learn more about my work.
      </p>

      {/* CARDS  */}

      <div className="row res-row mb-5">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
