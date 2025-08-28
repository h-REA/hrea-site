import React from "react";
import "./Header.scss";

import HreaLogo from "../../svgs/hrea-logo.svg";

import { scrollToSection, scrollToHome } from "../Scroll";
import LogoDynamic from "../LogoDynamic/LogoDynamic";
import { useContent } from "../../hooks/useContent";
import Announcement from "../Announcement/Announcement";

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

  // Get the current announcement
  const currentAnnouncement = content.header.announcements.enabled && content.header.announcements.current
    ? content.header.announcements.types[content.header.announcements.current]
    : null;

  return (
    <header>
      {/* Flexible Announcement System */}
      {currentAnnouncement && (
        <Announcement
          style={currentAnnouncement.style}
          icon={currentAnnouncement.icon}
          text={currentAnnouncement.text}
          actions={currentAnnouncement.actions}
        />
      )}
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
