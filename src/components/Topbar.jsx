import "./topbar.scss";
import PersonIcon from "@material-ui/icons/Person";
import MailIcon from "@material-ui/icons/Mail";
import axios from "axios";
import React, { useState, useEffect } from "react";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

export default function Topbar(props) {
  const [personalInfo, setPersonalInfo] = useState([]);
  // const ai = axios.create({
  //   // baseURL: "https://techtouhid.herokuapp.com",
  //   baseURL: "http://127.0.0.1:8000",
  // });

  useEffect(() => {
    axios.get("/api/personalinfo").then((response) => {
      setPersonalInfo(response.data[0]);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={"topbar " + (props.menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            TechTouhid
          </a>
          <div className="itemContainer">
            <PersonIcon className="icon" />
            <span>{personalInfo.phone}</span>
          </div>
          <div className="itemContainer">
            <MailIcon className="icon" />
            <span>{personalInfo.email}</span>
          </div>
        </div>

        <div className="right">
          <div
            className="hamburger"
            onClick={() => props.setMenuOpen(!props.menuOpen)}
          >
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
