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
            {/* Tags */}
            <div className="tags">
              <div className="tag-wrapper">open source</div>
              <div className="tag-wrapper">distributed technology</div>
              <div className="tag-wrapper">accounting</div>
              <div className="tag-wrapper">valueflows ontology</div>
            </div>
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
              ) is an implementation of the{" "}
              <a
                className="link primary"
                href="http://valueflo.ws/"
                target="_blank"
              >
                Valueflows
              </a>{" "}
              specification. It enables a transparent and trusted account of
              resource and information flows between decentralized and
              independent agents, across and within ecosystems.
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
            Holochain and REA grammars
          </h2>

          <div className="columns-wrapper one-third">
            <div className="glow-wrapper">
              <BoxIcon />
              <h3>Simple, composable, and modular economic building blocks</h3>
              <p>
                Mix and match the building blocks of hREA's economic kit into
                something tailored to your needs, minimizing technical overhead.
              </p>
            </div>
            <div className="glow-wrapper">
              <BookIcon />
              <h3>Economic coordination on Distributed Ledger Technology</h3>
              <p>
                Multiple secure network spaces can exist simultaneously and
                scale to any size, enabling you to strike the perfect balance
                between data privacy and data commons. Participant relationships
                form the connections between networks, just like in the real
                world.
              </p>
            </div>
            <div className="glow-wrapper">
              <PantoneIcon />
              <h3>Bring-your-own-user-interface with hREA's Valueflows API</h3>
              <p>
                Get an entire backend system out-of-the-box and leverage
                powerful general-purpose economic planning & accounting tools.
                Build the tailor-made user interfaces that your scenario needs
                with our extensively documented APIs and frontend libraries.
              </p>
            </div>
          </div>
        </div>

        {/* Who is hREA for */}
        <div className="section who" id="who-is-hrea-for">
          <h3 className="caption">Who is hREA for</h3>
          <h2>
            hREA enables tracking & tracing <br />
            value flows for conventional <br />
            and alternative economies alike
          </h2>

          <div className="columns-wrapper half">
            <div className="glow-wrapper">
              <BuildingIcon />
              <p>
                Organizations and businesses with{" "}
                <b>cross-stakeholder value chains</b> <b />
                (think supply chains, joint ventures, multi-company
                collaboration spaces, cooperative and small business economic
                networks, and more)
              </p>
            </div>
            <div className="glow-wrapper">
              <GiftIcon />
              <p>
                The parties involved in{" "}
                <b>loosely coupled economic coordination</b> <b />
                (think open source projects, artistic collectives, eco villages,
                makerspaces, mutual credit & mutual aid networks, open value
                networks, DAOs, and more)
              </p>
            </div>
          </div>
        </div>

        {/* Roadmap */}
        <div className="section" id="roadmap">
          <h3 className="caption">Roadmap</h3>
          {/* Past */}
          <div className="roadmap-subsection">
            <h2>“Seed” & “Sprout” Stage </h2>
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
                  on top of API).
                </li>
              </ol>
            </p>
          </div>
          {/* Current */}
          <div className="roadmap-subsection">
            <h2>First Major Milestone Release (“Sapling”) Developement</h2>
            <h5>May 2022 - September 2022</h5>
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
                  , we reached a fully usable API (v0.1.0-beta) for hREA.
                </li>
                <li>
                  Launched accompanying documentation at{" "}
                  <a
                    className="link primary"
                    href="https://docs.hrea.io"
                    target="_blank"
                  >
                    docs.hrea.io
                  </a>
                  .
                </li>
              </ol>
            </p>
          </div>
          {/* Future */}
          <div className="roadmap-subsection">
            <h2>Post-“Sapling Release” Stage</h2>
            <h5>October 2022 onwards</h5>
            <p>
              <ol>
                <li>The first applications on top of hREA are being built</li>
                <li>Feedback on the API and documentation is being gathered</li>
                <li>The hREA's Community of Practice is being grown</li>
                <li>Sustainable funding patterns are being built</li>
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
            Help us make hREA self-sustaining
            <br />
            by becoming a monthly supporter
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
            <a className="link primary" href="mailto:hello@hrea.io">
              hello@hrea.io
            </a>
            .
          </p>
          <div className="buttons-row">
            <a href="https://opencollective.com/hrea" target="_blank">
              <Button text="Become a sponsor" externalLinkIcon />
            </a>
          </div>

          <div className="mmr-progress">
            <h3>First MMR (“Sapling Release”) funding goal</h3>
            <h5>May 2022 - September 2022</h5>
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
            <a
              className="link primary"
              href="https://discord.gg/um4UsxdFDk"
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
