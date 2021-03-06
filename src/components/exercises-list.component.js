import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "../styles/buttons.css"

// this component is a functional react component
// main diff is the lack of state and life cycle methods
const Exercise = props => (
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration} mins</td>
    <td>{props.exercise.date.substring(0, 10)}</td>
    <td>
      {/* onclick will call props.deleteExercise thats passed as a prop from the other component */}
      {/* best practice is to make this a button instead of just a link */}
      <Link to={"/edit/" + props.exercise._id}><button className="edit">edit</button></Link> | <button href="#" className="delete" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</button>
    </td>
  </tr>
)

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this);

    this.state = { exercises: [] };
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
    axios.delete('http://localhost:5000/exercises/' + id)
      .then(res => console.log(res.data));

    this.setState({
      // underscore is because thats the key value in mongodb
      exercises: this.state.exercises.filter(element => element._id !== id)
    })
  }

  // for every element in the exercise array, its going to return a component
  exerciseList() {
    return this.state.exercises.map(currentExercise => {
      return <Exercise exercise={currentExercise} deleteExercise={this.deleteExercise} key={currentExercise._id} />;
    })
  }

  render() {
    return (
      <div>
        <h3 className="text-center">Logged Exercises</h3>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.exerciseList()}
          </tbody>
        </table>
      </div>
    )
  }
}


