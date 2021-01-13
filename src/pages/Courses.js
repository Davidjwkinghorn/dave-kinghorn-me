import React from 'react';
import './Courses.scss';


class CollapsibleSection extends React.Component {

    constructor (props) {
        super(props);

        this.courses = {"courses": [
            {
                "courseTitle": "Senior Project II",
                "courseNumber": "SWEN-562",
                "courseDescription": ""
            },{
                "courseTitle": "Senior Project I",
                "courseNumber": "SWEN-561",
                "courseDescription": ""
            },{
                "courseTitle": "",
                "courseNumber": "",
                "courseDescription": ""
            },{
                "courseTitle": "",
                "courseNumber": "",
                "courseDescription": ""
            },{
                "courseTitle": "",
                "courseNumber": "",
                "courseDescription": ""
            },{
                "courseTitle": "",
                "courseNumber": "",
                "courseDescription": ""
            },{
                "courseTitle": "",
                "courseNumber": "",
                "courseDescription": ""
            },
        ]}

        this.state = {
            open:false
        }
        this.togglePanel = this.togglePanel.bind(this);
    }

    togglePanel(e) {
        this.setState({open: !this.state.open})
    }

    render() {
        return (
        <div>
            <div onClick={(e)=>this.togglePanel(e)} className='header'>
                Text
                {this.props.title}
            </div>
            {this.state.open? (
                <div className='content'>
                    More
                    {this.props.children}
                </div>
            ):null}
        </div>);
    }
}

export default class Courses extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <CollapsibleSection/>
            </>
        );
    }
}