import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Developer", "Programmer", "Youtuber"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src="images/man.png" alt="" />
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
            {/* <span>HIRE ME</span>
            <span>DOWNLOAD CV</span> */}
            <button type="submit">HIRE ME</button>
            <button
              onClick={() =>
                window.open(
                  "https://www.businessfirstonline.co.uk/wp-content/uploads/2020/05/What-Are-the-Major-Types-of-Computer-Software-Used-in-Business.jpg",
                  "_blank"
                )
              }
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
