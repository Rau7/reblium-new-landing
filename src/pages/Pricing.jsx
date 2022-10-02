import Header from "../components/Header";
import { useEffect } from "react";

function Pricing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <section className="pricing-section">
        <div className="pricing-header">
          <h1>Pricing</h1>
        </div>
        <div className="pricing-prices">
          <div className="pricing-info">
            <h2>$10</h2>
            <h4>Standard</h4>
          </div>
          <div className="pricing-info">
            <h2>$20</h2>
            <h4>Pro</h4>
          </div>
        </div>
        <div className="pricing-tables">
          <div className="table-list">
            <div className="pricing-table">
              <div className="pricing-table-left">
                <h4>Avatars</h4>
                <ul>
                  <li>Monthly fee</li>
                  <li>Avatars cloud storage per month</li>
                  <li>Avatars likeness</li>
                  <li>Unique Faces</li>
                  <li>Unique Faces Combo</li>
                  <li>Make Up</li>
                  <li>Tattoo</li>
                  <li>Grooms</li>
                  <li>Beard</li>
                  <li>Mustache</li>
                  <li>Body Type</li>
                </ul>
              </div>
              <div className="pricing-table-right">
                <div className="standart-part">
                  <ul>
                    <li>Basic</li>
                    <li>10</li>
                    <li>per request</li>
                    <li>10</li>
                    <li>100</li>
                    <li>10 presets</li>
                    <li>10 presets</li>
                    <li>25</li>
                    <li>10</li>
                    <li>10</li>
                    <li>3</li>
                  </ul>
                </div>
                <div className="standart-part">
                  <ul>
                    <li>Basic</li>
                    <li>10</li>
                    <li>per request</li>
                    <li>10</li>
                    <li>100</li>
                    <li>10 presets</li>
                    <li>10 presets</li>
                    <li>25</li>
                    <li>10</li>
                    <li>10</li>
                    <li>3</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="pricing-table">
              <div className="pricing-table-left">
                <h4>Wardrobe</h4>
                <ul>
                  <li>Accesories</li>
                  <li>Custom Accessories</li>
                  <li>Customizable outfit</li>
                  <li>Custom Branding</li>
                  <li>Monthly 5 new outfit</li>
                  <li>Custom outfit</li>
                </ul>
              </div>
              <div className="pricing-table-right">
                <div className="standart-part">
                  <ul>
                    <li>20</li>
                    <li>no</li>
                    <li>5</li>
                    <li>no</li>
                    <li>yes</li>
                    <li>no</li>
                  </ul>
                </div>
                <div className="standart-part">
                  <ul>
                    <li>50</li>
                    <li>no</li>
                    <li>20</li>
                    <li>yes</li>
                    <li>yes</li>
                    <li>no</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="pricing-table">
              <div className="pricing-table-left">
                <h4>Animation</h4>
                <ul>
                  <li>Default Idle,Walk,Talk</li>
                  <li>TikTok Pack</li>
                  <li>Fashion Pack</li>
                  <li>Action Pack</li>
                  <li>Motek Stockmoves 4000 Library</li>
                </ul>
              </div>
              <div className="pricing-table-right">
                <div className="standart-part">
                  <ul>
                    <li>yes</li>
                    <li>5</li>
                    <li>5</li>
                    <li>5</li>
                    <li>yes</li>
                  </ul>
                </div>
                <div className="standart-part">
                  <ul>
                    <li>yes</li>
                    <li>10</li>
                    <li>10</li>
                    <li>10</li>
                    <li>yes</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="pricing-table">
              <div className="pricing-table-left">
                <h4>Advance</h4>
                <ul>
                  <li>ARkit</li>
                  <li>Xsens (coming soon)</li>
                  <li>Recording</li>
                  <li>Lipsync</li>
                  <li>Avatar Generator</li>
                  <li>Custom Generator parameters</li>
                </ul>
              </div>
              <div className="pricing-table-right">
                <div className="standart-part">
                  <ul>
                    <li>n/a</li>
                    <li>n/a</li>
                    <li>n/a</li>
                    <li>n/a</li>
                    <li>no</li>
                    <li>no</li>
                  </ul>
                </div>
                <div className="standart-part">
                  <ul>
                    <li>yes</li>
                    <li>yes</li>
                    <li>yes</li>
                    <li>yes</li>
                    <li>yes</li>
                    <li>no</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="pricing-table">
              <div className="pricing-table-left">
                <h4>Sharing</h4>
                <ul>
                  <li>Enter Metaverse</li>
                  <li>Instagram, TikTok, Linkedin</li>
                  <li>Stills / Movies</li>
                </ul>
              </div>
              <div className="pricing-table-right">
                <div className="standart-part">
                  <ul>
                    <li>yes in 2023</li>
                    <li>yes</li>
                    <li>yes</li>
                  </ul>
                </div>
                <div className="standart-part">
                  <ul>
                    <li>yes in 2023</li>
                    <li>yes</li>
                    <li>yes</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="pricing-table">
              <div className="pricing-table-left">
                <h4>Export</h4>
                <ul>
                  <li>UE5</li>
                  <li>USDZ</li>
                  <li>FBX</li>
                  <li>OBJ</li>
                  <li>GLTF</li>
                </ul>
              </div>
              <div className="pricing-table-right">
                <div className="standart-part">
                  <ul>
                    <li>no</li>
                    <li>no</li>
                    <li>no</li>
                    <li>no</li>
                    <li>no</li>
                  </ul>
                </div>
                <div className="standart-part">
                  <ul>
                    <li>yes</li>
                    <li>yes</li>
                    <li>yes</li>
                    <li>yes</li>
                    <li>yes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pricing-sign-in">
          <a href="/register" className="btn btn-getting">
            Sign In
          </a>
        </div>
      </section>
    </>
  );
}

export default Pricing;
