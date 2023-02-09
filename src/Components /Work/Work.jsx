import React from "react";
import './Work.css'

class Work extends React.Component{
    render() {
        return(
        <div className="Work_section_container">
            <div className="Header_work">
                <h2>I’m up for new Adventure and I’d like to work with you.</h2>
            </div>
            <div className="Resume_link_container">
                <a  className="Resume_link" href="./src/Resume/Resume.html">Contact me</a>
            </div>          
        </div>
        );
    }
}
export default Work;