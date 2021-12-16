import React from "react";
import { Container } from "react-bootstrap";
import Logo from "../Image/logo.png";
import { IoLogoYoutube, IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoWhatsapp } from "react-icons/io5";

export default function Footer() {
  return (
    <div className="bg-custom py-2">
      <Container>
        <div className="d-flex justify-content-between text-white py-5 my-4">
          <div className="footer footer1 px-2">
            <img src={Logo} width="120px" alt="LOGO" /> <br />
            <span>Get exclusive news, features, and updates from The Shredder Weight Loss Academy.</span>
          </div>
          <div className="footer footer1">
            <p>Need Help?</p>
            <span>Need Center</span> <br />
            <span>Email Support</span> <br />
            <span>Live Chat</span> <br />
            <span>Gift Certificates</span> <br />
            <span>Send Us Feedback</span> <br />
          </div>
          <div className="footer footer1">
            <p>Digital Resources</p>
            <span>Articles</span> <br />
            <span>E-books</span> <br />
          </div>
          <div className="footer footer1">
            <p>Contact With Us</p>
            <span> <IoLogoYoutube /> <IoLogoFacebook /> <IoLogoInstagram /> <IoLogoTwitter /> <IoLogoWhatsapp />  </span> <br />
            <span>Forum</span> <br />
          </div>
          <div className="footer footer1">
            <p>Join Our Newsletter</p>
            <span>Get exclusive news, features, and updates from The Shredder Weight Loss Academy.</span>
          </div>
        </div>
        
      </Container>
      <p className="text-white text-center footer-text">@2022 Programming Hero. All Rights Reserved.</p>
    </div>
  );
}
