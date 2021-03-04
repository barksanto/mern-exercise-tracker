import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this);

    this.state = { exercises: [] }
  }

  // code will ru nbefore page is rendered and add the list of exercises to the state
  componentDidMount() {
    axios.get('http://localhost:5000/exercises/')
      .then(response => {
        this.setState({ exercises: response.data });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    return (
      <div>
        <p>This is the Exercises List Component!!</p>
      </div>
    )
  }
}