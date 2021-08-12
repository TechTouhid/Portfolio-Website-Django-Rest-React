import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

export default function Intro() {
  const textRef = useRef();
  const [personalInfo, setPersonalInfo] = useState([]);

  useEffect(() => {
    axios.get("/api/personalinfo").then((response) => {
      setPersonalInfo(response.data[0]);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Developer", "Programmer", "Content Creator"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src={personalInfo.image} alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Touhidur Rahman</h1>
          <h3>
            Freelance <span ref={textRef}></span>
          </h3>
          <h4>
            <button
              type="submit"
              onClick={() => {
                alert("Please Email to: touhidurrahman1997@gmail.com");
              }}
            >
              HIRE ME
            </button>
            <button
              onClick={() => window.open(personalInfo.resume, "_blank")}
              type="submit"
            >
              DOWNLOAD CV
            </button>
          </h4>
        </div>
        <a href="#portfolio">
          <img src="images/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
