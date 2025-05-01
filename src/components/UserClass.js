import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props.name, "children constructor");

    this.state = {
      userInfo: {
        name: "dummy",
        location: "default",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/AnuragKumarGupta");
    const json = await data.json();
    // console.log(this.props.name, "children comonentDidmount");

    this.setState({
      userInfo: json,
    });
  }
  render() {
    // console.log(this.props.name, "children render");
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="userClass">
        <img src={avatar_url} />
        <h1>Name: {name}</h1>
        <h2>Location:{location}</h2>
        <h4>Contact:@anurag</h4>
      </div>
    );
  }
}

export default UserClass;
