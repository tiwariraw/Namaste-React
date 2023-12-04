// class based component
import React from "react";
import "./assets/UserClass.css";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResult: {
        avatar_url:
          "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_2x3.jpg",
        name: "Cute Kitten",
        login: "kitty987",
        bio: "Alien",
        public_repos: 3,
        followers: 5,
        following: 10,
      },
      username: "tiwariraw",
    };
  }

  componentDidMount() {
    console.log("cdm called");
    this.fetchData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.username !== this.state.username) {
      this.fetchData();
    }
  }

  async fetchData() {
    const data = await fetch(
      "https://api.github.com/users/" + this.state.username,
      {
        headers: {
          Authorization: "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",
        },
      }
    );
    const json = await data.json();
    this.setState({
      apiResult: json,
    });
  }

  render() {
    return (
      <div>
        <h1>Github Stats</h1>
        <input
          type="text"
          className="search"
          placeholder="Search"
          onChange={(event) => {
            this.setState({
              username: event.target.value,
            });
          }}
        />
        <p className="username">{this.state.username}</p>
        <div className="user-card">
          <img
            src={this.state.apiResult?.avatar_url}
            alt="profile-pic"
            className="profile-pic"
          />
          <h3>Name: {this.state.apiResult?.name}</h3>
          <h4 className="login">Login-id: {this.state.apiResult?.login}</h4>
          <p className="bio">Bio: {this.state.apiResult?.bio}</p>
          <p>Public repos: {this.state.apiResult?.public_repos}</p>
          <p className="followers">Followers: {this.state.apiResult?.followers}</p>
          <p>Following: {this.state.apiResult?.following}</p>
        </div>
      </div>
    );
  }
}

export default UserClass;
