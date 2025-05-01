import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent constructor");
  }
  componentDidMount() {
    // console.log("parent componentdidmount");
  }

  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>About</h1>
        <h2>This is About Page</h2>
        <UserClass name={"First"} location={"Bangalore"} />
      </div>
    );
  }
}
export default About;
