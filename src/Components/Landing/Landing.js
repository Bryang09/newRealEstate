import React, { Component } from "react";
import Hero from "./Hero/Hero";
import Nav from "../Nav/Nav";

class Landing extends Component {
  state = {
    search: false
  };

  onSearch = () => {
    this.setState({ search: true });
  };
  render() {
    const { search } = this.state;

    console.log(search);

    return (
      <div className="Landing">
        <Nav />
        <Hero search={search} onSearch={this.onSearch} />
      </div>
    );
  }
}

export default Landing;
