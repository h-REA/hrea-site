import React from "react";
import "./Footer.scss";

export type FooterProps = {};

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer>
      <div className="footer-row first">
        <h3>Project Oak Sponsor</h3>
        {/* Insert Holo logo here with link */}
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
          <a className="social-link">Email</a>
          <a className="social-link">Discord</a>
          <a className="social-link">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
