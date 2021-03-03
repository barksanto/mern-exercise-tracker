import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
// this will allow us to add exercises to the database

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
            <label>Username:</label>
            <select ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}>
              {
                this.state.users.map(function (user) {
                  // for each user, return them as an option for the input box
                  return <option
                    key={user}
                    value={user}>{user}
                  </option>
                })
              }
            </select>
          </div>
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="form-group">
            <label>Duration: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
            />
          </div>
          <div className="form-group">
            <label>Date: </label>
            <div>
              <DatePicker
                selected={this.state.date}
                onSelected={this.state.onChangeDate}
              />
            </div>
          </div>
        </form>
      </div>
    )
  }
}