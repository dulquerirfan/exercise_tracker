import React, { Component } from "react"; 
import  axios from "axios";
import '../css/CreateExercise.css';
class CreateExercise extends  Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      description:'',
      duration:''
    }
    this.onchangeuser=this.onchangeuser.bind(this);
    this.onchangeduration=this.onchangeduration.bind(this);
    this.ondescription=this.ondescription.bind(this);
    this.onsubmit=this.onsubmit.bind(this);
  }
  
  onchangeuser(e){
    this.setState({
      username:e.target.value
    })
  }
  onchangeduration(e){
    this.setState({
      duration:e.target.value
    })
  }
  ondescription(e){
    this.setState({
      description:e.target.value
    })
  }
  onsubmit(e){
    e.preventDefault();
    const exercise={
      username:this.state.username,
      description:this.state.description,
      duration:this.state.duration
    }
    console.log(exercise);
    axios.post('http://localhost:5000/api/addexercise',exercise)
    .then((res)=>{
      console.log(res.data);
    })
    
  }
  exit(e){
    window.location='/';
  }
  
  
  render() {
    return (
      <div>
        <h1>create a new exercise</h1>
    <form className="form" onSubmit={this.onsubmit}>
      <label>username:</label><br/>
      <input type="text" value={this.state.username} onChange={this.onchangeuser}/> <br/>
      <label>description:</label><br/>
      <input type="text" value={this.state.description} onChange={this.ondescription}/> <br/>
      <label>duration:</label><br/>
      <input type="text" value={this.state.duration} onChange={this.onchangeduration}/> <br/>
      <div className="buttons">
      <input type="button" value="Home" onClick={this.exit} className="home_button"/>
      <input type="submit" value="create" className="create_button" />
      
      </div>
    </form>
    </div>
    );
  }
}

export default CreateExercise;