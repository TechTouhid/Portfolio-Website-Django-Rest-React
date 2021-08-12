import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import { useState, useEffect } from "react";
import axios from "axios";

// this 2 line need for deployment
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const [portfolioData, setPortfolioData] = useState([]);

  // const ai = axios.create({
  //   // baseURL: "https://techtouhid.herokuapp.com",
  //   baseURL: "http://127.0.0.1:8000",
  // });

  useEffect(() => {
    async function fetchPortfolio() {
      const { data } = await axios.get("/api/portfolio/list");
      setPortfolioData(data);
    }
    fetchPortfolio();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  let featuredPortfolio = portfolioData.filter(
    (data) => data.portfolio_type === 1
  );
  let webPortfolio = portfolioData.filter((data) => data.portfolio_type === 2);
  let mobilePortfolio = portfolioData.filter(
    (data) => data.portfolio_type === 3
  );
  let designPortfolio = portfolioData.filter(
    (data) => data.portfolio_type === 4
  );
  let contentPortfolio = portfolioData.filter(
    (data) => data.portfolio_type === 5
  );

  // useEffect(() => {
  //   setSelected("featured");
  // }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
        console.log("featuredPortfolio");
    }
  }, [selected, portfolioData]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
            key={item.id}
          />
        ))}
      </ul>

      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img
              src={d.image}
              alt=""
              onClick={() => window.open(d.url, "_blank")}
            />
            <h3 onClick={() => window.open(d.url, "_blank")}>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
