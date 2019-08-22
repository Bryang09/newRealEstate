import React, { Component } from "react";
import Hero from "./Hero/Hero";
import Nav from "../Nav/Nav";

class Landing extends Component {
  state = {
    search: false,
    zip: null
  };

  onZip = e => this.setState({ zip: e.target.value });

  render() {
    const { search, zip } = this.state;

    console.log(zip);

    return (
      <div className="Landing">
        <h1>HELP!!!</h1>
        <Nav color="fff" />
        <Hero search={search} zip={zip} onZip={this.onZip} />
      </div>
    );
  }
}

export default Landing;
