import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import teacher from './asserts/teacher-login.bdd76c90.svg';
import png from './asserts/logo.f2eb6d32.svg';
class Contact extends Component {
  render() {
    return (
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
                          <img src={png} alt="MathFactLab" class="login-logo" />
                        </a>
                      </span>
                    </div>
                  </div>
                </header>
                <div className="login-flex">
                  <div className="login-cols inner-background">
                    <div className="login-vector-wrap">
                      <div className="login-vector">
                        <img src={teacher} class="vector-img" alt="" />
                      </div>
                      <div className="login-vector-text">
                        <h4 class="h4 text-white font-normal">
                          Help your students master the basic math facts with
                          this strategy-based approach.
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="login-cols">
                    <div className="login-cols-inner">
                      <h2 class="login-title">Teacher Login</h2>
                      <p class="font-18 text-center login-subtext">
                        Parent{' '}
                        <button
                          type="button"
                          role="switch"
                          aria-checked="true"
                          class="ant-switch ant-switch-checked"
                        >
                          <div class="ant-switch-handle"></div>
                          <span class="ant-switch-inner"></span>
                        </button>{' '}
                        Teacher
                      </p>
                      <form name="student-login">
                        <div class="social-group">
                          <ul class="social-login-buttons flex">
                            <li class="social-lb-item flex-grow-1">
                              <a
                                class="btn-icon btn-google with-text"
                                href="https://accounts.google.com/o/oauth2/v2/auth?scope=email%20profile&amp;include_granted_scopes=true&amp;redirect_uri=https://app.mathfactlab.com/teacher/login&amp;client_id=901843871623-39hk1ljpmitveh42g5cb3i4oqmai104h.apps.googleusercontent.com&amp;response_type=code&amp;access_type=offline"
                              >
                                <i
                                  class="icon-color-google"
                                  aria-hidden="true"
                                ></i>
                                Sign in with Google
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div class="text-separator">
                          <span class="txt-sep">or</span>
                        </div>
                        <div className="form-group">
                          <div className="input-wrap">
                            <label for="temail" class="input-label">
                              <i class="icon-envelope" aria-hidden="true"></i>
                              Email
                            </label>
                            <input
                              placeholder="Enter your email ID"
                              name="temail"
                              id="temail"
                              class="input-field input-error"
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
                        <div class="form-group">
                          <p class="font-18 text-center">
                            <a class="link" href="/Login">
                              Don't have an account?
                            </a>
                            <i class="icon-elipse sm-elipse"></i>
                            <a class="link" href="/about">
                              Forgot password?
                            </a>
                          </p>
                        </div>
                        <div className="wrap text-center pt-10">
                          <p className="font-18">
                            Not a student?
                            <Link to={'/'} className="link">
                              student Login
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
    );
  }
}
export default Contact;
