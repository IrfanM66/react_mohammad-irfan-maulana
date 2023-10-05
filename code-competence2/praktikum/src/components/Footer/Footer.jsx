import React from "react";
import "./Footer.css";
import image1 from "../../assets/images/logo-instagram.svg";
import image2 from "../../assets/images/logo-tiktok.svg";
import image3 from "../../assets/images/logo-github.svg";
import image4 from "../../assets/images/logo-twitter.svg";

const Footer = () => {
  return (
    <footer>
      <h2 className="footer_title">Mohammad Irfan Maulana</h2>
      <p className="footer_info">Jl. Sriwijaya 5, Jember</p>
      <p className="footer_info">+62 8123 1909 825</p>
      <div className="footer_navigation">
        <a className="footer_link" href="">
          Home
        </a>
        <a className="footer_link" href="">
          About
        </a>
        <a className="footer_link" href="">
          Services
        </a>
        <a className="footer_link" href="">
          Blog
        </a>
        <a className="footer_link" href="">
          Contact
        </a>
      </div>
      <div className="footer_social_container">
        <div className="footer_social">
          <a className="logo-instagram" href="intagram.com">
            <img src={image1} width={30} height={30} />
          </a>
        </div>
        <div className="footer_social">
          <a className="logo-tiktok" href="tiktok.com">
            <img src={image2} width={30} height={30} />
          </a>
        </div>
        <div className="footer_social">
          <a className="logo-github" href="github.com" >
          <img src={image3} width={30} height={30} />
        </a>
        </div>
        <div className="footer_social">
          <a className="logo-twitter" href="twitter.com" >
          <img src={image4} width={30} height={30} />
        </a>
        </div>
      </div>
      <p className="footer_copyright">
        © 2023 All rigths reserved <span className="clr-accent">Irfan M.</span>
      </p>
    </footer>
  );
};

export default Footer;
