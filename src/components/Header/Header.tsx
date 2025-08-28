import React from "react";
import "./Header.scss";

import HreaLogo from "../../svgs/hrea-logo.svg";

import { scrollToSection, scrollToHome } from "../Scroll";
import LogoDynamic from "../LogoDynamic/LogoDynamic";
import { useContent } from "../../hooks/useContent";

export type HeaderProps = {};

const NavLinks = () => {
  const content = useContent();

  return (
    <nav>
      {content.header.navigation.map((item, index) => (
        <li key={index}>
          <a href={item.href} onClick={scrollToSection}>
            {item.text}
          </a>
        </li>
      ))}
    </nav>
  );
};

const Header: React.FC<HeaderProps> = ({}) => {
  const content = useContent();

  return (
    <header>
      {/* Blurb (Announcment) */}
      <div className="header-blurb">
        {content.header.announcement.text}{" "}
        <a
          className="link secondary"
          target="_blank"
          href={content.header.announcement.links.learn}
        >
          Learn
        </a>
        ,{" "}
        <a
          className="link secondary"
          target="_blank"
          href={content.header.announcement.links.build}
        >
          build
        </a>
        , and{" "}
        <a
          className="link secondary"
          target="_blank"
          href={content.header.announcement.links.share}
        >
          share
        </a>{" "}
        your feedback.
      </div>
      <div className="header-inner-wrapper">
        <a title="hREA Logo" className="logo" onClick={scrollToHome}>
          <h1>
            <div className="hrea-logo-wrapper">
              <LogoDynamic />
            </div>
            {/* <HreaLogo /> */}
          </h1>
        </a>
        <NavLinks />
        {/* Social Links */}
        <div className="social-links-wrapper">
          {content.header.social.map((link, index) => (
            <a
              key={index}
              className="social-link"
              href={link.href}
              target="_blank"
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
