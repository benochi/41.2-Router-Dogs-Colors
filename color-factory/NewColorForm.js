import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function NewColorForm({addColor}) {
  const [form, setForm] = useState({name: "", hex:"#00FF00"});
  const history = useHistory();


  function handleChange(evt) {
    setForm(form => ({...form, [evt.target.name]: evt.target.value}));
  }

  //push into window history on submit. prevent default and addColor() call on form submit
  function handleSubmit(evt) {
    evt.preventDefault();
    addColor({ [form.name]: form.hex });
    history.push("/colors");
  }

  //deconstruct object
  const {hex, name} = form;

  //readonly got rid of error 
  return (
    <div className="NewColor">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Color name</label>
          <input
            name="name"
            id="name"
            placeholder="Enter color name"
            onChange={handleChange}
            value={name}
          />
        </div>
        <div>
          <label htmlFor="hex">Color value</label>
          <input
            type="color"
            name="hex"
            id="hex"
            onChange={handleChange}
            value={hex}
          />
        </div>
        <input type="Submit" value="Add this color" readOnly />
      </form>
    </div>
  );
}
export default NewColorForm;