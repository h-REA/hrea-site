import React from "react";
import "./Footer.scss";

// Sponsor logos
// import SponsorLogoHolo from "../../images/sponsor-logo-holo.png";

import SponsorLogoHolo from "../../images/sponsor-logo-holo.png";

export type FooterProps = {};

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer>
      <div className="footer-row first">
        {/* Add sponsor logos with link here*/}
        <h3>Project 🌳 Oak Sponsor</h3>
        <a href="https://holo.host" target="_blank">
          <img
            className="contributor-logo"
            src={SponsorLogoHolo}
            alt="Sponsor Logo Holo Limited"
          />
        </a>
      </div>

      <div className="footer-row second">
        <p>
          hREA is an open source project licensed under an{" "}
          <a href="http://www.apache.org/licenses/LICENSE-2.0" target="_blank">
            Apache 2.0 license
          </a>
          .
        </p>

        {/* Social Links */}
        <div className="social-links-wrapper">
          <a
            className="social-link"
            href="linkto:connor@sprillow.com?bcc=pegah@sprillow.com"
            target="_blank"
          >
            Email
          </a>
          {/* TODO: add discord link */}
          <a
            className="social-link"
            href="https://discord.com/"
            target="_blank"
          >
            Discord
          </a>
          <a
            className="social-link"
            href="https://github.com/h-rea"
            target="_blank"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
