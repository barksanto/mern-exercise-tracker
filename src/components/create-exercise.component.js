import React, { Component } from 'react';
// this will aloow us to add exercises to the database

export default class CreateExercise extends Component {
  constructor(props) {
    //In js classes need to always call define a super when defining the consructor of a subclass
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);


    this.state = {
      username: '',
      description: '',
      duration: 0,
      date: new Date(),
      users: [] //this will be a dropdown menu that have all users in the db already
    }
  }

  componentDidMount() {
    this.setState({
      users: ['test user'],
      username: 'test user'
    })
  }

  onChangeUsername(e) {
    this.setState({
      // just updates the one element
      username: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      // just updates the one element
      description: e.target.value
    });
  }

  onChangeDuration(e) {
    this.setState({
      // just updates the one element
      duration: e.target.value
    });
  }

  onChangeDate(date) {
    this.setState({
      // just updates the one element
      date: date
    });
  }

  onSubmit(e) {
    e.preventDefault(); // prevents auto page refresh

    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
    }
    // this will be the part where we submit the exercise to the database.
    console.log(exercise);
    // once exercises are submitted - go back to list of exercises.
    window.location = '/';
  }

  render() {
    return (
      <div>
        <h3>Create New Exercise Log</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">

          </div>
        </form>
      </div>
    )
  }
}