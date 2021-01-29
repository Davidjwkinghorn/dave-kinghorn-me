import React from "react";
import {
  Card,
  CardColumns,
  CardGroup,
  CardDeck,
  Col,
  Row,
  Container,
} from "react-bootstrap";
import {
  darkgrey,
  grey,
  lightgrey,
  pastelred,
  pastelorange,
  pastelyellow,
  pastelgreen,
  pastelblue,
  pastelpurple,
} from "../styles.scss";
import "./Courses.scss";

class GenericCollapsibleSection extends React.Component {
  constructor(props) {
    super(props);

    this.className = props.className;

    this.headerClass = props.headerClass;

    this.state = {
      open: false,
    };
    if ("state" in props) {
      this.state = props.state;
    }
    this.togglePanel = this.togglePanel.bind(this);
  }

  togglePanel(e) {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <div className={this.className}>
        <div onClick={(e) => this.togglePanel(e)} className={this.headerClass}>
          {this.props.title}
        </div>
        {this.state.open ? (
          <div className="content">{this.props.children}</div>
        ) : null}
      </div>
    );
  }
}

class CourseCard extends React.Component {
  constructor(props) {
    super(props);

    this.title = props.title;

    this.courseData = props.courseData;

    this.colorCode = {
      SWEN: pastelblue,
      CSCI: pastelgreen,
      PHYS: pastelorange,
      MATH: pastelyellow,
      STAT: pastelyellow,
      MGMT: pastelred,
      STSO: pastelgreen,
      ENVS: pastelgreen,
      HIST: pastelyellow,
      PSYC: "lightblue",
      FNRT: "lightblue",
      SOCI: "lightblue",
      COMM: pastelorange,
      UWRT: pastelorange,
      HSPT: pastelyellow,
      WFIT: pastelred,
      WMAR: pastelred,
      WHWS: pastelred,
    };
  }

  render() {
    const key = this.courseData["department"] + "-" + this.courseData["number"];
    var bgColor;
    if (this.courseData["department"] in this.colorCode) {
      bgColor = this.colorCode[this.courseData["department"]];
    } else {
      bgColor = lightgrey;
    }

    return (
      <Card
        className="course-card"
        style={{ backgroundColor: bgColor }}
        key={key}
      >
        <Card.Img variant="top" src={this.courseData["icon"]} />
        <Card.Body style={{ backgroundColor: bgColor }}>
          <Card.Title>{this.courseData["title"]}</Card.Title>
          <GenericCollapsibleSection
            className="read-more"
            title="Read more..."
            headerClass="read-more-header"
          >
            <Card.Subtitle>
              {this.courseData["department"] - this.courseData["number"]}
            </Card.Subtitle>
            <Card.Text>{this.courseData["description"]}</Card.Text>
          </GenericCollapsibleSection>
        </Card.Body>
      </Card>
    );
  }
}

class CourseSection extends React.Component {
  constructor(props) {
    super(props);

    this.title = props.title;
    this.children = props.children;

    this.coursesDBQuery = props.coursesDBQuery;
  }

  render() {
    return (
      <GenericCollapsibleSection
        className="course-section"
        headerClass="section-header"
        state={{ open: true }}
        title={this.title}
        children={this.children}
      >
        <CardColumns>
          {this.coursesDBQuery.map((courseData) => (
            <CourseCard courseData={courseData} />
          ))}
        </CardColumns>
      </GenericCollapsibleSection>
    );
  }
}

export default class Courses extends React.Component {
  constructor(props) {
    super(props);

    // Placeholder for database query. Will move to seperate file soon.
    this.coursesDBQuery = [
      {
        title: "Senior Project II",
        department: "SWEN",
        number: "562",
        icon: "",
        description: "",
        category: "Core Classes",
      },
      {
        title: "Senior Project I",
        department: "SWEN",
        number: "561",
        icon: "",
        description: "",
        category: "Core Classes",
      },
      {
        title: "Air Force Research Lab Co-op",
        department: "January-August",
        number: "2019",
        icon: "",
        description: "January-August 2019",
        category: "Core Classes",
      },
      {
        title: "SciAps Co-op",
        department: "May-August",
        number: "2018",
        icon: "",
        description: "May-August 2018",
        category: "Core Classes",
      },
      {
        title: "Software Performance Engineering",
        department: "SWEN",
        number: "549",
        icon: "",
        description: "",
        category: "Elective",
      },
      {
        title: "Human Centered Requirements and Design",
        department: "SWEN",
        number: "444",
        icon: "",
        description: "",
        category: "Core Classes",
      },
      {
        title: "Software System Requirements and Architecture",
        department: "SWEN",
        number: "440",
        icon: "",
        description: "",
        category: "Core Classes",
      },
      {
        title: "Trends in Software Development",
        department: "SWEN",
        number: "356",
        icon: "",
        description: "",
        category: "Core Classes",
      },
      {
        title: "Software Testing",
        department: "SWEN",
        number: "352",
        icon: "",
        description: "",
        category: "Core Classes",
      },
      {
        title: "Software Design for Computing Systems",
        department: "SWEN",
        number: "340",
        icon: "",
        description: "",
        category: "Core Classes",
      },
      {
        title: "Engineering Secure software",
        department: "SWEN",
        number: "331",
        icon: "",
        description: "",
        category: "Core Classes",
      },
      {
        title: "Engineering of Software Subsystems",
        department: "SWEN",
        number: "262",
        icon: "",
        description: "",
        category: "Core Classes",
      },
      {
        title: "Introduction to Software Engineering",
        department: "SWEN",
        number: "261",
        icon: "",
        description: "",
        category: "Core Classes",
      },
      {
        title: "Software Process and Project Management",
        department: "SWEN",
        number: "256",
        icon: "",
        description: "",
        category: "Core Classes",
      },
      {
        title: "Personal Software Engineering",
        department: "SWEN",
        number: "250",
        icon: "",
        description: "",
        category: "Core Classes",
      },
      {
        title: "Mathematical Models of Software",
        department: "SWEN",
        number: "220",
        icon: "",
        description: "",
        category: "Core Classes",
      },
      {
        title: "Software Engineering Freshman Seminar",
        department: "SWEN",
        number: "101",
        icon: "",
        description: "",
        category: "Core Classes",
      },
      {
        title: "Principles of Data Management",
        department: "CSCI",
        number: "320",
        icon: "",
        description: "",
        category: "Foundation Classes",
      },
      {
        title: "Introduction to Computer Science Theory",
        department: "CSCI",
        number: "262",
        icon: "",
        description: "",
        category: "Foundation Classes",
      },
      {
        title: "Computer Science II",
        department: "CSCI",
        number: "142",
        icon: "",
        description: "",
        category: "Foundation Classes",
      },
      {
        title: "Computer Science I",
        department: "CSCI",
        number: "141",
        icon: "",
        description: "",
        category: "Foundation Classes",
      },
      {
        title: "University Physics II",
        department: "PHYS",
        number: "212",
        icon: "",
        description: "",
        category: "Foundation Classes",
      },
      {
        title: "University Physics I",
        department: "PHYS",
        number: "211",
        icon: "",
        description: "",
        category: "Foundation Classes",
      },
      {
        title: "Discrete Mathematics for Computing",
        department: "MATH",
        number: "190",
        icon: "",
        description: "",
        category: "Foundation Classes",
      },
      {
        title: "Calculus II",
        department: "MATH",
        number: "182",
        icon: "",
        description: "",
        category: "Foundation Classes",
      },
      {
        title: "Calculus I",
        department: "MATH",
        number: "181",
        icon: "",
        description: "",
        category: "Foundation Classes",
      },
      {
        title: "Applied Statistics",
        department: "STAT",
        number: "205",
        icon: "",
        description: "",
        category: "Foundation Classes",
      },
      {
        title: "Entrepreneurship",
        department: "MGMT",
        number: "350",
        icon: "",
        description: "",
        category: "Foundation Classes",
      },
      {
        title: "Energy and the Environment",
        department: "STSO",
        number: "330",
        icon: "",
        description: "",
        category: "Immersion (Environmental Studies)",
      },
      {
        title: "Face of the Land",
        department: "STSO",
        number: "321",
        icon: "",
        description: "",
        category: "Immersion (Environmental Studies)",
      },
      {
        title: "Environment and Society",
        department: "STSO",
        number: "220",
        icon: "",
        description: "",
        category: "Immersion (Environmental Studies)",
      },
      {
        title: "Concepts of Environmental Science",
        department: "ENVS",
        number: "101",
        icon: "",
        description: "",
        category: "General Education",
      },
      {
        title: "Introduction to Environmental Studies",
        department: "STSO",
        number: "120",
        icon: "",
        description: "",
        category: "General Education",
      },
      {
        title: "Twentieth Century Europe",
        department: "HIST",
        number: "170",
        icon: "",
        description: "",
        category: "General Education",
      },
      {
        title: "Introduction to Psychology",
        department: "PSYC",
        number: "101",
        icon: "",
        description: "",
        category: "General Education",
      },
      {
        title: "Introduction to Music",
        department: "FNRT",
        number: "",
        icon: "",
        description: "",
        category: "General Education",
      },
      {
        title: "Foundations of Sociology",
        department: "SOCI",
        number: "102",
        icon: "",
        description: "",
        category: "General Education",
      },
      {
        title: "Communication",
        department: "COMM",
        number: "253",
        icon: "",
        description: "",
        category: "General Education",
      },
      {
        title: "First Year Writing Seminar",
        department: "UWRT",
        number: "150",
        icon: "",
        description: "",
        category: "General Education",
      },
      {
        title: "Wine and Food Pairing",
        department: "HSPT",
        number: "165",
        icon: "",
        description: "",
        category: "Interests",
      },
      {
        title: "Wine Connoisseur",
        department: "HSPT",
        number: "163",
        icon: "",
        description: "",
        category: "Interests",
      },
      {
        title: "Wines of the World II",
        department: "HSPT",
        number: "162",
        icon: "",
        description: "",
        category: "Interests",
      },
      {
        title: "Wines of the world I",
        department: "HSPT",
        number: "161",
        icon: "",
        description: "",
        category: "Interests",
      },
      {
        title: "Beers of the World",
        department: "HSPT",
        number: "160",
        icon: "",
        description: "",
        category: "Interests",
      },
      {
        title: "Nerfology",
        department: "WFIT",
        number: "92",
        icon: "",
        description: "",
        category: "Wellness",
      },
      {
        title: "Aikido",
        department: "WMAR",
        number: "56",
        icon: "",
        description: "",
        category: "Wellness",
      },
      {
        title: "Introduction to Massage Therapy",
        department: "WHWS",
        number: "4",
        icon: "",
        description: "",
        category: "Wellness",
      },
    ];

    // TODO Filter courses by category
  }
  render() {
    return (
      <>
        <Col className="main-column">
          <div>
            <CourseSection
              title="Core Courses"
              coursesDBQuery={this.coursesDBQuery.filter(
                (element) => element.category == "Core Classes"
              )}
            />
          </div>
          <div>
            <CourseSection
              title="Foundation Courses"
              coursesDBQuery={this.coursesDBQuery.filter(
                (element) => element.category == "Foundation Classes"
              )}
            />
          </div>
          <div>
            <CourseSection
              title="MISC Courses"
              coursesDBQuery={this.coursesDBQuery.filter(
                (element) =>
                  element.category !== "Core Classes" &&
                  element.category !== "Foundation Classes"
              )}
            />
          </div>
        </Col>
      </>
    );
  }
}
