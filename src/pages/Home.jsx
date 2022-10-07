import reblogo from "../images/reblogo.png";
import Navbar from "../components/Navbar";
//import Header from "../components/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import FlipMove from "react-flip-move";
import Card from "../components/Card";

function Home() {
  const [active, setActive] = useState("recent");
  const [avatars, setAvatars] = useState();
  const [recentAvatars, setRecentAvatars] = useState();
  const [topAvatars, setTopAvatars] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    getLikes();
  }, []);

  const clearResponseData = (arr) => {
    const keys = Object.keys(arr);

    const resultArr = Object.keys(arr)
      .map((key, index) => {
        if (
          keys.indexOf(key) >= 0 &&
          key.indexOf("showcase") >= 0 &&
          key.indexOf("chris") < 0
        ) {
          return { key: key, count: arr[key] };
        }
      })
      .filter((element) => element !== undefined);

    return resultArr;
  };

  const getLikes = () => {
    axios.get("https://market-api.reblium.com/tracking").then((response) => {
      const onlyShowcase = clearResponseData(response.data);
      setAvatars(onlyShowcase);
      setRecentAvatars(onlyShowcase);
      setIsLoading(false);
    });
  };

  function showTop() {
    const tempArr = [...avatars];
    tempArr.sort((item1, item2) => {
      return item2.count - item1.count;
    });
    setAvatars(tempArr);
    setActive("top");
  }
  function showRecent() {
    setAvatars(recentAvatars);
    setActive("recent");
  }
  return isLoading ? (
    <div className="spinner-container">
      <div className="spinner"></div>
    </div>
  ) : (
    <>
      <Navbar />
      <section className="home-hero">
        <div className="row home-row">
          <div className="col-md-3 getting-started-hero">
            <div className="hero-btn-area">
              <a href="/getting_started" className="btn btn-getting btn-home">
                Getting Started
              </a>
            </div>
          </div>
          <div className="col-md-6 middle-hero">
            <div className="reblium-logo-hero">
              <img src={reblogo} alt="reblium-logo" />
            </div>
            <div className="hero-btn-area">
              <a href="/register" className="btn btn-getting btn-home">
                Sign In
              </a>
            </div>
          </div>
          <div className="col-md-3 partners-hero">
            <div className="hero-btn-area">
              <a href="/partners" className="btn btn-getting btn-home">
                Partners
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="community-showcase">
        <h1>Community Showcase</h1>
        <div className="showcase-button-area">
          <button
            className={`btn-showcase ${active === "recent" ? "active" : ""}`}
            onClick={() => showRecent()}
          >
            Recent
          </button>
          <button
            className={`btn-showcase ${active === "top" ? "active" : ""}`}
            onClick={() => showTop()}
          >
            Top
          </button>
        </div>
        <div className="showcase">
          {avatars &&
            avatars.map((item, index) => <Card item={item} index={index} />)}
        </div>
      </section>
      <section className="about-section-main">
        <div className="about-img-area">
          <div className="reblium-logo-about">
            <img src={reblogo} alt="reblium-logo" />
          </div>
          {/*<img src="images/aboutMain.png" alt="reblium-about" />*/}
        </div>
        <div className="about-exp">
          <div className="about-info">
            <h2>About</h2>
            <p className="about-first">
              Born from Reblika StudioReblium is an independent Digital Human
              lab exploring new mediums of thought and expanding the imaginative
              powers of the human species.
            </p>
            <p className="about-second">
              We are a small self-funded team focused on design, human
              interaction, and AI. We have 10 full-time staff and an incredible
              set of advisors.
            </p>
          </div>
          <div className="team-info">
            <h2>Team</h2>
            <div className="team-members">
              <h4>Executives</h4>
              <p className="kebab-brake">-------------</p>
              <ul className="team-list">
                <li>Mao Lin Liao - CEO</li>
                <li>Steve Hashimawari - Head of Operation</li>
                <li>John Prieto - Head of Production</li>
                <li>Adam - Head of Product</li>
                <li>Vincent - Head of Licensing</li>
                <li>Migle - Head of Partnership</li>
                <li>Aurora - Producer</li>
                <li>Sophie - Office Manager</li>
                <li>Shan - Production Assistant Advisor</li>
              </ul>
            </div>
            <div className="team-members">
              <h4>Advisors</h4>
              <p className="kebab-brake">-------------</p>
              <ul className="team-list">
                <li>Simon Kim (CEO CLO3D)</li>
                <li>Nishant Dogra ( CEO TBWAX)</li>
              </ul>
            </div>
            <div className="team-members">
              <h4>Research And Engineering</h4>
              <p className="kebab-brake">-------------</p>
              <ul className="team-list">
                <li>Amir, Nabila, Tan, Chris, Titus</li>
              </ul>
            </div>
            <div className="team-members">
              <h4>Art Team</h4>
              <p className="kebab-brake">-------------</p>
              <ul className="team-list">
                <li>
                  Asli, Nathan,Pata,Lorenzo,Andre, Andrei, Gabriel,
                  Alex,Aleksander,Vicky,Lena,Vitali,Alp B
                </li>
              </ul>
            </div>
            <div className="team-members">
              <h4>Legal And Finance</h4>
              <p className="kebab-brake">-------------</p>
              <ul className="team-list">
                <li>Jeroen</li>
                <li>Allon</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-section-main">
        <div className="contact-img-area">
          <div className="reblium-logo-about">
            <img src={reblogo} alt="reblium-logo" />
          </div>
        </div>
        <div className="contact-exp">
          <div className="contact-info">
            <h2>Contact</h2>
            <p className="contact-first">
              For product support or questions please join our Discord and ask
              questions in our #support chatrooms.
            </p>
            <p className="contact-second">
              For Journalist inquiries: <br />
              <span>press@reblium.com</span>
            </p>
            <p className="contact-third">
              For Commercial inquiries:
              <br />
              <span>commercial@reblium.com</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
