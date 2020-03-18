import React from 'react';
import styled from 'styled-components';

const MCard = styled.div`
  border: 1px dotted darkred;
  width: 50%;
  text-align: center;
  padding: 10px;

  .headline {
    color: darkred;
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
