import Header from "../components/Header";
import { useEffect } from "react";

function Register() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <section className="register-main">
        <div className="register-area">
          <h1>Register</h1>
          <div className="register-form">
            <form action="#">
              <div className="row g-3 align-items-center">
                <div className="col-auto">
                  <label
                    htmlFor="name-area"
                    className="col-form-label name-area"
                  >
                    Name
                  </label>
                </div>
                <div className="col-auto">
                  <input
                    type="text"
                    id="name-area"
                    className="form-control"
                    aria-describedby="passwordHelpInline"
                  />
                </div>
              </div>
              <div className="row g-3 align-items-center">
                <div className="col-auto">
                  <label
                    htmlFor="login-area"
                    className="col-form-label login-area"
                  >
                    Login
                  </label>
                </div>
                <div className="col-auto">
                  <input
                    type="text"
                    id="login-area"
                    className="form-control"
                    aria-describedby="passwordHelpInline"
                  />
                </div>
              </div>
              <div className="row g-3 align-items-center">
                <div className="col-auto">
                  <label
                    htmlFor="password-area"
                    className="col-form-label password-area"
                  >
                    Password
                  </label>
                </div>
                <div className="col-auto">
                  <input
                    type="password"
                    id="password-area"
                    className="form-control"
                    aria-describedby="passwordHelpInline"
                  />
                </div>
              </div>
              <div className="row g-3 align-items-center">
                <div className="col-auto">
                  <label
                    htmlFor="email-area"
                    className="col-form-label email-area"
                  >
                    Email
                  </label>
                </div>
                <div className="col-auto">
                  <input
                    type="email"
                    id="email-area"
                    className="form-control"
                    aria-describedby="passwordHelpInline"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
