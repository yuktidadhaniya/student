import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Png from './asserts/student-login.png.svg';
import png from './asserts/logo.f2eb6d32.svg';
class Home extends Component {
  render() {
    return (
      <>
        <div id="root">
          <div className="app">
            <div className="home">
              <main className="main-wrapper login-main-wrapper background-student">
                <section className="login-wrapper">
                  <header className="header">
                    <div className="header-flex">
                      <div className="header-cols head-col-left">
                        <span className="logo-wrapper">
                          <a href="https://www.mathfactlab.com/">
                            <img
                              src={png}
                              alt="MathFactLab"
                              class="login-logo"
                            />
                          </a>
                        </span>
                      </div>
                    </div>
                  </header>
                  <div className="login-flex">
                    <div className="login-cols inner-background">
                      <div className="login-vector-wrap">
                        <div className="login-vector">
                          <img src={Png} class="vector-img" alt="" />
                        </div>
                        <div className="login-vector-text">
                          <h4 className="h4 text-white font-normal">
                            Master your math facts with this strategy-based
                            approach.
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="login-cols">
                      <div className="login-cols-inner">
                        <h2 className="login-title">Student Login</h2>
                        <form name="student-login">
                          <div className="form-group">
                            <div className="input-wrap">
                              <label for="classcode" class="input-label">
                                <i
                                  class="icon-code-lock"
                                  aria-hidden="true"
                                  // style="font-size: 22px; opacity: 0.8"
                                ></i>
                                Class Code
                              </label>
                              <input
                                type="text"
                                placeholder="Enter your class code"
                                name="classcode"
                                id="classcode"
                                class="input-field input-error"
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="input-wrap">
                              <label for="username" class="input-label">
                                <i class="icon-user" aria-hidden="true"></i>
                                Username
                              </label>
                              <input
                                type="text"
                                placeholder="Enter your username"
                                class="input-field input-error"
                                name="username"
                                id="username"
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="input-wrap">
                              <label for="password" className="input-label">
                                <i className="icon-lock" aria-hidden="true"></i>
                                Password
                              </label>
                              <input
                                type="password"
                                placeholder="Enter your password"
                                name="password"
                                id="password"
                                class="input-field input-error"
                              />
                              <i
                                className="icon-view show-password-icon"
                                aria-hidden="true"
                              ></i>
                            </div>
                          </div>
                          <div className="form-group pt-10">
                            <button
                              className="btn btn-primary button-full"
                              type="submit"
                            >
                              Login
                            </button>
                          </div>
                          <div className="wrap text-center pt-10">
                            <p className="font-18">
                              Not a student?
                              <Link to={'/contact'} className="link">
                                Teacher / Parent Login
                              </Link>
                            </p>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </section>
              </main>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Home;
