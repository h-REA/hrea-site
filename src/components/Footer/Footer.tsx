import React from "react";
import "./Footer.scss";

// Sponsor logos
import SponsorLogoHolo from "../../images/sponsor-logo-holo.png";
import { useContent } from "../../hooks/useContent";

export type FooterProps = {};

const Footer: React.FC<FooterProps> = ({}) => {
  const content = useContent();

  return (
    <footer>
      <div className="footer-row first">
        {/* Oak Sponsors */}
        <div className="contributors-wrapper">
          <h3>{content.footer.sponsors.oak.title}</h3>
          {content.footer.sponsors.oak.items.map((sponsor, index) => (
            <div key={index}>
              {sponsor.logo ? (
                <a href={sponsor.url || "#"} target="_blank">
                  <img
                    className="contributor-logo"
                    src={SponsorLogoHolo}
                    alt={`Oak Sponsor Logo ${sponsor.name}`}
                  />
                </a>
              ) : (
                <a
                  className="link primary contributor-name"
                  href={sponsor.url || "#"}
                  target="_blank"
                >
                  {sponsor.name}
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Sapling Sponsors */}
        <div className="contributors-wrapper">
          <h3>{content.footer.sponsors.sapling.title}</h3>
          {content.footer.sponsors.sapling.items.map((sponsor, index) => (
            <a
              key={index}
              className="link primary contributor-name"
              href={sponsor.url || "#"}
              target="_blank"
            >
              {sponsor.name}
            </a>
          ))}
        </div>
      </div>

      <div className="footer-row second">
        <p>
          {content.footer.legal.text.split('Apache 2.0 license')[0]}
          <a href={content.footer.legal.license_url} target="_blank">
            Apache 2.0 license
          </a>
          .
        </p>

        {/* Social Links */}
        <div className="social-links-wrapper">
          {content.footer.social.map((link, index) => (
            <a
              key={index}
              className="social-link"
              href={link.url}
              target="_blank"
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>

      <div className="footer-row third">
        <p>
          <a href={content.footer.credits.design.url} target="_blank">
            {content.footer.credits.design.text}
          </a>
          .{" "}
          <a href={content.footer.credits.logo.url} target="_blank">
            {content.footer.credits.logo.text}
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
