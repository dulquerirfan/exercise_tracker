import React, { Component } from "react"; 
import axios from 'axios';
import '../css/Createuser.css'
class CreateUser extends Component {
  constructor(props){
    super(props);
    this.state={
      username:''
    }
    this.onsubmit=this.onsubmit.bind(this);
    this.onusername=this.onusername.bind(this);
  }
  onsubmit(e){
    e.preventDefault();
    const users={
      username:this.state.username
    }
    axios.post('http://localhost:5000/addUser',users)
    .then((res)=>{
      console.log(res);
    })
    .catch(err=>{
      console.log(err);
    });
    console.log(users);
    
  }
  onusername(e){
    this.setState({
      username:e.target.value
    })
  }
  render() {
    return (
      <div>
        <h1>create a new user</h1>
    <form className="user_form" onSubmit={this.onsubmit}>
      <label>username:</label><br/>
      <input type="text" value={this.state.username} onChange={this.onusername}/><br/>
      <input type="submit" value="create"className="button"/>
    </form>
    </div>
    );
  }
}

export default CreateUser;