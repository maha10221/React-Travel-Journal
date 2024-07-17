import React from 'react';
import pinPic from "../images/pin.svg";

function Card(props) {
    return (
        <div className="card">
            <div className="card-image-div">
                <img
                    src={props.imageUrl}
                    className={props.class}
                    alt={props.title}
                />
            </div>
            <div className="card-text-div">
                <div className="card-location">
                    <img src={pinPic} className="card-pin" alt="pin-icon" />
                    <span className="location">{props.location}</span>
                    <p className="grey">
                        <a
                            href={props.googleMapsUrl}
                            target="_blank"
                            rel="noreferrer"
                        >
                            View on Google Maps Link
                        </a>
                    </p>
                </div>
                <h2 className="card-title">{props.title}</h2>
                {props.bestViewSeason && (
                    <p className="card-best-season">
                        Best View Season: {props.bestViewSeason}
                    </p>
                )}
                <p className="card-description">
                    <span>{props.description}</span>
                </p>
            </div>
        </div>
    );
}

export default Card;
