import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

function Card({ imagen, icon }) {
    const [show, setShown] = useState(false);

    const props3 = useSpring({
        transform: show ? "scale(1.03)" : "scale(1)",
        boxShadow: show
            ? "0 20px 25px rgb(0 0 0 / 25%)"
            : "0 2px 10px rgb(0 0 0 / 8%)"
    });
    return (

        <animated.div
            className="card"
            style={props3}
            onMouseEnter={() => setShown(true)}
            onMouseLeave={() => setShown(false)}
        >
            <img className="profile-img" src={imagen} alt="" />
            <div className="percent">
                <h2>85%</h2>
                <img src={icon} alt="" style={{ width: "55px" }} />
            </div>
            <p>
                <span className="title">Nice Shot!</span> 85% of peoples liked this picture. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="btnn">
                <button className="custom-btn">Login with Tinder</button>
            </div>
        </animated.div>
    );
}

export default Card;
