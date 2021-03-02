import React, { Component } from 'react';
// this will aloow us to add exercises to the database

export default class CreateExercise extends Component {
  constructor(props) {
    //In js classes need to always call define a super when defining the consructor of a subclass
    super(props);

    this.state = {
      username: '',
      description: '',
      duration: 0,
      date: new Date(),
      users: [] //this will be a dropdown menu that have all users in the db already
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  render() {
    return (
      <div>
        <p>This is the Create Exercise Component!!</p>
      </div>
    )
  }
}