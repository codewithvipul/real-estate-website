import React from 'react'
import "./Extra.css"
import {HiLocationMarker} from "react-icons/hi";

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
                        <span>Find Beautiful properties that suite you the best</span>
                        <span>You will not face any difficulties in finding the best residence</span>
                    </div>
                    <div className="flexCenter search-bar">
                        <HiLocationMarker color="blue" size={25}>
                            <input type="text" />
                            <button className="button">Search</button>
                        </HiLocationMarker>
                    </div>
                </div>

                <div className="flexCenter extra-right">
                    <div className="image-container">
                        <img src="./mainImage.png" alt="main image" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Extra;
