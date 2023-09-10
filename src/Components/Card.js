import React from "react";

const Card = (props) => {
  let cardText;
  if (props.openSpots === 0) {
    cardText = "SOLD OUT";
  } else if (props.location === "Online") {
    cardText = "ONLINE";
  }

  return (
    <div className="card">
      {cardText && <div className="card--badge">{cardText}</div>}
      <img src={props.coverImg} className="card--image" alt="Katie Zaferes" />
      <div className="card--stats">
        <img src={"images/Star.png"} className="card--star" alt="Star icon" />
        <span>{props.stats.rating}</span>
        <span className="gray">({props.stats.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="bold">From ${props.price}</span>
      </p>
    </div>
  );
};

export default Card;
