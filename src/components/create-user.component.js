import React, { Component } from 'react';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);


    this.state = {
      username: '',
    }
  }

  onChangeUsername(e) {
    this.setState({
      // just updates the one element
      username: e.target.value
    });
  }


  onSubmit(e) {
    e.preventDefault(); // prevents auto page refresh

    const user = {
      username: this.state.username
    }
    // this will be the part where we submit the exercise to the database.
    console.log(user);
    // once exercises are submitted - go back to list of exercises.
    this.setState({
      username: ''
    })


  }

  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}