import React, { Component } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

class Resume extends Component {
  render() {
    const data = [
      {
        company: "iamRIVAS",
        title: "Owner, Multimedia Specialist",
        dates: "Jan 2000 - Present · 22 yrs 5 mos",
        location: "Sacramento, CA",
        desc: `
                Freelance artist and programmer for over two decades. Working on
                any medium within the multimedia purview. Helping start-ups get
                off the ground with brand packages and micro-sites. Small
                business has always been a passion of mine being able to
                contribute my creative vision to establish success.Freelance
                artist and programmer for over two decades. Working on any
                medium within the multimedia purview. Helping start-ups get off
                the ground with brand packages and micro-sites. Small business
                has always been a passion of mine being able to contribute my
                creative vision to establish success.…see more`,
      },
      {
        company: "CraneMorley, Inc.",
        title: "Sr Front End Engineer",
        dates: "Nov 2019 - May 2022 · 2 yrs 7 mos",
        location: "Orange County, California, United States",
        desc: `
                Developing primarily single page application (SPA) solutions
                with responsive/adaptive techniques in the latest versions of
                Angular/AngularJS, React, Vue, Svelte/SvelteKit, Bootstrap,
                Material-UI, Electron. Contributing productivity scripts in
                batch, shell, powershell, C#/.net. Engaging in the full process
                from pre-production to delivery. Other misc tasks include
                video/audio editing, motion graphics, photoshop/illustrator,
                writing instructional scripts, developing LMS player engines,
                and building Microsoft 365 Guides for Hololens 2.Developing
                primarily single page application (SPA) solutions with
                responsive/adaptive techniques in the latest versions of
                Angular/AngularJS, React, Vue, Svelte/SvelteKit, Bootstrap,
                Material-UI, Electron. Contributing productivity scripts in
                batch, shell, powershell, C#/.net. Engaging in the full process
                from pre-production to delivery. Other misc tasks include
                video/audio editing, motion graphics, photoshop/illustrator,
                writing instructional scripts, developing LMS player engines,
                and building Microsoft 365 Guides for Hololens 2.`,
      },
      {
        company: "piXvfm, Inc.",
        title: "Full Stack Engineer",
        dates: "Apr 2008 - Nov 2019 · 11 yrs 8 mos",
        location: "Santa Ana, CA",
        desc: `
                Designed and programmed UI/UX of company wide template's for
                online training. In addition to templates, course material
                graphic design, programming, animation, optimization. Built
                mobile native and web apps to support corporate reference
                material. Worked closely with Subject Matter Experts (SME) for
                best practices for UI/UX and web standards. Built and maintained
                production servers for content delivery. Worked closely with
                partnering client IT departments to solve any technical issues.
                Partnered with countless competing vendors to help support
                product delivery.Designed and programmed UI/UX of company wide
                template's for online training. In addition to templates, course
                material graphic design, programming, animation, optimization.
                Built mobile native and web apps to support corporate reference
                material. Worked closely with Subject Matter Experts (SME) for
                best practices for UI/UX and web standards. Built and maintained
                production servers for content delivery. Worked closely with
                partnering client IT departments to solve any technical issues.
                Partnered with countless competing vendors to help support
                product delivery.`,
      },
      {
        company: "Future Solutions, Inc.",
        title: "New Media Developer",
        dates: "Sep 2005 - Mar 2008 · 2 yrs 7 mos",
        location: "Irvine, CA",
        desc: `
                Multimedia production including video, photography, motion
                graphics, animation, 3D modeling, graphic design, flash
                development, web development, and interactive CD.Multimedia
                production including video, photography, motion graphics,
                animation, 3D modeling, graphic design, flash development, web
                development, and interactive CD.`,
      },
      {
        company: "Lucid Fusion",
        title: "Interactive Developer",
        dates: "Jul 2006 - Jul 2007 · 1 yr 1 mo",
        location: "Irvine, CA",
        desc: `
                Interactive marketing assets through web and app deployment.
                Motion graphic presentations using multiple mixed mediums.
                Worked closely with graphic designers and back-end developers to
                produce engaging front-ends.`,
      },
    ];
    return (
      <div className="container bio">
        <div className="row">
          <Col xs={12}>
            <div className="card p-4">
              <h1 className="mb-5">Resume</h1>
              {data.map((_) => (
                <div className="mb-4">
                  <h3>{_.company}</h3>
                  <p>
                    <em>
                      {_.title} - {_.location}
                    </em>
                    <br />
                    <em>{_.dates}</em>
                  </p>
                  <p>{_.desc}</p>
                </div>
              ))}
            </div>
          </Col>
        </div>
      </div>
    );
  }
}

export default Resume;
