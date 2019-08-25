import React, { Component } from "react";
import Hero from "./Hero/Hero";
import Nav from "../Nav/Nav";

import axios from "axios";

class Landing extends Component {
  state = {
    search: false,
    zip: null
  };

  componentDidMount = () => {
    axios
      .get("/api/houses")
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };
  onZip = e => this.setState({ zip: e.target.value });

  render() {
    const { search, zip } = this.state;

    console.log(zip);

    return (
      <div className="Landing">
        <Nav color="fff" />
        <Hero search={search} zip={zip} onZip={this.onZip} />
      </div>
    );
  }
}

export default Landing;
