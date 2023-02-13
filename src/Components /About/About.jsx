import React from "react";
import './About.css'
import video from '../../Asset/kobe-bryant-in-1-minute.mp4'


class About extends React.Component {
    render() {
        return(
            
            <div className="Section_about_container">
                
                <div className="Hero_section_conatiner">
                    <h1 className="Hero_sentence">Make the world better With <br></br> tools and creativity.</h1>
                </div>

                <div className="Hello_section_container">
                    <h2 className="Hello_sentence">Hi my name is Killian Angely !</h2>
                </div>

                <div className="Transition_section_container">
                    <h2 className="Transition_sentence">And I Love...</h2>
                </div>

                <div className="Goal_section_container">                    
                        <h2 className="Goal_sentence">Create tools or platform  with a great interface.</h2>  
                </div>
                    
                <div className="Music_section_container">
                    <h2 className="Hobby_sentence">Sometimes I make Music.</h2>
                </div>    
                    
                <div className="Sports_section_container">

                <video autoPlay loop muted>
                        <source src={video} type="video/mp4" />
                </video>

                    <div className="content">
                        <h2 className="Sports_sentence">And I'm a great sports Fan's</h2>
                    </div>
                </div>
                
                   
                </div>
                
            
        );
    }
    }
    export default About ;