import React, { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";
import Location from "../../assets/Images/location.svg";
import Email from "../../assets/Images/email.svg";
import Phone from "../../assets/Images/phone.svg";
import Language from "../../assets/Images/language.svg";
import Linkedin from "../../assets/Images/linkedin.svg";
import Githubcon from "../../assets/Images/githubcon.svg";
import Wattsapp from "../../assets/Images/watsapp.svg";
import Facebook from "../../assets/Images/facebook.svg";
import Insta from "../../assets/Images/insta.svg";

function Contact() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Email-JS
  const form = useRef();

  //  Toastify
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasError, setHasError] = useState(false);

  const notifySuccess = () =>
    toast.success("Form submitted successfully!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const notifyError = () =>
    toast.error("Please fill in all fields!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const sendEmail = (e) => {
    e.preventDefault();

    // Check if input fields are empty
    const name = e.target.user_name.value.trim();
    const email = e.target.user_email.value.trim();
    const subject = e.target.user_subject.value.trim();
    const message = e.target.message.value.trim();

    if (name === "" || email === "" || subject === "" || message === "") {
      // Show error toast
      notifyError();
      setHasError(true);
      setIsSubmitted(false);
      return;
    }

    // Your email sending logic here...
    emailjs
      .sendForm(
        "service_mjsttqc",
        "template_lhxg0kl",
        form.current,
        "XajA1RxpIakCYxcKt"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message Sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
    // If email is sent successfully
    // Reset form and show success toast
    setIsSubmitted(true);
    setHasError(false);
    e.target.reset();
    notifySuccess();
  };
  return (
    <div className={`container ${isActive ? "fade-in active" : "fade-in"}`}>
      <h1 className="text-center mb-5 con-head">CONTACT ME</h1>
      <p className="text-center mb-5 des-contact">
        For any questions or inquiries about my Services, Please don't hesitate
        to reach out to me. I'd be happy to assist you.
      </p>

      {/* ADDRESS/CONTACT */}
      <div className="row">
        {/* LOCATION */}
        <div className="col-md-3 col-sm-12">
          <div className="d-flex">
            <img
              src={Location}
              alt=""
              srcSet=""
              className="con-icons p-2 mx-3"
            />
            <div>
              <p className="add-head">Location</p>
              <p className="add-des">Karachi, Pakistan</p>
            </div>
          </div>
        </div>

        {/* EMAIL */}
        <div className="col-md-3 col-sm-12">
          <div className="d-flex">
            <img src={Email} alt="" srcSet="" className="con-icons p-2 mx-3" />
            <div>
              <p className="add-head">Email</p>
              <p className="add-des">hassu.90s@gmail.com</p>
            </div>
          </div>
        </div>

        {/* PHONE-NUMBER */}
        <div className="col-md-3 col-sm-12">
          <div className="d-flex">
            <img src={Phone} alt="" srcSet="" className="con-icons p-2 mx-3" />
            <div>
              <p className="add-head">Phone & Whatsapp</p>
              <p className="add-des">+92-311-2791983</p>
            </div>
          </div>
        </div>

        {/* LANGUAGE */}
        <div className="col-md-3 col-sm-12">
          <div className="d-flex">
            <img
              src={Language}
              alt=""
              srcSet=""
              className="con-icons p-2 mx-3"
            />
            <div>
              <p className="add-head">Languages</p>
              <p className="add-des">English,Hindi,Urdu</p>
            </div>
          </div>
        </div>
      </div>

      {/* BTN-ICONS  */}
      <div className="d-flex mt-5 mx-2 gap-3 mb-5">
        <a
          className="btn rounded-circle btn-icons p-2"
          href="https://www.linkedin.com/in/hassan-ahmed-423a2a25b/"
          target="_blank"
        >
          <img src={Linkedin} alt="" srcset="" className=" " />
        </a>
        <a
          className="btn rounded-circle btn-icons p-2"
          href="https://github.com/hassanahmedkhan9015"
          target="_blank"
        >
          <img src={Githubcon} alt="" srcset="" className=" " />
        </a>
        <a
          className="btn rounded-circle btn-icons p-2"
          href="https://wa.me/923112791983"
          target="_blank"
        >
          <img src={Wattsapp} alt="" srcset="" className=" " />
        </a>
        <a
          className="btn rounded-circle btn-icons  p-2"
          href="https://www.facebook.com/people/Hassan-Khan/pfbid02pQNK7u3FEy9y27d3KP8Ey8kHgtJPoCFS2Yzuwz4Mb3LBELVxDwmMAPAhhRk9BW6Nl/?mibextid=LQQJ4d"
          target="_blank"
        >
          <img src={Facebook} alt="" srcset="" className=" " />
        </a>
        <a
          className="btn rounded-circle btn-icons p-2"
          href="https://www.instagram.com/hassan_ahmed_khan1/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
          target="_blank"
        >
          <img src={Insta} alt="" srcset="" className="" />
        </a>
      </div>

      {/* FORM  */}
      <form className="mb-5 m-auto " ref={form} onSubmit={sendEmail}>
        <div class="form-group row  ">
          <div className="col-md-6 col-sm-12 ">
            <input
              type="text"
              class="form-control  bg-color  "
              id="name"
              placeholder="Your Name"
              name="user_name"
            />
          </div>
          <div className="col-md-6 col-sm-12 res-input">
            <input
              type="email"
              class="form-control bg-color "
              id="email"
              placeholder="Your Email"
              name="user_email"
            />
          </div>
        </div>

        <div class="form-group mt-4">
          <input
            type="text"
            class="form-control bg-color"
            id="subject"
            placeholder="Enter Subject"
            name="user_subject"
          />
        </div>
        <div class="form-group mt-4">
          <textarea
            class="form-control bg-color"
            id="message"
            rows="8"
            placeholder="Message Here..."
            name="message"
          ></textarea>
        </div>
        <div className="d-flex justify-content-end mt-2 mb-5">
          <button className="btn-con mb-4" value="Send" type="submit">
            <span class="label btn-submit">Submit</span>
          </button>
          <ToastContainer />
        </div>
      </form>
    </div>
  );
}

export default Contact;
