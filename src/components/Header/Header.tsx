import React from "react";
import "./Header.scss";

import HreaLogo from "../../svgs/hrea-logo.svg";

import { scrollToSection, scrollToHome } from "../Scroll";

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
      <a title="hREA Logo" className="logo" onClick={scrollToHome}>
        <h1>
          <HreaLogo />
        </h1>
      </a>
      <NavLinks />
      {/* Social Links */}
      <div className="social-links-wrapper">
        {/* TODO: add Discord links */}
        <a className="social-link" href="https://discord.com/" target="_blank">
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
    </header>
  );
};

export default Header;
