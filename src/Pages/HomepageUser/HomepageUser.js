import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logoDashboard from "../../Components/IMG/logo.png";
import logoCar from "../../Components/IMG/img_car.png";
import logoFacbook from "../../Components/IMG/icon_facebook.png";
import logoInstagram from "../../Components/IMG/icon_instagram.png";
import logoTwitter from "../../Components/IMG/icon_twitter.png";
import logoMail from "../../Components/IMG/icon_mail.png";
import logoTwicth from "../../Components/IMG/icon_twitch.png";

import "../HomepageUser/HomepageUser.css";

export const HomepageUser = () => {
  return (
    <div className="main-container">
      <div className="container-dashboard01">
        <Navbar>
          <Container>
            <Navbar.Brand>
              <img alt="" src={logoDashboard} className="logoDashboard" />{" "}
            </Navbar.Brand>
            <Nav className="justify-content-end">
              <Nav.Link href="#our-sevices" className="ourServices">
                Our Services
              </Nav.Link>
              <Nav.Link href="#why-us" className="whyUs">
                Why Us
              </Nav.Link>
              <Nav.Link href="#testimonial" className="testMoni">
                Testimonial
              </Nav.Link>
              <Nav.Link href="#faq" className="faQ">
                FAQ
              </Nav.Link>
              <div className="btn-register">
                <p>Register</p>
              </div>
            </Nav>
          </Container>
        </Navbar>

        <div className="container-content">
          <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
          <p>
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
            terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
            untuk sewa mobil selama 24 jam.
          </p>
        </div>

        <div className="container-content-car">
          <img alt="" src={logoCar} className="logoCar" />
        </div>
      </div>

      <div className="Footer-Container01">
        <div className="footer-content101">
          <ul>
            <li>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</li>
            <li>binarcarrental@gmail.com</li>
            <li>081-233-334-808</li>
          </ul>
        </div>

        <div className="footer-content2">
          <ul>
            <li>Our Services</li>
            <li>Why Us</li>
            <li>Testimonial</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div className="footer-content3">
          <p>Connect with us</p>
          <ul>
            <li>
              <img alt="" src={logoFacbook} className="logoFacbook" />
            </li>
            <li>
              <img alt="" src={logoInstagram} className="logoInstagram" />
            </li>
            <li>
              <img alt="" src={logoTwitter} className="logoTwitter" />
            </li>
            <li>
              <img alt="" src={logoMail} className="logoMail" />
            </li>
            <li>
              <img alt="" src={logoTwicth} className="logoTwicth" />
            </li>
          </ul>
        </div>

        <div className="footer-content4">
          <p>Copyright Binar 2022</p>
          <img alt="" src={logoDashboard} className="logoDashboard" />
        </div>
      </div>
    </div>
  );
};
