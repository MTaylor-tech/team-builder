import React, {useState} from 'react';
import styled from 'styled-components';

const TForm = styled.form`
  border: 1px dotted darkred;
  width: 50%;
  text-align: center;
  padding: 10px;
  font-size: 1.3rem;

  label:after {
    content: ': ';
  }

  button {
    background-color: darkred;
    color: white;
    padding: 5px 10px;
    border: none;
    margin: 15px;
    font-size: 1.3rem;
    border-radius: 6px;
  }
`;

function TeamForm (props) {
  const [formState, setFormState] = useState({
    name: '',
    id: Date.now(),
    members: []
  });

  console.log(`Editing: ${formState.name}`);

  const changeHandler = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    let name = formState.name;
    props.addFunction(formState);
    setFormState({
      name: '',
      id: Date.now()
    });
    alert(`Created team ${name}`);
  };

  return (
    <TForm onSubmit={submitHandler}>
      <label htmlFor='name'>Add Team</label>
      <input type='text' name='name' onChange={changeHandler} value={formState.name} />
      <button type='submit'>Save Team</button>
    </TForm>
  );
}

export default TeamForm;
