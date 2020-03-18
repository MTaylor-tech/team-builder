import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import TeamCard from './TeamCard.js';
import styled from 'styled-components';

const TList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 25px;
`;

function TeamList(props) {
  const [teams, setTeams] = useState(props.teams);

  return (
    <TList>
      {teams.map(team=><TeamCard team={team} key={team.id} />)}
    </TList>
  );
}

export default TeamList;
