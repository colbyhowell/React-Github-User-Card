import React from "react";

import UserCard from "./userCard";

class GithubFeed extends React.Component {
  constructor() {
    super();
    this.state = {
      people: []
    };
  }

  componentDidMount() {
    console.log("Component Mounted");
    fetch("https://api.github.com/users/colbyhowell/following")
      .then(res => res.json())
      .then(res => this.setState({ people: res }))
      .catch(err => console.log(err));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.users !== this.state.users) {
      fetch("https://api.github.com/users/colbyhowell/following")
        .then(res => res.json())
        .then(res => this.setState({ people: res }))
        .catch(err => console.log(err));
    }
    console.log(this.state.people);
  }

  render() {
    return (
      <div>
        <h1>Colby Howell Follows:</h1>
        <UserCard users={this.state.people} key={this.state.people.id} />
      </div>
    );
  }
}

export default GithubFeed;
