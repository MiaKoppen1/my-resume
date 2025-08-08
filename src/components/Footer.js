import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { MailchimpForm } from "./MailChimpForm";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <MailchimpForm />
          </Col>
          <Col xs={12} sm={6} md={3}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col xs={12} sm={6} md={3} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://example.com/social1" target="_blank" rel="noopener noreferrer" aria-label="Social 1"><img src={navIcon1} alt="Social Icon 1" /></a>
              <a href="https://example.com/social2" target="_blank" rel="noopener noreferrer" aria-label="Social 2"><img src={navIcon2} alt="Social Icon 2" /></a>
              <button
                type="button"
                className="social-link"
                aria-label="Social 3"
                style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
                onClick={() => { /* Add functionality here if needed */ }}
              >
                <img src={navIcon3} alt="Social Icon 3" />
              </button>
            </div>
            <p>&copy; {new Date().getFullYear()}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}