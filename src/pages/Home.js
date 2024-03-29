import React from "react";
import "../css/Home.css";
import {
  Row,
  Col,
  Nav,
  Navbar,
  Container,
  Card
} from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {

  return (
    <div className="Home">
      {/* <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
      <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="ml-auto py-4">
              <Nav.Link
                className="my-3 my-md-0"
                style={{
                  color: "white",
                  fontFamily: "Poppins",
                  padding: "0px 25px",
                }}
                href="/"
              >
                Works
              </Nav.Link>
              <Nav.Link
                className="my-3 my-md-0"
                style={{
                  color: "white",
                  fontFamily: "Poppins",
                  padding: "0px 25px",
                }}
                href="/about"
              >
                About
              </Nav.Link>
              <Nav.Link
                className="my-3 my-md-0"
                style={{
                  color: "white",
                  fontFamily: "Poppins",
                  padding: "0px 25px",
                }}
                href="/resume"
              >
                Resume
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="mainpage">
        <Row style={{ padding: "0", margin: "0" }}>
          <Col style={{ padding: "0" }}>
            <div className="frame" style={{ maxWidth: "1400px" }}>
              <div className="HeaderContent" style={{ marginTop: "10%" }}>
                <p
                  style={{
                    fontSize: "180%",
                    fontFamily: "Poppins",
                    marginBottom: "0.75rem",
                    color: "grey",
                  }}
                >
                  {" "}
                  Hello there 👋🏼,{" "}
                </p>
                <h1 style={{ whiteSpace: "inherit", lineHeight: "1.125" }}>
                  {" "}
                  I'm{" "}
                  <a href="/#" target="_blank">
                    Shivam Vora{" "}
                  </a>
                  , a UI/UX designer focused on interaction design as well as
                  the design systems.
                </h1>
                <div className="HeaderContent-description">
                  {" "}
                  Currently studying @ D.J Sanghvi College of Engineering{" "}
                </div>
              </div>
              <a href="#Selectedworks" class="see-more" aria-label="See more">
                {" "}
                <svg width="27" height="15" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M25.86 1.14a.479.479 0 0 0-.679 0l-11.68 11.7L1.818 1.14a.479.479 0 1 0-.678.68l12.02 12.04a.479.479 0 0 0 .678 0L25.86 1.82a.48.48 0 0 0 0-.68z"
                    fill="#FFF"
                    fill-rule="nonzero"
                    stroke="#FFF"
                    stroke-width="2"
                    opacity=".9"
                  />
                </svg>{" "}
              </a>
            </div>
          </Col>
        </Row>
      </div>
      <div>
        <div className="frame" style={{ maxWidth: "1400px" }}>
          <div id="Selectedworks" className="mb-5">
            <p className="txt3">Selected Works</p>
            <div
              style={{
                paddingTop: "2%",
                paddingLeft: "4%",
                paddingRight: "4%",
                textAlign: "center",
              }}
            ></div>
            <Row>
              <Col className="projectCol mx-1 mx-md-0">
                {" "}
                <Card className="shadow p-2 mt-4 bg-white rounded projectCard">
                  <Card.Img
                    style={{ height: "250px" }}
                    variant="top"
                    src="/images/datavisual.png"
                  />
                  <Card.Body>
                    <Card.Title className="cardtitle">Placement Test Portal</Card.Title>
                    <Card.Text className="mt-3">
                      This portal helps the faculty placement coordinators identify and assess students' key skills and expertise, as well as their readiness for placements. 
                    </Card.Text>
                  </Card.Body>
                  <a a href="https://placement-portal-test.netlify.app/">
                    <button className="buttonOfHome">View</button>
                  </a>
                </Card>
              </Col>
              <Col className="projectCol">
                {" "}
                <Card className="shadow p-2 mt-4 bg-white rounded projectCard">
                  <Card.Img
                    variant="top"
                    style={{ height: "250px" }}
                    src="/images/fellowAnalytic.png"
                  />
                   <Card.Body>
                    <Card.Title className="cardtitle">Student Portal</Card.Title>
                    <Card.Text className="mt-3">
                    This profile portal assists the faculty mentors to identify the key skills and expertise of students to write effective LORs for them. 
                    </Card.Text>
                  </Card.Body>
                  <a a href="https://djsce-it-student-portal.netlify.app/">
                    <button className="buttonOfHome">View</button>
                  </a>
                </Card>
              </Col>
              <Col className="projectCol">
                {" "}
                <Card className="shadow p-2 mt-4 bg-white rounded projectCard">
                  <Card.Img
                    variant="top"
                    style={{ height: "250px" }}
                    src="/images/phone.jpg"
                  />
                  <Card.Body>
                    <Card.Title className="cardtitle">The Breakout Hunt</Card.Title>
                    <Card.Text className="mt-3">
                    Redesigned The UI for The Breakout Hunt app which is India's first and only breakout scanner app that helps you scan stocks that are on the verge of breakout </Card.Text>
                  </Card.Body>
                  <a a href="https://play.google.com/store/apps/details?id=www.breakouthunt.thebreakouthunt&hl=en_IN&gl=US">
                    <button className="buttonOfHome">View</button>
                  </a>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
        <div id="contact" style={{ background: "#000" }}>
          <div style={{ paddingBottom: "2%" }} className="frame">
            <p className="txt6">
              Mesmerised by what you see??
              <br /> View my{" "}
              <a
                style={{ color: "#36BC77", textDecoration: "none" }}
                href="/resume"
                target="_blank"
              >
                résumé
              </a>
              , get in touch
            </p>
            <div>
              <nav className="social-links social">
                <a href="https://twitter.com/ShivamVora1" rel="noreferrer" target="_blank">
                  {" "}
                  <svg
                    viewBox="0 0 16 16"
                    fill="#fff"
                    height={30}
                    width={30}
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    strokeLinejoin="round"
                    strokeMiterlimit="1.414"
                  >
                    <path
                      d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.37-1.337.64-2.085.79-.598-.64-1.45-1.04-2.396-1.04-1.812 0-3.282 1.47-3.282 3.28 0 .26.03.51.085.75-2.728-.13-5.147-1.44-6.766-3.42C.83 2.58.67 3.14.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.41-.02-.61-.058.42 1.304 1.63 2.253 3.07 2.28-1.12.88-2.54 1.404-4.07 1.404-.26 0-.52-.015-.78-.045 1.46.93 3.18 1.474 5.04 1.474 6.04 0 9.34-5 9.34-9.33 0-.14 0-.28-.01-.42.64-.46 1.2-1.04 1.64-1.7z"
                      fillRule="nonzero"
                    />
                  </svg>{" "}
                </a>{" "}
                <a href="https://www.instagram.com/_svv_24/" rel="noreferrer" target="_blank">
                  {" "}
                  <svg
                    viewBox="0 0 16 16"
                    fill="#fff"
                    height={30}
                    width={30}
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    strokeLinejoin="round"
                    strokeMiterlimit="1.414"
                  >
                    <path d="M8 0C5.827 0 5.555.01 4.702.048 3.85.088 3.27.222 2.76.42c-.526.204-.973.478-1.417.923-.445.444-.72.89-.923 1.417-.198.51-.333 1.09-.372 1.942C.008 5.555 0 5.827 0 8s.01 2.445.048 3.298c.04.852.174 1.433.372 1.942.204.526.478.973.923 1.417.444.445.89.72 1.417.923.51.198 1.09.333 1.942.372.853.04 1.125.048 3.298.048s2.445-.01 3.298-.048c.852-.04 1.433-.174 1.942-.372.526-.204.973-.478 1.417-.923.445-.444.72-.89.923-1.417.198-.51.333-1.09.372-1.942.04-.853.048-1.125.048-3.298s-.01-2.445-.048-3.298c-.04-.852-.174-1.433-.372-1.942-.204-.526-.478-.973-.923-1.417-.444-.445-.89-.72-1.417-.923-.51-.198-1.09-.333-1.942-.372C10.445.008 10.173 0 8 0zm0 1.44c2.136 0 2.39.01 3.233.048.78.036 1.203.166 1.485.276.374.145.64.318.92.598.28.28.453.546.598.92.11.282.24.705.276 1.485.038.844.047 1.097.047 3.233s-.01 2.39-.05 3.233c-.04.78-.17 1.203-.28 1.485-.15.374-.32.64-.6.92-.28.28-.55.453-.92.598-.28.11-.71.24-1.49.276-.85.038-1.1.047-3.24.047s-2.39-.01-3.24-.05c-.78-.04-1.21-.17-1.49-.28-.38-.15-.64-.32-.92-.6-.28-.28-.46-.55-.6-.92-.11-.28-.24-.71-.28-1.49-.03-.84-.04-1.1-.04-3.23s.01-2.39.04-3.24c.04-.78.17-1.21.28-1.49.14-.38.32-.64.6-.92.28-.28.54-.46.92-.6.28-.11.7-.24 1.48-.28.85-.03 1.1-.04 3.24-.04zm0 2.452c-2.27 0-4.108 1.84-4.108 4.108 0 2.27 1.84 4.108 4.108 4.108 2.27 0 4.108-1.84 4.108-4.108 0-2.27-1.84-4.108-4.108-4.108zm0 6.775c-1.473 0-2.667-1.194-2.667-2.667 0-1.473 1.194-2.667 2.667-2.667 1.473 0 2.667 1.194 2.667 2.667 0 1.473-1.194 2.667-2.667 2.667zm5.23-6.937c0 .53-.43.96-.96.96s-.96-.43-.96-.96.43-.96.96-.96.96.43.96.96z"></path>
                  </svg>{" "}
                </a>{" "}
                <a href="https://www.linkedin.com/in/shivam-vora/" rel="noreferrer" target="_blank">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={30}
                    height={30}
                    viewBox="0 0 30 30"
                  >
                    <g fill="none">
                      <g fill="#FFF">
                        <path d="M0.8 9.6L6.6 9.6 6.6 30 0.8 30 0.8 9.6ZM3.5 7.1L3.5 7.1C1.4 7.1 0 5.5 0 3.5 0 1.5 1.4 0 3.6 0 5.7 0 7.1 1.5 7.1 3.5 7.1 5.5 5.7 7.1 3.5 7.1L3.5 7.1ZM30 30L23.4 30 23.4 19.5C23.4 16.7 22.3 14.8 20.1 14.8 18.3 14.8 17.3 16.1 16.9 17.3 16.7 17.7 16.7 18.4 16.7 19L16.7 30 10.2 30C10.2 30 10.3 11.3 10.2 9.6L16.7 9.6 16.7 12.8C17.1 11.4 19.2 9.4 22.6 9.4 26.7 9.4 30 12.4 30 18.7L30 30 30 30Z" />
                      </g>
                    </g>
                  </svg>{" "}
                </a>{" "}
              </nav>
            </div>
            <a style={{}} href="mailto:vorashivam24@gmail.com">
              <p
                style={{
                  paddingLeft: "5%",
                  fontSize: "80%",
                  letterSpacing: "0.1em",
                  fontFamily: "Poppins",
                  color: "#fff",
                  textDecoration: "underline",
                }}
              >
                vorashivam24@gmail.com
              </p>
            </a>
            <div id="contact" style={{ background: "#000" }}>
              <p
                className="footertxt"
                style={{
                  maxWidth: "600px",
                  paddingTop: "5%",
                  fontFamily: "Poppins",
                }}
              >
                {" "}
                Made with{" "}
                <span style={{ color: "#00ff97" }}>
                  {" "}
                  <span className="semibold">♥</span>
                </span>{" "}
                by Shivam © 2022{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
