import './about.css';
import TypeIt from "typeit-react";
import htmlIcon from "/Users/danie/Documents/github/danweb/src/assets/html.png";
import css3Icon from "/Users/danie/Documents/github/danweb/src/assets/css3.png";
import jsIcon from "/Users/danie/Documents/github/danweb/src/assets/js.png";
import tsIcon from "/Users/danie/Documents/github/danweb/src/assets/ts.png";
import reactIcon from "/Users/danie/Documents/github/danweb/src/assets/react.png";
import cIcon from "/Users/danie/Documents/github/danweb/src/assets/c.png";
import jsonIcon from "/Users/danie/Documents/github/danweb/src/assets/json.png";
import jqueryIcon from "/Users/danie/Documents/github/danweb/src/assets/jquery.png";
import rIcon from "/Users/danie/Documents/github/danweb/src/assets/r.png";
import reduxIcon from "/Users/danie/Documents/github/danweb/src/assets/redux.png";
import bsIcon from "/Users/danie/Documents/github/danweb/src/assets/bootstrap.png";
import sassIcon from "/Users/danie/Documents/github/danweb/src/assets/sass.png";
import python2Icon from "/Users/danie/Documents/github/danweb/src/assets/python2.png";

function About() {
    return (
        <section id="about">
            <div className="aboutContainer">
            <div className="typeContainer">
                <div className="typeIt">
                    <TypeIt style={{ fontSize: "35px" }}
                        options={{
                            strings: ["Hello, my name is <a>Daniel</a>.<br/> I'm a junior Front End Developer."],
                            speed: 100,
                            loop: true,
                            loopDelay: [1000, 4000],
                            waitUntilVisible: true,
                            lifeLike: true
                        }} />
                </div>
                <div className="profile">
                    <div>A <span className="underline">creative</span> developer with exceptional experience
                        in <span className="underline">frontend</span> development. I'm also very interested and passionate about learning backend architectures.</div>
                    <div>Turning <span className="underline">ideas</span> into real life <span className="underline">products</span> is my calling.</div>
                </div>
            </div>
            <div className="resumeContainer">
                <p className="resume">View Resume</p>
            </div>
        
            <div className="dock">
                <div className="dockIcon"><div className="iconContainer"><div className="iconName">Html</div><img src={htmlIcon} /></div></div>
                <div className="dockIcon"><div className="iconContainer"><div className="iconName" style={{left:"10px"}}>CSS</div><img src={css3Icon} /></div></div>
                <div className="dockIcon"><div className="iconContainer"><div className="iconName">SASS</div><img src={sassIcon} /></div></div>
                <div className="dockIcon"><div className="iconContainer"><div className="iconName" style={{left:"-8px"}}>BOOTSTRAP</div><img src={bsIcon} /></div></div>
                <div className="dockIcon"><div className="iconContainer"><div className="iconName" style={{left:"0"}}>PYTHON</div><img src={python2Icon} /></div></div>
                <div className="dockIcon"><div className="iconContainer"><div className="iconName" style={{left:"-3px"}}>JavaScript</div><img src={jsIcon} /></div></div>
                <div className="dockIcon"><div className="iconContainer"><div className="iconName" style={{left:"-3px"}}>TypeScript</div><img src={tsIcon} /></div></div>
                <div className="dockIcon"><div className="iconContainer"><div className="iconName">React</div><img src={reactIcon} /></div></div>
                <div className="dockIcon"><div className="iconContainer"><div className="iconName" style={{left:"5px"}}>Redux</div><img src={reduxIcon} /></div></div>
                <div className="dockIcon"><div className="iconContainer"><div className="iconName" style={{left:"15px"}}>C</div><img src={cIcon} /></div></div>
                <div className="dockIcon"><div className="iconContainer"><div className="iconName">JSON</div><img src={jsonIcon} /></div></div>
                <div className="dockIcon"><div className="iconContainer"><div className="iconName">jQuery</div><img src={jqueryIcon} /></div></div>
                <div className="dockIcon"><div className="iconContainer"><div className="iconName" style={{left:"15px"}}>R</div><img style={{height:"90%", objectFit:"fill", marginTop:"3px"}} src={rIcon} /></div></div>
            </div>
            </div>
        </section>
    );
}

export default About;
