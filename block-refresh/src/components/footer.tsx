import "../css/Footer.css";
import { FaLinkedin, FaFacebookSquare, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <section className="footer">
      <section className="footer-social-media">
        <a href="/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin /> LinkedIn
        </a>
        <a href="/" target="_blank" rel="noopener noreferrer">
          <FaFacebookSquare /> Facebook
        </a>
        <a href="/" target="_blank" rel="noopener noreferrer">
          <FaInstagram /> Instagram
        </a>
      </section>
      <section className="footer-info">
        <section className="footer-info-left">
          <section className="footer-info__name">Block Fresh</section>
          <section className="footer-info__returns">
            All Rights Reserved
            <br /> © 2023 Block Fresh
          </section>
        </section>
        <section className="footer-info-center">
          <section className="footer-info__info">Info</section>
          <section className="footer-info__terms">
            Home
            <br />
            About Us
            <br />
            Contact Us
          </section>
        </section>
        <section className="footer-info-right">
          <section className="footer-info__contribute">Contribute</section>
          <section className="footer-info__contact">
            Membership
            <br />
            Donate
          </section>
        </section>
      </section>
    </section>
  );
};
