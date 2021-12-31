import React, { useState } from 'react';
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

import ColorList from './ColorList';
import NewColorForm from "./NewColorForm";
import Color from "./Color";

function Routes (){
  const initialColors = {
    lime: "#bfff00"
  }

  const [colors, setColors] = useState(initialColors);
  //add new color obj to array of colors and set state
  function handleAdd(newColorObj) {
    setColors(ColorObjs => ({ ...ColorObjs, ...newColorObj }));
  }

  //use React .match to check 
  //params - (object) Key/value pairs parsed from the URL corresponding to the dynamic segments of the path
  //pass this info to Color component to make color with hex code. 
  function currentColor(props){
    const { color } = props.match.params;
    const hex = colors[color];
    return <Color {...props} hex={hex} color={color} />;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/colors">
          <ColorList colors={colors} />
        </Route>
        <Route exact path="/colors/new">
          <NewColorForm addColor={handleAdd} />
        </Route>
        <Route path="/colors/:color" render={currentColor} />
        <Redirect to="/colors" />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;