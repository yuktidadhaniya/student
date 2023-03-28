import React, { Component } from 'react';

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
                      <h2 class="login-title">Create Teacher Account</h2>
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

                        <div className="form-group">
                          <div className="input-wrap">
                            <label for="tslname" class="input-label">
                              <i class="icon-user" aria-hidden="true"></i>Last
                              name
                            </label>
                            <input
                              type="text"
                              placeholder="Enter your last name"
                              name="tslname"
                              id="tslname"
                              class="input-field input-error"
                            ></input>
                          </div>
                        </div>

                        <div className="form-group">
                          <div className="input-wrap">
                            <label for="tsname" class="input-label">
                              <i class="icon-user" aria-hidden="true"></i>First
                              name
                            </label>
                            <input
                              type="text"
                              placeholder="Enter your first name"
                              name="tsname"
                              id="tsname"
                              class="input-field input-error"
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="input-wrap">
                            <label for="tsemail" class="input-label">
                              <i class="icon-envelope" aria-hidden="true"></i>
                              Email
                            </label>
                            <input
                              placeholder="Enter your email address"
                              name="tsemail"
                              id="tsemail"
                              class="input-field input-error"
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="input-wrap">
                            <label for="tspassword" class="input-label">
                              <i class="icon-lock" aria-hidden="true"></i>
                              Password
                            </label>
                            <input
                              type="password"
                              placeholder="Enter your password"
                              name="tspassword"
                              id="tspassword"
                              class="input-field input-error"
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="input-wrap">
                            <label for="confirmpassword" class="input-label">
                              <i class="icon-lock" aria-hidden="true"></i>
                              Confirm
                            </label>
                            <input
                              type="password"
                              placeholder="Confirm password"
                              name="confirmpassword"
                              id="confirmpassword"
                              class="input-field input-error"
                            />
                          </div>
                        </div>
                        <div class="form-group">
                          <span class="agreement-text">
                            By signing up I agree to the{' '}
                            <a
                              href="https://www.mathfactlab.com/terms-of-service/"
                              class="link"
                            >
                              Terms and Conditions
                            </a>{' '}
                            and{' '}
                            <a
                              href="https://www.mathfactlab.com/privacy-policy/"
                              class="link"
                            >
                              Privacy Policy.
                            </a>
                          </span>
                        </div>
                        <div class="form-group pt-10">
                          <button
                            class="btn btn-primary button-full"
                            type="submit"
                          >
                            Signup
                          </button>
                        </div>
                        <div class="form-group text-center">
                          <p class="font-18">
                            <a class="link" href="/contact">
                              {' '}
                              Already have an account?
                            </a>
                          </p>
                        </div>
                        <div class="wrap text-center pt-10">
                          <p class="font-18">
                            Not a teacher?
                            <a class="link" href="/">
                              Student login
                            </a>
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
