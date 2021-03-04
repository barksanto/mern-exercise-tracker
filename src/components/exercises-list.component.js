import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this);

    this.state = { exercises: [] }
  }

  // code will run before page is rendered and add the list of exercises to the state
  componentDidMount() {
    axios.get('http://localhost:5000/exercises/')
      .then(response => {
        this.setState({ exercises: response.data });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  // object id that we will be deleting
  deleteExercise(id) {
    axios.delete('http://localhost:5000/exercises' + id)
      .then(res => console.log(res.data));

    this.setState({
      // underscore is because thats the key value in mongodb
      exercises: this.state.exercises.filter(element => element._id !== id)
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