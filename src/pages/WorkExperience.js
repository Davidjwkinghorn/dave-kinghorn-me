import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExperience.scss";

class WorkItem extends React.Component {
  constructor(props) {
    super(props);
    this.date = props.date;
    this.title = props.title;
    this.subtitle = props.subtitle;
    this.text = props.text;
    this.link = props.link;
    this.linkText = props.linkText;
  };

  render() {
    return (
    <>
      <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date={this.date}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}>
            <h3 className="vertical-timeline-element-title">{this.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{this.subtitle}</h4>
            <p>{this.text}</p>
            <a href={this.link} style={{color: "lightgrey"}}><p>{this.linkText}</p></a>
      </VerticalTimelineElement>
    </>
    );
  }
}

export default class WorkExperience extends React.Component {
  constructor(props) {
    super(props);

    // Placeholder for database query. Will move to seperate file soon.
    this.workExperienceDBQuery = [
      {
        date: "2020",
        title: "Bachelor’s degree, Software Engineering.",
        subtitle: "Rochester Institute of Technology",
      },{
        date: "2019",
        title: "Lockheed Martin Event Planning Application",
        subtitle: "RIT Senior project",
        text: "Worked on a team of three other Software Engineering students for our senior project to design and develop a web app to allow employees of Lockheed Martin to create custom drag and drop social events and send invites to other employees. \nTools: AngularJS, GrapesJS, GraphQL, Apollo.",
      },{
        date: "2019",
        title: "dave.kinghorn.me",
        subtitle: "This site created",
        text: "Tools: ReactJS, Javascript, SCSS, HTML, Bootstrap. \nIn progress: Site refactor \nUpcoming updates: Move to MERN stack utilizing MongoDB, ExpressJS, React, and Node, Projects page, Technology experience page (languages, IDEs etc), Hobby page, Publications page, Contact me page, and Spotify integration",
      },{
        date: "2019",
        title: "Air Force Research Lab. Rome, NY",
        subtitle: "Quantum Algorithms Publication",
        text: "Koch, D., Torrance, A., Kinghorn, D., Patel, S., Wessing, L., & Alsing, P. M. (2019). Simulating Quantum Algorithms Using Fidelity and Coherence Time as Principle Models for Error. arXiv preprint arXiv:1908.04229",
        link: "https://arxiv.org/abs/1908.04229",
        linkText: "Read article",
      },{
        date: "2019",
        title: "Air Force Research Lab. Rome, NY",
        subtitle: "Quantum Algorithms Co-op",
        text: "Worked on a team with six other software developers to produce two quantum computer simulators. Responsible for design, development, and testing. \nNoisy Quantum Computer Simulator: Produced a simulator to replicate noise and real-world errors in a quantum computer to support a published paper. Photonics Simulator: Developed a multi part simulator to test experiments for a Quantum Photonic Processor. \nTools: Python, Qiskit, Pyquil, Cirq",
      },{
        date: "2018",
        title: "SciAps. Woburn, MA",
        subtitle: "Co-op",
        text: "Worked on a six-member agile software team to create an Android version of a Python desktop application for hardware QA. Responsible for design, development (Full Stack), and testing. Side project: Taught Java/Android development to team physicist. \nTools: Android, Java, RxAndroid, Android Studio, Gradle",
      },{
        date: "2018",
        title: "Society of Software Engineers. Rochester Institute of Technology (RIT)",
        subtitle: "Laboratory Operations Committee Head",
      },{
        date: "2017",
        title: "Fidelity Investments. Boston, MA",
        subtitle: "Software Engineering Intern",
        text: "Developed solutions for the collection of usage metrics from associates to automate feedback. Virtual tour: Created virtual tour POC for investment centers (with VR support). Sprout: Planed through inception phase of a new app to encourage younger generations to invest. \nTools: Python, DTW distance algorithm, UI Mockups.",
      },{
        date: "2015",
        title: "Founded Club Café. Rochester Institute of Technology (RIT)",
      },{
        date: "2015",
        title: "Joined the Sailing Club. Rochester Institute of Technology (RIT)",
      },{
        date: "2015",
        title: "Joined the Society of Software Engineers (SSE). Rochester Institute of Technology (RIT)",
      },{
        date: "2015",
        title: "Fidelity Investments. Boston, MA",
        subtitle: "End User Support Technician",
        text: "Techworks: Assisting manager with Fidelity Premium Support Services; troubleshooting; imaging and deploying machines; deploying and retrieving equipment; filing hardware requests; taking inventory. \nFidelity Center for Applied Technology (FCAT): FCAT Executive Briefing Center. Assisted various group members; monitored/recorded high-level meetings; recorded and pushed slides on Fidelity TV; Built nonstandard Desktops; maintained and updated large interactive displays.",
      },{
        date: "2014",
        title: "Earned Rank of Eagle Scout",
        subtitle: "Boy scouts of America. Troop 160 Lexington, MA",
      },{
        date: "2014",
        title: "Skills USA Massachusetts",
        subtitle: "Engineering design competition Silver Medal",
      },{
        date: "2013",
        title: "Skills USA Massachusetts",
        subtitle: "Engineering design competition Bronze Medal",
      },
    ];
  }

  render() {
    return (
      <>
        <VerticalTimeline>
          {this.workExperienceDBQuery.map((workData) => (
            <WorkItem
              date={workData.date}
              title={workData.title}
              subtitle={workData.subtitle}
              text={workData.text}
              link={workData.link}
              linkText={workData.linkText}
              key={workData["title"] + "-" + workData["date"]}
            />
          ))}
        </VerticalTimeline>
      </>
    );
  }
}
