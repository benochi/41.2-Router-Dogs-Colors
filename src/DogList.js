import React from 'react';
import { Link } from 'react-router-dom';

//Clicking on a dog from the homepage takes you to that dog’s route.
// For example, clicking on Whiskey will take you to /dogs/whiskey.
//take dogs array and make html for each dog using map. 
//dogs have name, age, src, facts[]
function Doglist({dogs}) {
  return (
    <div className="DogList">
      <h1>Dogs!</h1>
      <div className="row">
        {dogs.map(d => (
          <div className="col-3 text-center" key={d.name}>
            <img src={d.src} alt={d.name} />
            <h3 className="mt-3">
              <Link to={`/dogs/${d.name.toLowerCase()}`}>{d.name}</Link>
            </h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Doglist;