import './timeline.css';
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Timeline() {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <section id="timeline">
            <div className="container">
                <div className="title" data-aos="fade-right" data-aos-offset="100"
                    data-aos-duration="700">
                    TIMELINE
                </div>
                <div className="content">
                    <div className="innerContainer" data-aos="slide-left"
                        data-aos-offset="80">
                        <div className="iconContainer">
                            <div className="icon">
                                <i class="fa-solid fa-code"></i>
                            </div>
                            <div className="timelineBar"></div>
                        </div>
                        <div className="timelineDetail">
                            <div className="subTitle">Started a new journey as a Developer</div>
                            <span className="period">Nov. 2023 - Present</span>
                            <p>Fascinated by the concept of bringing ideas into reality through logical thinking<br/> 
                            and problem solving, I aspired to become a developer. </p>
                        </div>
                    </div>
                    <div className="innerContainer" data-aos="slide-left" data-aos-duration="700"
                        data-aos-easing="ease" data-aos-offset="80">
                        <div className="iconContainer">
                            <div className="icon">
                                <i class="fa-solid fa-graduation-cap"></i>
                            </div>
                            <div className="timelineBar"></div>
                        </div>
                        <div className="timelineDetail">
                            <div className="subTitle">Graduated from University of Waterloo</div>
                            <span className="period">June 2023</span>
                            <p>Graduated with a BA in Economics at the University of Waterloo</p>
                        </div>
                    </div>
                    <div className="innerContainer" data-aos="slide-left" data-aos-duration="800"
                        data-aos-easing="ease" data-aos-offset="80">
                        <div className="iconContainer">
                            <div className="icon">
                                <i class="fa-solid fa-calculator"></i>
                            </div>
                            <div className="timelineBar"></div>
                        </div>
                        <div className="timelineDetail">
                            <div className="subTitle">Awarded 1<span className="smaller">st</span> place in Calculus and Vector <span className="period">(MCV4U)</span></div>
                            <span className="period">June 2014</span>
                            <p>Graduated from St.Benedict C.S.S with the highest MCV4U score amongst the class of 2014,
                             which is when I recognized my strength in logical thinking</p>
                        </div>
                    </div>
                    <div className="innerContainer" data-aos="slide-left" data-aos-duration="900"
                        data-aos-easing="ease" data-aos-offset="80">
                        <div className="iconContainer">
                            <div className="icon">
                                <i class="fa-solid fa-plane-departure"></i>
                            </div>
                            <div className="timelineBar"></div>
                        </div>
                        <div className="timelineDetail">
                            <div className="subTitle">Immigrated to Canada</div>
                            <span className="period">April 2007</span>
                            <p>Was introduced to English for the first time after immigrating to Canada</p>
                        </div>
                    </div>
                    <div className="innerContainer" data-aos="slide-left" data-aos-duration="1000"
                        data-aos-easing="ease" data-aos-offset="20">
                        <div className="iconContainer">
                            <div className="icon">
                                <i class="fa-solid fa-cake-candles"></i>
                            </div>
                            <div className="timelineBar last"></div>
                        </div>
                        <div className="timelineDetail">
                            <div className="subTitle">Born in South Korea</div>
                            <span className="period">Nov. 1995</span>
                            <p>Was always inquisitive and eager to find the answer <br />
                            behind the question, “why,” since childhood</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Timeline;