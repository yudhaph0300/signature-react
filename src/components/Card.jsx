import React from "react";

function Card({ imageSource, title, type, rating, description }) {
  return (
    <div className="card card-furniture">
      <div className="row">
        <div className="col-md-3">
          <img src={imageSource} alt="Card" className="img-fluid" />
        </div>
        <div className="col-md-9">
          <h4 className="card-title fw-bold">{title}</h4>
          <p className="card-text">{type}</p>
          <p className="card-text">{rating}</p>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
