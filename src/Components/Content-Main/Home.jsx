import React, { useEffect, useState } from "react";
import "../Content-Main/Home.css";
import { useTypewriter } from "react-simple-typewriter";
import Logo from "../../assets/Images/ambreen.svg";
import Waving from "../../assets/Images/waving.svg";
import { Link } from "react-router-dom";


function Home() {
  const [typeEffect] = useTypewriter({
    words: ["Full Stack Developer", "Graphic Designer", "Freelancer"],
    loop: {},
    typeSpeed: 90,
    delaySpeed: 1000,
    cursor: "8",
  });
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div
        className={`container mt-4 ${isActive ? "fade-in active" : "fade-in"}`}
      >
        <div className="row d-flex flex-row-reverse ">
          {/* 1st Column-Left  */}
          <div className="col-xl-4 col-lg-4 col-md-4 ">
            <div className="my-5 m-auto">
              <img src={Logo} className="w-100 my-3  my-img" alt="" srcset="" />
            </div>
          </div>

          {/* 2nd Column-Right  */}
          <div className="col-xl-8 col-lg-8 col-md-8 mt-5 ">
            <div className=" my-5 res-text">
              <h3 className="hi-there">
                HI THERE!{" "}
                <span>
                  <img src={Waving} alt="Waving-Hand" className="waving" />
                </span>
              </h3>
              <h1>
                <span className="im">I'M</span>{" "}
                <span className="name-text">AMBREEN</span>
              </h1>
              <h2 className="my-3">
                {" "}
                <span className="text-change  round-first p-1 ">& I'M </span>
                <span className="text-change p-1 round-sec">{typeEffect}</span>
              </h2>

              <p className="des-text">
                MERN Stack Dev | Passionate about Web Apps | Let's Build
                Something Awesome!
                <br />
                Continuously learning, problem-solving, and turning concepts
                into reality. From dynamic user interfaces to robust server-side
                applications, I'm all about making a difference in tech.
              </p>

              <Link to="/about">
                <button className="btn-download mb-4">
                  <span class="label btn-main"> More About Me</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
