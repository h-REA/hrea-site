import * as React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "../global.scss";

// markup
const IndexPage = () => {
  return (
    <>
      <Header />
      <main>
        <div className="section">
          <div className="columns-wrapper two-third">
            {/* Landing page hero */}
            <div className="glow-wrapper">
              <h1>
                Scalable & distributed <br />
                framework for economic <br />
                network coordination
              </h1>

              <p>
                <b>hREA</b> (<a className="link secondary">Holochain </a>{" "}
                <a className="link primary">Resource-Event-Agent</a>) enables a
                transparent and trusted account of events in the value chain
                across and within ecosystems, supporting efficient allocation of
                resources and conflict resolutions.
              </p>
            </div>
            <div>visuals</div>
          </div>
        </div>

        {/* How it works  */}
        <div className="section">
          <h3 className="caption">How it works</h3>
          <h2>
            Superpowered coordination <br />
            through integration of <br />
            Holochain and REA protocols
          </h2>

          <div className="columns-wrapper one-third">
            <div className="glow-wrapper">
              <h3>Low-tech-overhead modular economic blocks</h3>
              <p>
                Mix and match the building blocks of hREA’s economic kit into
                something tailored to your needs, and without technical
                overhead.
              </p>
            </div>
            <div className="glow-wrapper">
              <h3>Shared accounting on Distributed Ledger Technology</h3>
              <p>
                Multiple secure network spaces can exist simultaneously,
                enabling you to strike the perfect balance between data privacy
                and data commons. Like the real world, agents are the bridge
                between networks.
              </p>
            </div>
            <div className="glow-wrapper">
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
        <div className="section">
          <h3 className="caption">Who is hREA for</h3>
          <h2>
            hREA enables tracking & tracing <br />
            value chain flows for conventional <br />
            and alternative economies alike
          </h2>

          <div className="columns-wrapper half">
            <div className="glow-wrapper">
              <p>
                Organizations and businesses with{" "}
                <b>cross-stakeholder value chains</b> (think supply chains,
                joint ventures, multi-company collaboration spaces, or economic
                networks)
              </p>
            </div>
            <div className="glow-wrapper">
              <p>
                The parties involved in{" "}
                <b>loosely coupled economic coordination</b> (think open source
                projects, artistic collectives, eco villages, DAOs, and more)
              </p>
            </div>
          </div>
        </div>

        {/* Roadmap */}
        <div className="section">
          <h3 className="caption">Roadmap</h3>
          {/* Past */}
          <h2>What’s been done</h2>
          <h5>October 2018 - April 2022</h5>
          <p>
            <ol>
              <li>
                Led by <a className="link primary">pospi</a> , hREA project
                started and was continued through ad hoc development.
              </li>
              <li>
                Around 70% towards the goal of usability of the API for
                developers accomplished (to be able to implement applications on
                top of API)
              </li>
            </ol>
          </p>
          {/* Current */}
          <h2>Current phase: first Major Milestone Release (MMR)</h2>
          <h5>May 2022 - August 2022</h5>
          <p>
            <ol>
              <li>
                Led by <a className="link primary">Sprillow</a>, our goal is to
                reach a 100% usable API (v1.0) for hREA.
              </li>
              <li>Basic UI for data visualization of the ledger</li>
            </ol>
          </p>

          {/* Future */}
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

        {/* Fund / become a sponsor */}
        <div className="section">
          <h3 className="caption">Become a sponsor</h3>
          <h2>
            Help us reach the <br />
            next major milestone <br />
            by becoming a sponsor
          </h2>

          <p>
            Visit <a className="link primary">hREA’s Open Collective page</a>{" "}
            for making a contribution and to get updates on the progress of the
            project. If you have any questions, email{" "}
            <a
              className="link primary"
              href="linkto:connor@sprillow.com?bcc=pegah@sprillow.com"
            >
              connor@sprillow.com
            </a>
            .
          </p>
          {/* Button here */}
          <h3>Current MMR funding goal progress</h3>
          <h5>May 2022 - August 2022</h5>
          {/* funding goal meter visual here */}
        </div>

        {/* Get involved */}
        <div className="section">
          <h3 className="caption">Get Involved</h3>
          <h2>
            Join the hREA’s <br />
            comminuty of practice
          </h2>

          <p>
            Does hREA sounds like something you need or want to work with?{" "}
            <a className="link primary" href="" target="_blank">
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
