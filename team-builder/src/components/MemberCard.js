import React from 'react';
import styled from 'styled-components';

function MemberCard (props) {

  const MCard = styled.div`
    border: 1px dotted darkred;
    width: 50%;
    text-align: center;
    padding: 10px;

    .headline {
      color: darkred;
    }
  `;

  return (
    <MCard>
      <h2 className='headline'>{props.member.name}</h2>
      <p>Email: <a href={`mailto:${props.member.email}`}>{props.member.email}</a></p>
      <p>Role: {props.member.role}</p>
    </MCard>
  );
}

export default MemberCard;
