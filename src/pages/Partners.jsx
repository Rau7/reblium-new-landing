import part1 from "../images/part1.webp";
import part2 from "../images/part2.webp";
import part3 from "../images/part3.webp";
import part4 from "../images/part4.webp";
import part5 from "../images/part5.webp";
import part6 from "../images/part6.webp";
import part7 from "../images/part7.webp";
import part8 from "../images/part8.webp";
import part9 from "../images/part9.webp";
import part10 from "../images/part10.webp";
import Navbar from "../components/Navbar";
import reblogo from "../images/reblogo.png";
import { useEffect } from "react";

function Partners() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <section className="partners-section">
        <div className="partners-heading">
          <div className="reblium-logo-partners">
            <a href="/">
              <img src={reblogo} alt="reblium-logo" />
            </a>
            <h1>PARTNERS</h1>
          </div>
        </div>
        <div className="partners-gallery">
          <div className="partner-img">
            <img src={part1} alt="reblium-partners" />
          </div>
          <div className="partner-img">
            <img src={part2} alt="reblium-partners" />
          </div>
          <div className="partner-img">
            <img src={part3} alt="reblium-partners" />
          </div>
          <div className="partner-img">
            <img src={part4} alt="reblium-partners" />
          </div>
          <div className="partner-img">
            <img src={part5} alt="reblium-partners" />
          </div>
          <div className="partner-img">
            <img src={part6} alt="reblium-partners" />
          </div>
          <div className="partner-img">
            <img src={part7} alt="reblium-partners" />
          </div>
          <div className="partner-img">
            <img src={part8} alt="reblium-partners" />
          </div>
          <div className="partner-img">
            <img src={part9} alt="reblium-partners" />
          </div>
        </div>
        <div className="last-img">
          <img src={part10} alt="reblium-partners" />
        </div>
      </section>
    </>
  );
}

export default Partners;
