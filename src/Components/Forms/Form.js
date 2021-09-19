import React from "react";
import Footer from "../Footer/Footer";

import { Container, Row, Col } from "reactstrap";

function Form() {
  return (
    <div className=" signinform ">
      <Container style={{ padding: 5 }}>
        <Row className="row map-content-9" style={{ borderRadius: 20 }}>
          <Col sm="6">
            <div class="form-info">
              <div class="info">
                <h2 className=" text-white">Login</h2>
                <form>
                  <div class="input-group">
                    <span>
                      <i class="fas fa-user" aria-hidden="true"></i>
                    </span>
                    <input
                      type="email"
                      placeholder="Username or Email"
                      required=""
                    />
                  </div>
                  <div class="input-group">
                    <span>
                      <i class="fas fa-key" aria-hidden="true"></i>
                    </span>
                    <input type="Password" placeholder="Password" required="" />
                  </div>
                  <div class="form-row bottom">
                    <div class="form-check">
                      <input
                        type="checkbox"
                        id="remenber"
                        name="remenber"
                        value="remenber"
                      />
                      <label for="remenber"> Remember me?</label>
                    </div>
                    <a href="#url" class="forgot">
                      Forgot password?
                    </a>
                  </div>
                  <button
                    style={{ background: "#272346", color: "#fff" }}
                    class="btn my-btn btn-block"
                    type="submit"
                    onClick={(e) => e.preventDefault()}
                  >
                    Login
                  </button>
                </form>
                <p class="continue">
                  <span>or Login with</span>
                </p>
                <div class="social-login">
                  <a href="#facebook">
                    <div class="facebook">
                      <span class="fab fa-facebook-f" aria-hidden="true"></span>
                    </div>
                  </a>
                  <a href="#twitter">
                    <div class="twitter">
                      <span class="fab fa-twitter" aria-hidden="true"></span>
                    </div>
                  </a>
                  <a href="#google">
                    <div class="google">
                      <span class="fab fa-google" aria-hidden="true"></span>
                    </div>
                  </a>
                  <a href="#google">
                    <div class="git">
                      <span class="fab fa-github" aria-hidden="true"></span>
                    </div>
                  </a>
                </div>
                <p class="account">
                  Don't have an account? <a href="#signup">Sign up</a>
                </p>
              </div>
            </div>
          </Col>
          <Col className="form align-self" sm="6"></Col>
        </Row>

        <Footer />
      </Container>
    </div>
  );
}

export default Form;
