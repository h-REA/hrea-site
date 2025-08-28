import * as React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import HeroVisual from "../components/HeroVisual/HeroVisual";
import Button from "../components/Button/Button";

import { scrollToSection } from "../components/Scroll";
import { useContent } from "../hooks/useContent";

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
  const content = useContent();
  
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
              {content.hero.tags.map((tag, index) => (
                <div key={index} className="tag-wrapper">{tag}</div>
              ))}
            </div>
            <h1>
              {content.hero.title.line1} <br />
              {content.hero.title.line2} <br />
              {content.hero.title.line3}
            </h1>

            <p>
              <b>{content.hero.description.intro}</b> (
              <a
                className="link secondary"
                href={content.hero.description.holochain_url}
                target="_blank"
              >
                {content.hero.description.holochain_text}{" "}
              </a>{" "}
              <a
                className="link primary"
                href={content.hero.description.rea_url}
                target="_blank"
              >
                {content.hero.description.rea_text}
              </a>
              ) is an implementation of the{" "}
              <a
                className="link primary"
                href={content.hero.description.valueflows_url}
                target="_blank"
              >
                {content.hero.description.valueflows_text}
              </a>{" "}
              {content.hero.description.main_description}
            </p>

            <div className="buttons-row">
              <Button
                text={content.hero.buttons.learn_more.text}
                onClick={scrollToSection}
                href={content.hero.buttons.learn_more.href}
              />
              <a href={content.hero.buttons.sponsor.href} target="_blank">
                <Button
                  text={content.hero.buttons.sponsor.text}
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
          <h3 className="caption">{content.sections.how_it_works.caption}</h3>
          <h2>
            {content.sections.how_it_works.title.line1} <br />
            {content.sections.how_it_works.title.line2} <br />
            {content.sections.how_it_works.title.line3}
          </h2>

          <div className="columns-wrapper one-third">
            <div className="glow-wrapper">
              <BoxIcon />
              <h3>{content.sections.how_it_works.features[0].title}</h3>
              <p>{content.sections.how_it_works.features[0].description}</p>
            </div>
            <div className="glow-wrapper">
              <BookIcon />
              <h3>{content.sections.how_it_works.features[1].title}</h3>
              <p>{content.sections.how_it_works.features[1].description}</p>
            </div>
            <div className="glow-wrapper">
              <PantoneIcon />
              <h3>{content.sections.how_it_works.features[2].title}</h3>
              <p>{content.sections.how_it_works.features[2].description}</p>
            </div>
          </div>
        </div>

        {/* Who is hREA for */}
        <div className="section who" id="who-is-hrea-for">
          <h3 className="caption">{content.sections.who_is_for.caption}</h3>
          <h2>
            {content.sections.who_is_for.title.line1} <br />
            {content.sections.who_is_for.title.line2} <br />
            {content.sections.who_is_for.title.line3}
          </h2>

          <div className="columns-wrapper half">
            <div className="glow-wrapper">
              <BuildingIcon />
              <p>
                Organizations and businesses with{" "}
                <b>{content.sections.who_is_for.audiences[0].highlight}</b> <b />
                {content.sections.who_is_for.audiences[0].description}
              </p>
            </div>
            <div className="glow-wrapper">
              <GiftIcon />
              <p>
                The parties involved in{" "}
                <b>{content.sections.who_is_for.audiences[1].highlight}</b> <b />
                {content.sections.who_is_for.audiences[1].description}
              </p>
            </div>
          </div>
        </div>

        {/* Roadmap */}
        <div className="section" id="roadmap">
          <h3 className="caption">{content.sections.roadmap.caption}</h3>
          {content.sections.roadmap.phases.map((phase, index) => (
            <div key={index} className="roadmap-subsection">
              <h2>{phase.title}</h2>
              <h5>{phase.period}</h5>
              <p>
                <ol>
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      {item.link ? (
                        <>
                          {item.text.split(item.link.text)[0]}
                          <a
                            className="link primary"
                            href={item.link.url}
                            target="_blank"
                          >
                            {item.link.text}
                          </a>
                          {item.text.split(item.link.text)[1]}
                        </>
                      ) : (
                        item.text
                      )}
                    </li>
                  ))}
                </ol>
              </p>
            </div>
          ))}

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
          <h3 className="caption">{content.sections.funding.caption}</h3>
          <h2>
            {content.sections.funding.title.line1}
            <br />
            {content.sections.funding.title.line2}
          </h2>

          <p>
            Visit{" "}
            <a
              className="link primary"
              href={content.sections.funding.links.opencollective}
              target="_blank"
            >
              hREA's Open Collective page
            </a>{" "}
            for making a contribution and to get updates on the progress of the
            project. If you have any questions, send an email to{" "}
            <a className="link primary" href={content.sections.funding.links.email}>
              hello@hrea.io
            </a>
            .
          </p>
          <div className="buttons-row">
            <a href={content.sections.funding.links.opencollective} target="_blank">
              <Button text="Become a sponsor" externalLinkIcon />
            </a>
          </div>

          <div className="mmr-progress">
            <h3>{content.sections.funding.mmr_goal.title}</h3>
            <h5>{content.sections.funding.mmr_goal.period}</h5>
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
          <h3 className="caption">{content.sections.get_involved.caption}</h3>
          <h2>
            {content.sections.get_involved.title.line1} <br />
            {content.sections.get_involved.title.line2}
          </h2>

          <p>
            Does hREA sound like something you need or want to work with?{" "}
            <a
              className="link primary"
              href={content.sections.get_involved.discord_url}
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
