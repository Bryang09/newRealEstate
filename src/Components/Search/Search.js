import React, { Component } from "react";
import Nav from "../Nav/Nav";

import { Link } from "react-router-dom";

import "./Search.scss";
import Gallery from "./Gallery/Gallery";

class Search extends Component {
  state = {
    images: [
      { src: "bg2.png", price: 10.8, rooms: 7, rr: 5, hovered: false },
      { src: "blue", price: 9.8, rooms: 7, rr: 5, hovered: false },
      { src: "green", price: 2.8, rooms: 7, rr: 5, hovered: false },
      { src: "gray", price: 0.8, rooms: 7, rr: 5, hovered: false },
      { src: "yellow", price: 1.8, rooms: 7, rr: 5, hovered: false }
    ],
    zip: null,
    sort: "normal"
  };

  componentDidMount = () => {
    const zip = this.props.match.params.zip;

    this.setState(
      !isNaN(zip) && zip.length >= 5
        ? this.setState({ zip })
        : this.setState({ zip: false })
    );
  };

  onLowToHigh = () => this.setState({ sort: "low" });
  onHighToLow = () => this.setState({ sort: "high" });

  render() {
    const { images, zip, sort } = this.state;

    const info =
      sort === "normal"
        ? images
        : sort === "low"
        ? images.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
        : images.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));

    console.log(sort);

    console.log(info);

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
            <div className="top">
              <div className="sort">
                <h4 className="lowToHigh option" onClick={this.onLowToHigh}>
                  Low to High
                </h4>
                <h4 className="highToLow option" onClick={this.onHighToLow}>
                  High to Low
                </h4>
              </div>
              <div className="location">
                <h3>
                  Searching Near <span> Pasadena, TX</span>
                </h3>
              </div>
            </div>

            <div className="imgGalleryContainer">
              <Gallery info={info} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Search;
