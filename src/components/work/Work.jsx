import "./work.scss";
import { useState, useEffect } from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import axios from "axios";

// this 2 line need for deployment
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

export default function Work() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [workData, setWorkData] = useState([]);

  useEffect(() => {
    async function fetchWork() {
      const { data } = await axios.get("/api/work/list");
      setWorkData(data);
    }
    fetchWork();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handelClick = (way) => {
    way === "left"
      ? setCurrentSlide(
          currentSlide > 0 ? currentSlide - 1 : workData.length - 1
        )
      : setCurrentSlide(
          currentSlide < workData.length - 1 ? currentSlide + 1 : 0
        );
  };
  return (
    <div className="works" id="works">
      <h1>My Service</h1>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {workData.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.image_icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.description}</p>
                  <span onClick={() => window.open(d.url, "_blank")}>
                    Projects
                  </span>
                </div>
              </div>
              <div className="right">
                <img src={d.image_banner} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <ArrowForwardIosIcon
        className="arrow left"
        onClick={() => handelClick("right")}
      />
      <ArrowForwardIosIcon
        className="arrow right"
        onClick={() => handelClick("left")}
      />
    </div>
  );
}
