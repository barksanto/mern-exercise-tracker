import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import DeleteUser from "./components/delete-user.component";
import "./styles/main.css"

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <br />

        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
        <Route path="/delete" component={DeleteUser} />
      </div>
    </Router>
  );
}

export default App;
