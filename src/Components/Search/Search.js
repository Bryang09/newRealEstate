import React, { Component } from "react";
import Nav from "../Nav/Nav";

import { Link } from "react-router-dom";

import "./Search.scss";

class Search extends Component {
  state = {
    images: [
      { src: "bg2.png", price: 10.8, rooms: 7, rr: 5, hovered: false },
      { src: "blue", price: 10.8, rooms: 7, rr: 5, hovered: false },
      { src: "green", price: 10.8, rooms: 7, rr: 5, hovered: false },
      { src: "gray", price: 10.8, rooms: 7, rr: 5, hovered: false },
      { src: "yellow", price: 10.8, rooms: 7, rr: 5, hovered: false }
    ]
  };

  render() {
    const { images } = this.state;

    return (
      <div className="Search">
        <Nav />
        <div className="imgGalleryContainer">
          {images.map((res, i) => {
            return (
              <div className="imgContainer" key={i}>
                <div className="img">
                  <div className="info">
                    <span className="price">
                      <i>{`$${res.price} M`}</i>{" "}
                    </span>

                    <Link to={`/home/${i}`} id="houseLink">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Search;
