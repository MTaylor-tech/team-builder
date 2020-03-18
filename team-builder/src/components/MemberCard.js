import React from 'react';
import styled from 'styled-components';

const MCard = styled.div`
  border: 1px dotted darkred;
  width: 50%;
  text-align: center;
  padding: 10px;
  font-size: 1.3rem;

  .headline {
    color: darkred;
    font-size: 2rem;
    margin: 10px;
  }

  button {
    background-color: darkred;
    color: white;
    padding: 5px 10px;
    border: none;
    border-radius: 6px;
  }
`;

function MemberCard (props) {
  const editMember = () => {
    props.editFunction(props.member);
  };

  return (
    <MCard>
      <h2 className='headline'>{props.member.name}</h2>
      <p>Email: <a href={`mailto:${props.member.email}`}>{props.member.email}</a></p>
      <p>Role: {props.member.role}</p>
      <button onClick={editMember}>Edit</button>
    </MCard>
  );
}

export default MemberCard;
