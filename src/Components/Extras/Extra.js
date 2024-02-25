import React from 'react'
import "./Extra.css"
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";

function Extra() {
    return (
        <section className="extra-wrapper">

            <div className="paddings innerWidth flexCenter extra-container">
                <div className="flexColStart extra-left">
                    <div className="extra-title">
                        <div className="blueCircle"></div>
                        <h1>Discover <br /> Most Perfect <br /> Property</h1>
                    </div>
                    <div className="flexColStart extra-des">
                        <span className="secondaryText">Find Beautiful properties that suite you the best</span>
                        <span className="secondaryText">You will not face any difficulties in finding the best residence</span>
                    </div>
                    <div className="flexCenter search-bar">
                        <HiLocationMarker color="blue" size={25}>
                        </HiLocationMarker>
                        <input type="text" />
                        <button className="button">Search</button>
                    </div>
                    <div className="flexCenter stats">
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={8500} end={9000} duration={4} />
                                <span> +</span>
                            </span>
                            <span className="secondaryText">
                                Premium Properties
                            </span>

                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={50} end={90} duration={4} />

                                <span> +</span> </span>
                            <span className="secondaryText">
                                Happy Clients
                            </span>

                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={10} end={25} duration={4} />

                                <span> +</span> </span>
                            <span className="secondaryText">
                                Award Winning
                            </span>

                        </div>
                    </div>
                </div>

                <div className="flexCenter extra-right">
                    <div className="image-container">
                        <img src="./main.jpg" alt="main image" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Extra;
