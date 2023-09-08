import React from "react";
import UserClass from "./UserClass";
// import User from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("parent constructor called");
  }

  componentDidMount() {
    // console.log("parent component did mount called");
  }

  render() {
    // console.log("parent render called");

    return (
      <div className="about">
        <UserClass />
        {/* <UserClass name="Second (class-based component)" location="Varanasi" /> */}
        {/* <UserClass name="Third (class-based component)" location="Jaipur" /> */}
      </div>
    );
  }
}

export default About;
