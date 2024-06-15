import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.webp";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I've developed a strong passion for programming and have acquired
            a solid foundation in several languages. I am fluent in Java, Python, and JavaScript.
              <br />
              <br />My fields of interest include
              <i>
                <b className="purple"> data handling, data analysis, data science, and machine learning. </b>
              </i>
              <br />
              <br />
              I am particularly enthusiastic about &nbsp;
              <i>
                <b className="purple">exploring new Python libraries tailored for data science, 
                  as well as delving into mathematical concepts from linear algebra, probability, and statistics.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I enjoy applying my skills and knowledge to practical projects, 
              combining my expertise in <b className="purple">Data Science</b> and
              <i>
                <b className="purple">
                  {" "}
                  Data Analysis
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
              <img src={myImg} className="img-fluid" alt="avatar" />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/kananarora1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/kanan-arora-82a775288/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/kananarora_7"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
