import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExperience.scss";

export default class WorkExperience extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2020"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">Bachelor’s degree, Software Engineering.</h3>
            <h4 className="vertical-timeline-element-subtitle">Rochester Institute of Technology</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2019"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">Lockheed Martin Event Planning Application</h3>
            <h4 className="vertical-timeline-element-subtitle">RIT Senior project</h4>
            <p>
              Worked on a team of three other Software Engineering students for our senior project to 
              design and develop a web app to allow employees of Lockheed Martin to create custom drag and 
              drop social events and send invites to other employees. Tools: AngularJS, GrapesJS, GraphQL, 
              Apollo.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2019"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              dave.kinghorn.me created
            </h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2019"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Air Force Research Lab
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Quantum Algorithms Publication
            </h4>
            <h5 className="vertical-timeline-element-subtitle">Rome, NY</h5>
            <p>
                Koch, D., Torrance, A., Kinghorn, D., Patel, S., Wessing, L., & Alsing, P.
                M. (2019). Simulating Quantum Algorithms Using Fidelity and Coherence
                Time as Principle Models for Error. arXiv preprint arXiv:1908.04229
            </p>
            <a href="https://arxiv.org/abs/1908.04229" style={{color: "lightgrey"}}><p>Link</p></a>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2019"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Air Force Research Lab
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Quantum Algorithms Co-op
            </h4>
            <h5 className="vertical-timeline-element-subtitle">Rome, NY</h5>
            <p>
              Worked on a team with six other software developers to produce two
              quantum computer simulators. Responsible for design, development,
              and testing. Noisy Quantum Computer Simulator: Produced a
              simulator to replicate noise and real-world errors in a quantum
              computer to support a published paper. Photonics Simulator:
              Developed a multi part simulator to test experiments for a Quantum
              Photonic Processor. Tools: Python, Qiskit, Pyquil, Cirq
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2018"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">SciAps</h3>
            <h4 className="vertical-timeline-element-subtitle">Co-op</h4>
            <h5 className="vertical-timeline-element-subtitle">Woburn, MA</h5>
            <p>
              Worked on a six-member agile software team to create an Android
              version of a Python desktop application for hardware QA.
              Responsible for design, development (Full Stack), and testing.
              Side project: Taught Java/Android development to team physicist.
              Tools: Android, Java, RxAndroid, Android Studio, Gradle
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2018"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Society of Software Engineers
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Laboratory Operations Committee Head
            </h4>
            <h5 className="vertical-timeline-element-subtitle">
              Rochester Institute of Technology
            </h5>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2017"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Fidelity Investments
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Software Engineering Intern
            </h4>
            <h5 className="vertical-timeline-element-subtitle">Boston, MA</h5>
            <p>
              Developed solutions for the collection of usage metrics from
              associates to automate feedback. Virtual tour: Created virtual
              tour POC for investment centers (with VR support). Sprout: Planed
              through inception phase of a new app to encourage younger
              generations to invest. Tools: Python, DTW distance algorithm, UI
              Mockups
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2015"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Founded Club Café
            </h3>
            <h5 className="vertical-timeline-element-subtitle">
              Rochester Institute of Technology
            </h5>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2015"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Joined the Sailing Club
            </h3>
            <h5 className="vertical-timeline-element-subtitle">
              Rochester Institute of Technology
            </h5>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2015"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Joined the Society of Software Engineers (SSE)
            </h3>
            <h5 className="vertical-timeline-element-subtitle">
              Rochester Institute of Technology
            </h5>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2015"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Fidelity Investments
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              End User Support Technician
            </h4>
            <h5 className="vertical-timeline-element-subtitle">Boston, MA</h5>
            <p>
              Techworks: Assisting manager with Fidelity Premium Support
              Services; troubleshooting; imaging and deploying machines;
              deploying and retrieving equipment; filing hardware requests;
              taking inventory. FCAT: Fidelity Center for Applied Technology
              (FCAT) Executive Briefing Center. Assisted various group members;
              monitored/recorded high-level meetings; recorded and pushed slides
              on Fidelity TV; Built nonstandard Desktops; maintained and updated
              large interactive displays.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2014"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">Eagle Scout</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Boy scouts of America
            </h4>
            <h5 className="vertical-timeline-element-subtitle">
              Lexington, MA
            </h5>
            <p></p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2014"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Skills USA Massachusetts
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Engineering design competition Silver Medal
            </h4>
            <p></p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2013"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Skills USA Massachusetts
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Engineering design competition Bronze Medal
            </h4>
            <p></p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </>
    );
  }
}
