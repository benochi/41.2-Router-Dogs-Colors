import React from 'react';
import { Link } from "react-router-dom";

function Color({hex, color, history}) {
  //handle no hexcode and push into history object. allows 'back' functionality.
  if(!hex) {
    history.push("/colors");
  }

  //change backgroundColor to match the hexcode of the color.
  return (
    <div 
      className="Color" 
      style={{ backgroundColor: hex }}>
        <p>this is {color}</p>
        <h4>
          <Link to='/'>Return to home</Link>
        </h4>
      </div>
  );
}

export default Color;