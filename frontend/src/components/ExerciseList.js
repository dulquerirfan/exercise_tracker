import React, { Component } from "react"; 
import workout from '../images/Workout.jpg';
import '../css/Home.css';
class ExerciseList extends Component {
  render() {
    return (
     <div className="homepage">
       <img src={workout} alt="workout"/>
       <div className="exercise_reason">
       <h2>Why to exercise regularly??</h2>
       <p>Exercise is any bodily activity that enhances or maintains physical
          fitness and overall health and wellness.
It is performed for various reasons, 
to aid growth and improve strength, preventing aging, developing muscles and the cardiovascular system, honing athletic skills, weight loss or maintenance, improving health and also for enjoyment.
 Many individuals choose to exercise outdoors where they can congregate in groups, socialize, and enhance well-being.</p>
       </div>
       <div className="exercise_us">
         <h2>Exercise with us.....!</h2>
         <p>choose us to workout ...<br/>
         <ul>
           <li>we keep ur working sessions up to date</li>
           <li>we calculate ur workout sessions </li>
           <li>we calculate ur calories burnt </li>
           <li>we provide diet plan</li>
         </ul>

         </p>
         <br/>
         <p>why to wait join us to make our life better</p>
       </div>

     </div>
    );
  }
}

export default ExerciseList;