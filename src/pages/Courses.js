import React from "react";
import {
  Card,
  CardColumns,
  Col,
} from "react-bootstrap";
import {
  lightgrey,
  pastelred,
  pastelorange,
  pastelyellow,
  pastelgreen,
  pastelblue,
} from "../styles.scss";
import "./Courses.scss";

class GenericCollapsibleSection extends React.Component {
  constructor(props) {
    super(props);

    this.className = props.className;

    this.headerClass = props.headerClass;
    this.contentClass = props.contentClass;

    this.state = {
      open: false,
    };

    if ("state" in props) {
      this.state.open = props.state;
    } else {
      this.state.open = false;
    }

    if ("headerText" in props) {
      this.headerText = {
        true: props.headerText,
        false: props.headerText,
      };
    } else {
      this.headerText = {
        true: props.textOpened,
        false: props.textClosed,
      };
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
          {this.headerText[this.state.open]}
        </div>
        {this.state.open ? (
          <div className={this.contentClass}>{this.props.children}</div>
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

    var courseID =
      this.courseData["department"] + "-" + this.courseData["number"];

    return (
      <Card
        className="course-card"
        style={{ backgroundColor: bgColor }}
        key={key}
      >
        {this.courseData.icon !== "" ? (
          <Card.Img variant="top" src={this.courseData["icon"]} />
        ) : null}
        <Card.Body style={{ backgroundColor: bgColor }}>
          <Card.Title>{this.courseData["title"]}</Card.Title>
          {this.courseData.description !== "" ||
          this.courseData.department !== "" ||
          this.courseData.number !== "" ? (
            <GenericCollapsibleSection
              className="read-more"
              headerClass="read-more-header"
              textOpened="Read less..."
              textClosed="Read more..."
              contentClass="read-more-content"
            >
              <Card.Subtitle>{courseID}</Card.Subtitle>
              <Card.Text>{this.courseData["description"]}</Card.Text>
            </GenericCollapsibleSection>
          ) : null}
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

    this.headerText = props.headerText;

    this.coursesDBQuery = props.coursesDBQuery;
  }

  render() {
    return (
      <GenericCollapsibleSection
        className="course-section"
        headerClass="section-header"
        state={true}
        headerText={this.headerText}
        contentClass="section-content"
        children={this.children}
      >
        <CardColumns>
          {this.coursesDBQuery.map((courseData) => (
            <CourseCard
              courseData={courseData}
              key={courseData["department"] + "-" + courseData["number"]}
            />
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
        description:
          "Part two of a two-course, senior-level, capstone project experience. Students work as part of a team to develop solutions to problems posed by either internal or external customers. Problems may require considerable software development or evolution and maintenance of existing software products. Culminates with the completion and presentation of the project solution at the conclusion of the second term.(Credit 3 for each term).",
        category: "Core Classes",
      },
      {
        title: "Senior Project I",
        department: "SWEN",
        number: "561",
        icon: "",
        description:
          "Part one of a two-course, senior-level, capstone project experience. Students work as part of a team to develop solutions to problems posed by either internal or external customers. Problems may require considerable software development or evolution and maintenance of existing software products. Culminates with the completion and presentation of the project solution at the conclusion of the second term.(Credit 3 for each term).",
        category: "Core Classes",
      },
      {
        title: "Air Force Research Lab Co-op",
        department: "January-August",
        number: "2019",
        icon: "",
        description:
          "Worked on a team with six other software developers to produce two quantum computer simulators. Responsible for design, development, and testing. \nNoisy Quantum Computer Simulator: Produced a simulator to replicate noise and real-world errors in a quantum computer to support a published paper. \nPhotonics Simulator: Developed a multi-part simulator to test experiments for a Quantum Photonic Processor. \nTools: Python, Qiskit, Pyquil, Cirq",
        category: "Core Classes",
      },
      {
        title: "SciAps Co-op",
        department: "May-August",
        number: "2018",
        icon: "",
        description:
          "Worked on a six-member agile software team to create an Android version of a Python desktop application for hardware QA. Responsible for design, development (Full Stack), and testing. Tools: Android, Java, RxAndroid, Android Studio, Gradle",
        category: "Core Classes",
      },
      {
        title: "Software Performance Engineering",
        department: "SWEN",
        number: "549",
        icon: "",
        link: "http://www.se.rit.edu/~swen-549/performance",
        description:
          "The goal of this course is to equip future software engineers with the ability to keep their systems performant during development while balancing many other software engineering trade-offs.",
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
        link: "http://www.se.rit.edu/~swen-444/00/syllabus.html",
        description:
          "This course introduces quantitative models and techniques of human-computer interface analysis, design and evaluation, which are relevant to the Software Engineering approach of software development. Contemporary Human Computer Interaction (HCI) techniques are surveyed, with a focus on when and where they are applicable in the software development process. Students will deliver usable software systems derived from an engineering approach to the application of scientific theory and modeling. Other topics may include: usability evaluation planning, methods of evaluation, data analysis, social and ethical impacts of usability, economic justification, prototyping and tools.",
        category: "Core Classes",
      },
      {
        title: "Trends in Software Development",
        department: "SWEN",
        number: "356",
        icon: "",
        link: "http://www.se.rit.edu/~swen-356/syllabus.html",
        description:
          "This course is an in-depth exploration of agile software development methodologies and techniques. The term “agile” software development was coined in the late 1990’s as an umbrella term for a number of then existing and emerging development methodologies used on projects with short, iterative delivery cycles characterized by rapidly changing or unclear requirements. Popular agile methodologies currently include Extreme Programming (XP), Scrum, and lean software development approaches such as Kanban. The course will contrast agile development methodologies to traditional or plan-driven processes and identify projects and organizations suitable for an agile, plan-driven or hybrid process approach. Students will also work in teams on an end-to-end software project using common agile methods and techniques: user stories, iterative release planning, test driven design, agile modeling, pair programming and refactoring.",
        category: "Core Classes",
      },
      {
        title: "Software Testing",
        department: "SWEN",
        number: "352",
        icon: "",
        link: "http://www.se.rit.edu/~swen-352/syllabus.html",
        description:
          " The purpose of this course is to instruct the students on the importance of software testing, learn industry terminology, exposure to automation tools, and become familiar with quality assurance processes.",
        category: "Core Classes",
      },
      {
        title: "Software Design for Computing Systems",
        department: "SWEN",
        number: "340",
        icon: "",
        link: "http://www.se.rit.edu/~llk/swen-340/syllabus.html",
        description:
          "In order to design and develop high quality products software engineers need to understand the physical components and systems that are an integral part of these products. This understanding is critical in the fulfillment of non-functional requirements such as performance, reliability, and security. This course will provide software engineering students with hardware, computer architecture, and networking domain specific knowledge. Course programming assignments will provide practical experience developing software that interfaces with hardware components and systems.",
        category: "Core Classes",
      },
      {
        title: "Engineering Secure software",
        department: "SWEN",
        number: "331",
        icon: "",
        link: "http://www.se.rit.edu/~swen-331/syllabus/",
        description:
          "This course provides a foundation for building secure software by applying security principles to the software development lifecycle. Topics covered include: security in requirements engineering, secure designs, risk analysis, threat modeling, deploying cryptographic algorithms, defensive coding, penetration testing, fuzzing, static analysis, and security assessment. Students will learn the practical skills for developing and testing for secure software while also learning sound security fundamentals from real-world case studies.",
        category: "Core Classes",
      },
      {
        title: "Engineering of Software Subsystems",
        department: "SWEN",
        number: "262",
        icon: "",
        link: "http://www.se.rit.edu/~swen-262/syllabus.html",
        description:
          "An introduction to the principles of the foundations of contemporary software design. Topics include software subsystem modeling, design patterns, design tradeoffs, and component-based software development, with a focus on application of these concepts to concrete design problems. The relationship between design and related process issues such as testing, estimation, and maintenance are also discussed.",
        category: "Core Classes",
      },
      {
        title: "Introduction to Software Engineering",
        department: "SWEN",
        number: "261",
        icon: "",
        link: "http://www.se.rit.edu/~swen-261/00/syllabus.html",
        description:
          "This course is an introduction to Software Engineering. This course is meant to introduce students to general topics in software engineering, and have students practice that knowledge by working on a term-long team-based project.",
        category: "Core Classes",
      },
      {
        title: "Software Process and Project Management",
        department: "SWEN",
        number: "256",
        icon: "",
        link: "http://www.se.rit.edu/~swen-256/00/syllabus.html",
        description:
          "An introductory course to software process and related software project management issues. Emphasis is on the study, use, evaluation, and improvement of the software development process. Topics include software development methodologies, software project planning and tracking, change control, software quality assurance, risk management, and software process assessment and improvement.",
        category: "Core Classes",
      },
      {
        title: "Personal Software Engineering",
        department: "SWEN",
        number: "250",
        icon: "",
        link: "http://www.se.rit.edu/~swen-250/syllabus.html",
        description:
          "This is a project-based course to enhance individual, technical engineering knowledge and skills as preparation for upper-division team-based coursework. Topics include adapting to new languages, tools and technologies; developing and analyzing models as a prelude to implementation; software construction concepts (proper documentation, implementing to standards, etc.); unit and integration testing; component-level estimation; and software engineering professionalism.",
        category: "Core Classes",
      },
      {
        title: "Mathematical Models of Software",
        department: "SWEN",
        number: "220",
        icon: "",
        link: "",
        description: "",
        category: "Core Classes",
      },
      {
        title: "Software Engineering Freshman Seminar",
        department: "SWEN",
        number: "101",
        icon: "",
        link: "http://www.se.rit.edu/~swen-101/01/syllabus.html",
        description:
          "This seminar will provide Software Engineering students with an overview of the discipline of Software Engineering and opportunities that exist for students. Topics include an overview of departmental resources, fundamental concepts and events, teaming, testing, co-op and full-time employment opportunities. Students will participate in a variety of activities that present an introductory view of the different facets of Software Engineering.",
        category: "Core Classes",
      },
      {
        title: "Principles of Data Management",
        department: "CSCI",
        number: "320",
        icon: "",
        description:
          "This course provides a broad introduction to the principles and practice of modern data manage-ment, with an emphasis on the relational database model.  Topics in relational database systemsinclude  data  modeling;  the  relational  model;  relational  algebra;  Structured  Query  Language(SQL); and data quality, transactions, integrity and security.  Students will also learn approachesto building relational database application programs.  Additional topics include object-orientedand  object-relational  databases;  semi-structured  databases  (such  as  XML);  and  information  re-trieval. A database project is required.",
        category: "Foundation Classes",
      },
      {
        title: "Introduction to Computer Science Theory",
        department: "CSCI",
        number: "262",
        icon: "",
        link: "",
        description: "",
        category: "Foundation Classes",
      },
      {
        title: "Computer Science II",
        department: "CSCI",
        number: "142",
        icon: "",
        link: "https://www.cs.rit.edu/~csci142/syllabus.html",
        description:
          "This course delves into data structure and design with an object-oriented perspective. Topics include tree and graph structures, nested data structures, objects, classes, inheritance, interfaces, object-oriented collection class libraries for abstract data types (e.g. maps) and static vs. dynamic data types. Input and output streams, graphical user interfaces, and exception handling are also covered. \nConcepts of object-oriented design are a large part of the course. Software qualities related to object orientation, namely cohesion, minimal coupling, modifiability, and extensibility, are introduced in this course, as well as some object-oriented design patterns. The course also introduces use of a modern integrated software development environment (IDE).",
        category: "Foundation Classes",
      },
      {
        title: "Computer Science I",
        department: "CSCI",
        number: "141",
        icon: "",
        link: "https://www.cs.rit.edu/~csci141/syllabus.html",
        description:
          "This course serves as an introduction to computational thinking using a problem-centered approach. Specific topics covered include the following: expression of algorithms in a programming language; functional and imperative programming techniques; control structures; problem solving using recursion; basic searching and sorting; elementary data structures such as lists, trees, and graphs; and correctness, testing and debugging. Assignments, both in-class/lab and for homework, require analysis and a code implementation, and are an integral part of the course.",
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
              headerText="Core Courses"
              coursesDBQuery={this.coursesDBQuery.filter(
                (element) => element.category === "Core Classes"
              )}
            />
          </div>
          <div>
            <CourseSection
              headerText="Foundation Courses"
              coursesDBQuery={this.coursesDBQuery.filter(
                (element) => element.category === "Foundation Classes"
              )}
            />
          </div>
          <div>
            <CourseSection
              headerText="MISC Courses"
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
