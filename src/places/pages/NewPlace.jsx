import React, {useCallback, useReducer} from "react";
import "./NewPlace.css";
import Input from "../../shared/components/FormElements/Input";
import { VALIDATOR_REQUIRE , VALIDATOR_MINLENGTH} from "../../shared/util/validators";


const formReducer = (state, action)  => {
  switch  (action.type) {
    case 'INPUT_CHANGE':
      let formIsValid = true;
      for (const input)
      return {}

    default:
      return state;
  }

};



function NewPlace() {
  useReducer( formReducer, {
    inputs: {
      title: {
        value: "",
        isValid: false
    },
    description: {
      value: "",
      isValid: false
    }
  },
    isValid: false
  });

  
  const titleInputHandler = useCallback((id, value, isValid) => {}, []);

  const descriptionInputHandler = useCallback((id, value, isValid) => {}, []);

  return (
    <div>
      <form className="place-form">
        <Input
        id="title"
          element="input"
          type="text"
          label="Title"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please Enter a Valid title"
          onInput={titleInputHandler}
        />
        <Input
        id="description"
          element="textarea"
          label="Description"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please Enter a Valid Description (atleast  5 characters)."
          onInput={descriptionInputHandler}
        />
      </form>
    </div>
  );
}

export default NewPlace;
