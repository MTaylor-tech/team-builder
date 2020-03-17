import React, {useState} from 'react';
import styled from 'styled-components';

function MemberForm (props) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    role: ''
  });

  const MForm = styled.form`
    border: 1px dotted darkred;
    width: 50%;
    text-align: center;
    padding: 10px;

    label:after {
      content: ': ';
    }
  `;

  const changeHandler = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    });
  }

  const submitHandler = (event) => {
    event.preventDefault();
    props.addFunction(formState);
  }

  return (
    <MForm onSubmit={submitHandler}>
      <label htmlFor='name'>Name</label>
      <input type='text' name='name' value={formState.name} onChange={changeHandler} /><br />
      <label htmlFor='email'>Email</label>
      <input type='email' name='email' value={formState.email} onChange={changeHandler} /><br />
      <label htmlFor='role'>Role</label>
      <input type='text' name='role' value={formState.role} onChange={changeHandler} /><br />
      <button type='submit'>Add Member</button>
    </MForm>
  );
}

export default MemberForm;
