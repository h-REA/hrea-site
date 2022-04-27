import * as React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import HeroVisual from "../components/HeroVisual/HeroVisual";
import Button from "../components/Button/Button";

import { scrollToSection } from "../components/Scroll";

import "../global.scss";

import SEO from "../components/seo";

// Mobile menu images
import MenuBookIcon from "../svgs/book.svg";

// How section images
import BoxIcon from "../svgs/box.svg";
import BookIcon from "../svgs/book-open.svg";
import PantoneIcon from "../svgs/pantone.svg";

// Who section images
import BuildingIcon from "../svgs/building.svg";
import GiftIcon from "../svgs/gift.svg";

// Roadmap section images
import RoadmapVisHorizontal from "../svgs/roadmap-vis-horizontal.svg";
import RoadmapVisVertical from "../svgs/roadmap-vis-vertical.svg";
import FundingGoalProgressVis from "../svgs/funding-goal-progress-vis.svg";
import FundingGoalProgressVisSmall from "../svgs/funding-goal-progress-vis-small.svg";
import { useState } from "react";
import MenuMobile from "../components/MenuMobile/MenuMobile";

// markup
const IndexPage = () => {
  const [openMenuMobile, setOpenMenuMobile] = useState(false);
  return (
    <>
      <SEO title="Scalable & distributed framework for economic network coordination" />
      <Header />
      {/* Mobile menu is only visible on smaller screens */}
      <MenuMobile
        isOpen={openMenuMobile}
        closeMenu={() => setOpenMenuMobile(false)}
      />
      <div className="menu-mobile-icon" onClick={() => setOpenMenuMobile(true)}>
        <MenuBookIcon />
      </div>
      <main>
        {/* Landing page hero */}
        <div className="section hero" id="hero">
          <div className="glow-wrapper">
            <h1>
              Scalable & distributed <br />
              framework for economic <br />
              network coordination
            </h1>

            <p>
              <b>hREA</b> (
              <a
                className="link secondary"
                href="https://www.holochain.org/"
                target="_blank"
              >
                Holochain{" "}
              </a>{" "}
              <a
                className="link primary"
                href="https://en.wikipedia.org/wiki/Resources%2C_Events%2C_Agents"
                target="_blank"
              >
                Resource-Event-Agent
              </a>
              ) enables a transparent and trusted account of events in the value
              chain across and within ecosystems, supporting efficient
              allocation of resources and conflict resolutions.
            </p>

            <div className="buttons-row">
              <Button
                text="Learn more"
                onClick={scrollToSection}
                href="/#how-it-works"
              />
              <a href="https://opencollective.com/hrea" target="_blank">
                <Button
                  text="Become a sponsor"
                  semiTransparent
                  externalLinkIcon
                />
              </a>
            </div>
          </div>
          <HeroVisual />
        </div>

        {/* How it works  */}
        <div className="section how" id="how-it-works">
          <h3 className="caption">How it works</h3>
          <h2>
            Superpowered coordination <br />
            through integration of <br />
            Holochain and REA protocols
          </h2>

          <div className="columns-wrapper one-third">
            <div className="glow-wrapper">
              <BoxIcon />
              <h3>Low-tech-overhead modular economic blocks</h3>
              <p>
                Mix and match the building blocks of hREA’s economic kit into
                something tailored to your needs, and without technical
                overhead.
              </p>
            </div>
            <div className="glow-wrapper">
              <BookIcon />
              <h3>Shared accounting on Distributed Ledger Technology</h3>
              <p>
                Multiple secure network spaces can exist simultaneously,
                enabling you to strike the perfect balance between data privacy
                and data commons. Like the real world, agents are the bridge
                between networks.
              </p>
            </div>
            <div className="glow-wrapper">
              <PantoneIcon />
              <h3>Bring-your-own-user-interface with Valueflows hREA API</h3>
              <p>
                Get an entire backend system out-of-the-box, and rely on
                excellent API documentation for developers on your team to build
                the tailor made user-interfaces that your scenario needs. Some
                users can also use the generic system portal.
              </p>
            </div>
          </div>
        </div>

        {/* Who is hREA for */}
        <div className="section who" id="who-is-hrea-for">
          <h3 className="caption">Who is hREA for</h3>
          <h2>
            hREA enables tracking & tracing <br />
            value chain flows for conventional <br />
            and alternative economies alike
          </h2>

          <div className="columns-wrapper half">
            <div className="glow-wrapper">
              <BuildingIcon />
              <p>
                Organizations and businesses with{" "}
                <b>cross-stakeholder value chains</b> <b />
                (think supply chains, joint ventures, multi-company
                collaboration spaces, or economic networks)
              </p>
            </div>
            <div className="glow-wrapper">
              <GiftIcon />
              <p>
                The parties involved in{" "}
                <b>loosely coupled economic coordination</b> <b />
                (think open source projects, artistic collectives, eco villages,
                DAOs, and more)
              </p>
            </div>
          </div>
        </div>

        {/* Roadmap */}
        <div className="section" id="roadmap">
          <h3 className="caption">Roadmap</h3>
          {/* Past */}
          <div className="roadmap-subsection">
            <h2>What’s been done</h2>
            <h5>October 2018 - April 2022</h5>
            <p>
              <ol>
                <li>
                  Led by{" "}
                  <a
                    className="link primary"
                    href="https://pospi.spadgos.com"
                    target="_blanks"
                  >
                    pospi
                  </a>
                  , hREA project started and was continued through ad hoc
                  development.
                </li>
                <li>
                  Around 70% towards the goal of usability of the API for
                  developers accomplished (to be able to implement applications
                  on top of API)
                </li>
              </ol>
            </p>
          </div>
          {/* Current */}
          <div className="roadmap-subsection">
            <h2>Current phase: first Major Milestone Release (MMR)</h2>
            <h5>May 2022 - August 2022</h5>
            <p>
              <ol>
                <li>
                  Led by{" "}
                  <a
                    className="link primary"
                    href="https://sprillow.com"
                    target="_blank"
                  >
                    Sprillow
                  </a>
                  , our goal is to reach a 100% usable API (v1.0) for hREA.
                </li>
                <li>Basic UI for data visualization of the ledger</li>
              </ol>
            </p>
          </div>
          {/* Future */}
          <div className="roadmap-subsection">
            <h2>Beyond the current MMR</h2>
            <h5>September 2022 onwards</h5>
            <p>
              <ol>
                <li>The first applications on top of hREA are built</li>
                <li>The API is improved based on feedback gathered</li>
                <li>The hREA’s Community of Practice is grown</li>
                <li>Sustainable funding patterns are built</li>
              </ol>
            </p>
          </div>

          {/* Roadmap Visual */}
          <div className="roadmap-visual-wrapper horizontal">
            <RoadmapVisHorizontal />
          </div>
          {/* If mobile screen, show vertical versions */}
          <div className="roadmap-visual-wrapper vertical">
            <RoadmapVisVertical />
          </div>
        </div>

        {/* Fund / become a sponsor */}
        <div className="section fund" id="fund">
          <h3 className="caption">Become a sponsor</h3>
          <h2>
            Help us reach the <br />
            next major milestone <br />
            by becoming a sponsor
          </h2>

          <p>
            Visit{" "}
            <a
              className="link primary"
              href="https://opencollective.com/hrea"
              target="_blank"
            >
              hREA’s Open Collective page
            </a>{" "}
            for making a contribution and to get updates on the progress of the
            project. If you have any questions, send an email to{" "}
            <a
              className="link primary"
              href="linkto:connor@sprillow.com?bcc=pegah@sprillow.com"
            >
              connor@sprillow.com
            </a>
            .
          </p>
          <div className="buttons-row">
            <a href="https://opencollective.com/hrea" target="_blank">
              <Button text="Become a sponsor" externalLinkIcon/>
            </a>
          </div>

          <div className="mmr-progress">
            <h3>Current MMR funding goal progress</h3>
            <h5>May 2022 - August 2022</h5>
            {/* funding goal progress visual */}
            <div className="funding-visual-wrapper large">
              <FundingGoalProgressVis />
            </div>
            <div className="funding-visual-wrapper small">
              <FundingGoalProgressVisSmall />
            </div>
          </div>
        </div>

        {/* Get involved */}
        <div className="section get-involved" id="get-involved">
          <h3 className="caption">Get Involved</h3>
          <h2>
            Join the hREA’s <br />
            community of practice
          </h2>

          <p>
            Does hREA sound like something you need or want to work with?{" "}
            {/* TODO: add Discord link */}
            <a
              className="link primary"
              href="https://discord.com/"
              target="_blank"
            >
              Join the hREA discord
            </a>
            .
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default IndexPage;
