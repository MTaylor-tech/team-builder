import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const MForm = styled.form`
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

function MemberForm (props) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    role: '',
    id: Date.now()
  });

  useEffect(()=>{
    if (props.memberToEdit!==undefined) {
      setFormState(props.memberToEdit);
  }},[props.memberToEdit]);

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
      email: '',
      role: '',
      id: Date.now()
    });
    alert(`Saved member ${name}`);
  };

  return (
    <MForm onSubmit={submitHandler}>
      <label htmlFor='name'>Name</label>
      <input type='text' name='name' value={formState.name} onChange={changeHandler} /><br />
      <label htmlFor='email'>Email</label>
      <input type='email' name='email' value={formState.email} onChange={changeHandler} /><br />
      <label htmlFor='role'>Role</label>
      <input type='text' name='role' value={formState.role} onChange={changeHandler} /><br />
      <button type='submit'>Save Member</button>
    </MForm>
  );
}

export default MemberForm;
