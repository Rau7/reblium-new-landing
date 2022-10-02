import get1 from "../images/get1.webp";
import get2 from "../images/get2.webp";
import get4 from "../images/get4.webp";
import get5 from "../images/get5.webp";
import get6 from "../images/get6.webp";
import get7 from "../images/get7.webp";
import Header from "../components/Header";

import { useEffect } from "react";

function GettingStarted() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <section className="getting-started-section">
        <div className="getting-started-header">
          <h1>Getting Started</h1>
          <div className="getting-btns">
            <div className="download-btn">
              <a href="#" className="btn btn-getting">
                Download Now
              </a>
            </div>
            <div className="pricing-btn">
              <a href="/pricing" className="btn btn-getting">
                Pricing
              </a>
            </div>
          </div>
        </div>
        <div className="getting-started-content">
          <div className="single-getting-block-right-img">
            <div className="single-getting-info">
              <h3>Gender and Inclusion</h3>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea getodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="single-getting-img">
              <img
                src={get1}
                alt="reblium-getting-started-gender-and-inclusion"
              />
            </div>
          </div>
          <div className="single-getting-block-left-img">
            <div className="single-getting-img">
              <img
                src={get2}
                alt="reblium-getting-started-endless-customization"
              />
            </div>
            <div className="single-getting-info">
              <h3>Endless Customization</h3>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea getodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="single-getting-block-right-img">
            <div className="single-getting-info">
              <h3>Wardrobe System</h3>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea getodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="single-getting-img">
              <img src={get1} alt="reblium-getting-started-wardrobe-system" />
            </div>
          </div>
          <div className="single-getting-block-left-img">
            <div className="single-getting-img">
              <img
                src={get4}
                alt="reblium-getting-started-garment-customization"
              />
            </div>
            <div className="single-getting-info">
              <h3>Garment Customization</h3>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea getodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="single-getting-block-right-img">
            <div className="single-getting-info">
              <h3>Animation Library</h3>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea getodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="single-getting-img">
              <img src={get5} alt="reblium-getting-started-animation-library" />
            </div>
          </div>
          <div className="single-getting-block-left-img">
            <div className="single-getting-img">
              <img
                src={get6}
                alt="reblium-getting-started-endless-customization"
              />
            </div>
            <div className="single-getting-info">
              <h3>ARkit / Vtuber</h3>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea getodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="single-getting-block-right-img">
            <div className="single-getting-info">
              <h3>Export to Unreal</h3>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea getodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="single-getting-img">
              <img src={get7} alt="reblium-getting-started-animation-library" />
            </div>
          </div>
        </div>
        <div className="try-area">
          <div className="download-btn">
            <a href="#" className="btn btn-getting">
              Try The Demo
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default GettingStarted;
