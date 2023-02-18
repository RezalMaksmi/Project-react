import { Component } from 'react';

import React, { useState } from "react";
import ReactJsAlert from "reactjs-alert";


      

class Appk extends Component {

  handleClick = () =>{
    const [status, setStatus] = useState(false);
    setStatus(true);
    
      
    console.log()
    
  }

  render(){
    return (
    <div className="App">
      <div className="alerts">
        <button onClick={this.handleClick} >Success Alert</button>
        
      </div>
    </div>
  );
  }
  
}
export default Appk;