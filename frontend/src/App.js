import React, { Component } from "react"; 
import {BrowserRouter as Router,Route} from "react-router-dom";
import Navbar from './components/Navbar';
import CreateUser from './components/CreateUser';
import CreateExercise from './components/CreateExercise';
import EditExercise from './components/EditExercise';
import ExerciseList from './components/ExerciseList';
import '../src/css/App.css';
class App extends Component {
  render() {
    return (
      <Router>
      <div className="navbar">
        <Navbar/>
        <div className="components">
        <br/>
     <Route path="/" exact component={ExerciseList}/><br/>
     <Route path="/create"  component={CreateExercise}/><br/>
     <Route path="/edit"  component={EditExercise}/><br/>
     <Route path="/users"  component={CreateUser}/><br/>
     </div>
     
     </div>
     </Router>
    );
  }
}

export default App;