import reblogo from "../images/reblogo.png";
import show1 from "../images/comm1.png";
import show2 from "../images/comm2.png";
import show3 from "../images/comm3.png";
import show4 from "../images/comm4.png";
import show5 from "../images/comm5.png";
import show6 from "../images/comm6.png";
import show7 from "../images/comm7.png";
import show8 from "../images/comm8.png";
import Navbar from "../components/Navbar";
//import Header from "../components/Header";

import { useEffect } from "react";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <section className="home-hero">
        <div className="row">
          <div className="col-3 getting-started-hero">
            <div className="hero-btn-area">
              <a href="/getting_started" className="btn btn-getting">
                Getting Started
              </a>
            </div>
          </div>
          <div className="col-6 middle-hero">
            <div className="reblium-logo-hero">
              <img src={reblogo} alt="reblium-logo" />
            </div>
            <div className="hero-btn-area">
              <a href="/register" className="btn btn-getting">
                Sign In
              </a>
            </div>
          </div>
          <div className="col-3 partners-hero">
            <div className="hero-btn-area">
              <a href="/partners" className="btn btn-getting">
                Partners
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="community-showcase">
        <h1>Community Showcase</h1>
        <div className="showcase">
          <div className="show-card">
            <img src={show1} alt="reblium-community-showcase" />
            <div className="card-info">
              <div className="dot" />
              <span>suzanne</span>
            </div>
          </div>
          <div className="show-card">
            <img src={show2} alt="reblium-community-showcase" />
            <div className="card-info">
              <div className="dot" />
              <span>besson</span>
            </div>
          </div>
          <div className="show-card">
            <img src={show3} alt="reblium-community-showcase" />
            <div className="card-info">
              <div className="dot" />
              <span>regista</span>
            </div>
          </div>
          <div className="show-card">
            <img src={show4} alt="reblium-community-showcase" />
            <div className="card-info">
              <div className="dot" />
              <span>ezalor</span>
            </div>
          </div>
          <div className="show-card">
            <img src={show5} alt="reblium-community-showcase" />
            <div className="card-info">
              <div className="dot" />
              <span>sensei</span>
            </div>
          </div>
          <div className="show-card">
            <img src={show6} alt="reblium-community-showcase" />
            <div className="card-info">
              <div className="dot" />
              <span>bonusOne</span>
            </div>
          </div>
          <div className="show-card">
            <img src={show7} alt="reblium-community-showcase" />
            <div className="card-info">
              <div className="dot" />
              <span>felanor</span>
            </div>
          </div>
          <div className="show-card">
            <img src={show8} alt="reblium-community-showcase" />
            <div className="card-info">
              <div className="dot" />
              <span>mirror</span>
            </div>
          </div>
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
