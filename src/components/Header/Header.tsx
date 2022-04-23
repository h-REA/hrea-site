import React from "react";
import "./Header.scss";

// import scrollToSection from "./scroll-help"

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
          {/*  <a href={item[0]} onClick={scrollToSection}>
              {item[1]} */}
          <a href={item[0]}>{item[1]}</a>
        </li>
      ))}
    </nav>
  );
};

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <header>
      <div>Logo</div>
      <NavLinks />
      {/* Social Links */}
      <div className="social-links-wrapper">
        <a className="social-link">Discord</a>
        <a className="social-link">GitHub</a>
      </div>
    </header>
  );
};

export default Header;
