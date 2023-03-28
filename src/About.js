import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import png from './asserts/logo.f2eb6d32.svg';
import forget from './asserts/password.2a8f9ff6.svg';
class About extends Component {
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
                        <img src={forget} class="vector-img" alt="" />
                      </div>
                      <div className="login-vector-text">
                        <h4 class="h4 text-white font-normal">
                          Effective and straight-forward strategies for math
                          fact mastery.
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="login-cols">
                    <div className="login-cols-inner">
                      <h2 class="login-title">Resend Verification Email</h2>
                      <p class="font-18 text-center login-subtext">
                        No worries. Just enter the email you used to signup, and
                        we’ll send you a verification link to verify.
                      </p>
                      <form name="student-login">
                        <div className="form-group">
                          <div className="input-wrap">
                            <label for="resetemail" class="input-label">
                              <i class="icon-envelope" aria-hidden="true"></i>
                              Email
                            </label>
                            <input
                              placeholder="Enter your email ID"
                              name="resetemail"
                              id="resetemail"
                              class="input-field input-error"
                            />
                          </div>
                        </div>
                        <div className="form-group"></div>
                        <div className="form-group"></div>
                        <div className="form-group pt-10">
                          <button
                            class="btn btn-primary button-full"
                            type="submit"
                          >
                            Send Reset Password Link
                          </button>
                        </div>
                        <div className="wrap text-center pt-10">
                          <p className="font-18">
                            <a class="link" href="/contact">
                              Login instead
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
export default About;
