import './project.css';
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import iphone from '../assets/newiphone.png';
import weather from '../assets/weatherframe.png';
import calc from '../assets/calc.png';
import youtube from '../assets/youtube.png';
import danweb from '../assets/danweb.png';
import drum from '../assets/drum.png';
import faithbook from '../assets/faithbook.png';

function Project() {

    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <section id="project">
            <div className="title" data-aos="fade-left" data-aos-offset="100"
                data-aos-duration="700">
                PROJECTS
            </div>
            <div className="project-grids">
                <div className="grid" data-aos="fade-up" data-aos-delay="100"
                    data-aos-duration="700">
                    <div className="hideTop">iPhone Clone
                        <p className="hideSmall">A clone project of iPhone on web, using various frontend technologies</p>
                        <p style={{ fontSize: "13px", color: "skyblue" }}>React JS / Vite JS / CSS3</p>
                    </div>
                    <img className="imgmobile" src={iphone} />
                    <div className="hideBot">
                        <a target="_blank" href="https://escapeuw.github.io/iphone-clone/" className="demo"><div>LEARN MORE</div></a>
                    </div>
                </div>
                <div className="grid" data-aos="fade-up" data-aos-delay="50"
                    data-aos-duration="550" data-aos-offset="80">
                    <div className="hideTop">Faithbook
                        <p className="hideSmall">
                            A full-stack social networking web app designed for Christians to connect, share, and engage
                        </p>
                        <p style={{ fontSize: "13px", color: "skyblue" }}>React JS / Node.js with Express / PostgreSQL </p>
                    </div>
                    <img className="imgmobile" src={faithbook} />
                    <div className="hideBot">
                        <a target="_blank" href="https://faithbook.site/" className="demo">
                            <div>LEARN MORE</div>
                        </a>
                    </div>
                </div>
                <div className="grid" data-aos="fade-up" data-aos-delay="500"
                    data-aos-duration="550">
                    <div className="hideTop">Youtube App
                        <p className="hideSmall">Utilized YouTube Data API to fetch, store and handle
                            real-time data using various React Hooks</p>
                        <p style={{ fontSize: "13px", color: "skyblue" }}>React JS / Vite JS / CSS3</p>
                    </div>
                    <img className="imgmobile" src={youtube} />
                    <div className="hideBot"><div>LEARN MORE</div></div>
                </div>
                <div className="grid" data-aos="fade-up" data-aos-delay="300"
                    data-aos-duration="600">
                    <div className="hideTop">Weather App
                        <p className="hideSmall">Utilized WeatherAPI from RapidAPI to fetch<br />and
                            display real-time worldwide weather info </p>
                        <p style={{ fontSize: "13px", color: "skyblue" }}>React JS / Vite JS / CSS3</p>
                    </div>
                    <img className="imgmobile" src={weather} />
                    <div className="hideBot">
                        <a target="_blank" href="https://escapeuw.github.io/my-weather/" className="demo"><div>LEARN MORE</div></a>
                    </div>
                </div>
                <div className="grid" data-aos="fade-up" data-aos-delay="100"
                    data-aos-duration="550" data-aos-offset="80">
                    <div className="hideTop">Portfolio
                        <p className="hideSmall">
                        Personal portfolio showcases my projects and skills as a full-stack developer
                        </p>
                    </div>
                    <img className="imgzoom" style={{ objectPosition: "top" }} src={danweb} />
                    <div className="hideBot">
                        <a target="_blank" href="https://dhwang.dev/" className="demo">
                            <div>LEARN MORE</div>
                        </a>
                    </div>
                </div>
                <div className="grid" data-aos="fade-up" data-aos-delay="150"
                    data-aos-duration="550" data-aos-offset="80">
                    <div className="hideTop">Drum Machine
                        <p className="hideSmall">Implementation of simple drum machine. <br />
                            Utilized Audio( ) constructor</p>
                        <p style={{ fontSize: "13px", color: "skyblue" }}>JavaScript / SCSS</p>
                    </div>
                    <img className="imgzoom" style={{ objectPosition: "top left" }} src={drum} />
                    <div className="hideBot"><div>LEARN MORE</div></div>
                </div>
            </div>
        </section>
    )
}


export default Project;
