import React from "react";
import { CSSTransition } from "react-transition-group";
import { scrollToSection } from "../Scroll";

import "./MenuMobile.scss";

import HreaLogoMobile from "../../svgs/hrea-logo-mobile.svg";
import BookIcon from "../../svgs/book-open-menu.svg";
import LogoDynamic from "../LogoDynamic/LogoDynamic";

export type MenuMobileProps = {
  isOpen: boolean;
  closeMenu: () => void;
};

const MenuMobile: React.FC<MenuMobileProps> = ({ isOpen, closeMenu }) => {
  const onClickA = (event) => {
    scrollToSection(event);
    closeMenu();
  };
  const scrollToHome = (event) => {
    if (window.location.pathname === "/") {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      closeMenu();
    }
  };
  return (
    <div>
      <div className="menu-mobile-wrapper">
        <CSSTransition
          in={isOpen}
          timeout={200}
          classNames="menu-mobile-animation"
          unmountOnExit
        >
          <div className="menu-mobile-nav-wrapper">
            <div className="menu-mobile-close-button" onClick={closeMenu}>
              <BookIcon className="close-icon" />
            </div>
            <a
              title="hREA Logo"
              className="menu-mobile-logo"
              onClick={scrollToHome}
            >
              <h1>
                {/* <HreaLogoMobile /> */}
                <LogoDynamic />
              </h1>
            </a>

            <div className="menu-mobile-nav-socials">
              <nav className="menu-mobile-nav">
                <li>
                  <a href="/#how-it-works" onClick={onClickA}>
                    How it works
                  </a>
                </li>
                <li>
                  <a href="/#who-is-hrea-for" onClick={onClickA}>
                    Who is hREA for
                  </a>
                </li>
                <li>
                  <a href="/#roadmap" onClick={onClickA}>
                    Roadmap
                  </a>
                </li>
                <li>
                  <a href="/#fund" onClick={onClickA}>
                    Fund
                  </a>
                </li>
                <li>
                  <a href="/#get-involved" onClick={onClickA}>
                    Get involved
                  </a>
                </li>
              </nav>{" "}
              {/* Social Links */}
              <div className="social-links-wrapper mobile">
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
          </div>
        </CSSTransition>
      </div>
    </div>
  );
};

export default MenuMobile;
