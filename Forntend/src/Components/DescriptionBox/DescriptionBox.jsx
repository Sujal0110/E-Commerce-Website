import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
    return (
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maiores voluptatum id nihil voluptates assumenda praesentium
                    repudiandae veniam mollitia nesciunt laboriosam!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, enim!
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis.
                </p>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Tempore, dolorem.
                </p>
            </div>
        </div>
    );
};

export default DescriptionBox;
