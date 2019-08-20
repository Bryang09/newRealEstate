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
    ],
    zip: null
  };

  componentDidMount = () => {
    const zip = this.props.match.params.zip;

    this.setState(
      !isNaN(zip) && zip.length >= 5
        ? this.setState({ zip })
        : this.setState({ zip: false })
    );
  };

  render() {
    const { images, zip } = this.state;

    console.log(isNaN(this.props.match.params.zip));
    console.log(this.state.zip);

    return (
      <div className="Search">
        {zip === false ? (
          <>
            <h1>Something Went Wrong</h1>
            <Link to="/">Return</Link>{" "}
          </>
        ) : (
          <div className="Search">
            <Nav color="333" />
            <div className="location">
              <h3>
                Searching Near <span> Pasadena, TX</span>
              </h3>
            </div>
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
              }
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Search;
