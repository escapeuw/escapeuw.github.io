import './about.css';
import TypeIt from "typeit-react";
import htmlIcon from "../assets/html.png";
import css3Icon from "../assets/css3.png";
import jsIcon from "../assets/js.png";
import tsIcon from "../assets/ts.png";
import reactIcon from "../assets/react.png";
import cIcon from "../assets/c.svg";
import jqueryIcon from "../assets/jquery.png";
import postgreIcon from "../assets/postgre.png";
import reduxIcon from "../assets/redux.png";
import bsIcon from "../assets/bootstrap.png";
import sassIcon from "../assets/sass.png";
import python2Icon from "../assets/python2.png";
import resume from "../assets/resume.pdf";
import nodejs from "../assets/nodejs.svg";
import awsIcon from "../assets/aws.svg"
function About() {
    return (
        <section id="about">
            <div className="aboutContainer">
                <div className="typeContainer">
                    <div className="typeIt">
                        <TypeIt style={{ fontSize: "2.3rem" }}
                            options={{
                                strings: ["Hello, my name is <a>Daniel</a>.<br/> I'm a Full-Stack Developer."],
                                speed: 100,
                                loop: true,
                                loopDelay: [1000, 4000],
                                waitUntilVisible: true,
                                lifeLike: true
                            }} />
                    </div>
                    <div className="profile">
                        <div>I'm passionate about building <span className="underline">intuitive</span> user experiences and <span className="underline">scalable</span> backend systems.
                            I love <span className="underline">leveraging technology</span> to remove friction and create more <span className="underline">efficient</span>,
                            user-friendly solutions.</div>

                        <div>Turning <span className="underline">ideas</span> into real life <span className="underline">products</span> is my calling.</div>
                    </div>
                </div>
                <div className="resumeContainer">
                    <a href={resume} target="blank" style={{ textDecoration: "none" }}><p className="resume">View Resume</p></a>
                </div>

                <div className="dock">
                    <div className="dockIcon">
                        <div className="iconContainer">
                            <div className="iconName">Html</div>
                            <img src={htmlIcon} />
                        </div>
                    </div>
                    <div className="dockIcon"><div className="iconContainer"><div className="iconName" style={{ left: "10px" }}>CSS</div><img src={css3Icon} /></div></div>
                    <div className="dockIcon"><div className="iconContainer"><div className="iconName">SASS</div><img src={sassIcon} /></div></div>
                    <div className="dockIcon"><div className="iconContainer"><div className="iconName" style={{ left: "-8px" }}>Bootstrap</div><img src={bsIcon} /></div></div>
                    <div className="dockIcon"><div className="iconContainer"><div className="iconName" style={{ left: "0" }}>Python</div><img src={python2Icon} /></div></div>
                    <div className="dockIcon"><div className="iconContainer"><div className="iconName" style={{ left: "-3px" }}>JavaScript</div><img src={jsIcon} /></div></div>
                    <div className="dockIcon"><div className="iconContainer"><div className="iconName" style={{ left: "-3px" }}>TypeScript</div><img src={tsIcon} /></div></div>
                    <div className="dockIcon"><div className="iconContainer"><div className="iconName">React</div><img src={reactIcon} /></div></div>
                    <div className="dockIcon"><div className="iconContainer"><div className="iconName" style={{ left: "5px" }}>Redux</div><img src={reduxIcon} /></div></div>
                    <div className="dockIcon"><div className="iconContainer"><div className="iconName" style={{ left: "15px" }}>C</div><img src={cIcon} /></div></div>
                    <div className="dockIcon"><div className="iconContainer"><div className="iconName">Node</div><img src={nodejs} /></div></div>
                    <div className="dockIcon"><div className="iconContainer"><div className="iconName">jQuery</div><img src={jqueryIcon} /></div></div>
                    <div className="dockIcon"><div className="iconContainer"><div className="iconName" style={{ left: "-5px" }}>PostgreSQL</div>
                        <img src={postgreIcon} /></div></div>
                    <div className="dockIcon"><div className="iconContainer"><div className="iconName">AWS</div>
                        <img src={awsIcon} /></div></div>
                </div>
            </div>
        </section>
    );
}

export default About;
