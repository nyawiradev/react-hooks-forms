import React, { useState } from "react";
import Form from "./Form";
import DisplayData from "./DisplayData";


function parentComponent() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");
  <div>
  <Form
    firstName={firstName}
    lastName={lastName}
    handleFirstNameChange={handleFirstNameChange}
    handleLastNameChange={handleLastNameChange}
  />
  <DisplayData firstName={firstName} lastName={lastName} />
</div>
;
}

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }
  
  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function Form(props) {
    return (
      <form>
        <input
          type="text"
          onChange={props.handleFirstNameChange}
          value={props.firstName}
        />
        <input
          type="text"
          onChange={props.handleLastNameChange}
          value={props.lastName}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
  
export default parentComponent;
