import React from 'react';
import { Link, Redirect, useParams } from 'react-router-dom';

function Dog({dogs}){
  const {name} = useParams();
  //every other endpoint not listed should redirect you to /dogs.

  if(!dogs) return <Redirect to="/dogs"/>
  let matches = dogs.filter(v => v.name.toLowerCase().includes(name));
  //otherwise make dog page from dog.name
  //compare param name to dogs names in obj 
  if (matches.length > 0) {
    const dog = dogs.find(
      dog => dog.name.toLowerCase() === name.toLowerCase()
    );
    return (
      <div className="DogDiv">
        <img src={dog.src} alt={dog.name} />
        <h1>{dog.name}</h1>
        <h3>I'm {dog.age} year(s) old!</h3>
        <ul>
          {dog.facts.map((fact, idx) => (
            <li key={idx}>{fact}</li>
          ))}
        </ul>
      </div>
    )
  }
  return <Redirect to="/dogs"/>;
}

export default Dog;