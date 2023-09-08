import { useState, useEffect } from "react";
import "./assets/UserClass.css";

const User = () => {
  const [apiResult, setApiResult] = useState({
    avatar_url:
      "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_2x3.jpg",
    name: "Cute Kitten",
    login: "kitty987",
    bio: "Alien",
    public_repos: 3,
    followers: 5,
    following: 10,
  });

  const [username, setUSername] = useState("tiwariraw");

  useEffect(() => {
    fetchData();
  }, [username]);

  const fetchData = async () => {
    const data = await fetch("https://api.github.com/users/" + username);
    const json = await data.json();
    setApiResult(json);
  };

  const handleChange = (event) => {
    setUSername(event.target.value);
  };

  return (
    <div>
      <h1>Github Stats</h1>
      <input
        type="text"
        className="search"
        placeholder="Search"
        onChange={handleChange}
      />
      <p>{username}</p>
      <div className="user-card">
        <img
          src={apiResult?.avatar_url}
          alt="profile-pic"
          className="profile-pic"
        />
        <h3>Name: {apiResult?.name}</h3>
        <h4 className="login">Login-id: {apiResult?.login}</h4>
        <p>Bio: {apiResult?.bio}</p>
        <p>Public repos: {apiResult?.public_repos}</p>
        <p>Followers: {apiResult?.followers}</p>
        <p>Following: {apiResult?.following}</p>
      </div>
    </div>
  );
};

export default User;
