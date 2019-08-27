import React, { Component } from "react";
import Nav from "../Nav/Nav";
import HomeHero from "./Hero/Hero";
import HomeInfo from "./Info/Info";

import axios from "axios";

import "./Home.scss";
import { LOCAL_REQUEST } from "../../keys";

class Home extends Component {
  state = {
    seeMore: false,
    id: null,
    house: null,
    liked: ""
  };

  componentDidMount = () => {
    const id = this.props.match.params.id;

    this.setState({ id });

    axios
      .get(`/api/houses/${id}`)
      .then(res => this.setState({ house: res.data }))
      .catch(err => console.log(err));

    localStorage.Liked
      ? this.setState({ liked: localStorage.getItem("Liked") })
      : this.setState({ liked: false });
  };

  onSeeMore = () => this.setState({ seeMore: !this.state.seeMore });

  onMail = () => alert("Mail");
  onShare = () => alert("Share");

  onLike = () => {
    const { house } = this.state;
    const id = this.props.match.params.id;
    const likes = house.likes;
    const updatedLikes = likes + 1;

    axios
      .put(
        `${LOCAL_REQUEST}/${id}`,
        { likes: `${updatedLikes}` },
        { headers: { "Content-Type": "application/json" } }
      )

      .then(() =>
        this.setState(state => ({
          house: Object.assign({}, state.house, {
            likes: this.state.house.likes + 1
          })
        }))
      )
      .catch(err => console.log(err));
  };

  render() {
    const { seeMore, id, house, liked } = this.state;

    console.log(liked);

    return (
      <div
        className={"Home"}
        style={seeMore ? { overflowX: "auto" } : { overflowX: "hidden" }}
      >
        <Nav />

        {house !== null ? (
          <HomeHero
            more={seeMore}
            seeMore={this.onSeeMore}
            house={house !== null ? house : null}
          />
        ) : (
          <h1>Loading</h1>
        )}

        <HomeInfo
          more={seeMore}
          seeMore={this.onSeeMore}
          onMail={this.onMail}
          onShare={this.onShare}
          house={house !== null ? house : "Loading"}
          liked={liked}
          onLike={this.onLike}
        />
      </div>
    );
  }
}

export default Home;
