import React from "react";
import "./Header.scss";

import HreaLogo from "../../svgs/hrea-logo.svg";

import { scrollToSection, scrollToHome } from "../Scroll";
import LogoDynamic from "../LogoDynamic/LogoDynamic";

export type HeaderProps = {};

const NavLinks = () => {
  const items = [
    ["/#how-it-works", "How it works"],
    ["/#who-is-hrea-for", "Who is hREA for"],
    ["/#roadmap", "Roadmap"],
    ["/#fund", "Fund"],
    ["/#get-involved", "Get involved"],
  ];

  return (
    <nav>
      {items.map((item, index) => (
        <li key={index}>
          <a href={item[0]} onClick={scrollToSection}>
            {item[1]}
          </a>
          {/* <a href={item[0]}>{item[1]}</a> */}
        </li>
      ))}
    </nav>
  );
};

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <header>
      {/* Blurb (Announcment) */}
      <div className="header-blurb">
        The{" "}
        <a
          className="link secondary"
          target="_blank"
          href="https://github.com/h-REA/hREA/releases/tag/happ-0.1.0-beta"
        >
          “Sapling” 0.3.0-beta release
        </a>{" "}
        is out now! 🌿 What will you create?{" "}
        <a
          className="link secondary"
          target="_blank"
          href="https://docs.hrea.io"
        >
          Learn
        </a>
        ,{" "}
        <a
          className="link secondary"
          target="_blank"
          href="https://github.com/h-REA/hREA/releases/tag/happ-0.1.0-beta"
        >
          build
        </a>
        , and{" "}
        <a
          className="link secondary"
          target="_blank"
          href="https://github.com/h-REA/hrea/issues"
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
          <a
            className="social-link"
            href="https://docs.hrea.io"
            target="_blank"
          >
            Docs
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
    </header>
  );
};

export default Header;
