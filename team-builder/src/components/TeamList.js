import React from 'react';
import TeamCard from './TeamCard.js';
import styled from 'styled-components';
import TeamForm from './TeamForm.js';

const TList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 25px;
`;

function TeamList(props) {
  return (
    <TList>
      {props.teams.map(team=><TeamCard team={team} key={team.id} />)}
      <TeamForm {...props} />
    </TList>
  );
}

export default TeamList;
