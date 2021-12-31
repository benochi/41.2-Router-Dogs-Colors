import React from 'react';
import { Link } from "react-router-dom";

//make links for each color with color name as list item. 
function ColorList ({colors}) {
  const colorRoutes = Object.keys(colors).map(color => (
    <li key={color}>
      <Link to={`/colors/${color}`}>{color}</Link>
    </li>
  ));

  return (
    <div className="ColorList">
      <h1>Welcome to the color Factory!</h1>
      <h2>
        <Link to="/colors/new">Add a color</Link>
      </h2>
      <div>
        <h4>Please select a color</h4>
        <ul>{colorRoutes}</ul>
      </div>
    </div>
  )
}

export default ColorList;