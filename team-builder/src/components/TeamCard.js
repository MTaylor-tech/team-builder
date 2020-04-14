import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const TCard = styled.div`
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

function TeamCard (props) {

  return (
    <TCard>
      <h2 className='headline'>{props.team.name}</h2>
      <Link to={`/team/${props.team.id}`}>Choose</Link>
    </TCard>
  );
}

export default TeamCard;
