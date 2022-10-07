import React from "react";
import IMAGES from "../photos";
import { FaHeart } from "react-icons/fa";
import axios from "axios";

function Card({ item, index }) {
  const likeImage = (userName) => {
    axios
      .post(
        `https://market-api.reblium.com/tracking?event=showcase.${userName}`
      )
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="show-card" key={index}>
      <img
        src={IMAGES[item.key.substring(item.key.indexOf(".") + 1)]}
        alt="reblium-community-showcase"
      />
      <div className="card-info">
        <div className="dot" />
        <span>{item.key.substring(item.key.indexOf(".") + 1)}</span>
        <button
          className="like-btn"
          onClick={() =>
            likeImage(item.key.substring(item.key.indexOf(".") + 1))
          }
        >
          <FaHeart className="fa-heart" />
        </button>
      </div>
    </div>
  );
}

export default Card;
