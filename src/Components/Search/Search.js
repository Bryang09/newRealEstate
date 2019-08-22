import React, { Component } from "react";

import { Link } from "react-router-dom";

import Main from "./Main/Main";

import "./Search.scss";

class Search extends Component {
  state = {
    images: [
      { src: "bg2.png", price: 10.8, rooms: 7, rr: 5, size: 30 },
      { src: "blue", price: 9.8, rooms: 7, rr: 5, size: 40 },
      { src: "green", price: 2.8, rooms: 7, rr: 5, size: 10 },
      { src: "gray", price: 0.8, rooms: 7, rr: 5, size: 180 },
      { src: "yellow", price: 1.8, rooms: 7, rr: 5, size: 70 }
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
  onSmallToLarge = () => this.setState({ sort: "small" });
  onLargeToSmall = () => this.setState({ sort: "large" });

  render() {
    const { images, zip, sort } = this.state;

    const info =
      sort === "normal"
        ? images
        : sort === "low"
        ? images.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
        : sort === "high"
        ? images.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
        : sort === "small"
        ? images.sort((a, b) => parseFloat(a.size) - parseFloat(b.size))
        : sort === "large"
        ? images.sort((a, b) => parseFloat(b.size) - parseFloat(a.size))
        : null;

    console.log(info);

    return (
      <div className="Search">
        {zip === false ? (
          <>
            <h1>Something Went Wrong</h1>
            <Link to="/">Return</Link>{" "}
          </>
        ) : (
          <Main
            info={info}
            low={this.onLowToHigh}
            high={this.onHighToLow}
            small={this.onSmallToLarge}
            large={this.onLargeToSmall}
          />
        )}
      </div>
    );
  }
}

export default Search;
