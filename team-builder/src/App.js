import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import teamData from './team-data.js';
import MemberCard from './components/MemberCard.js';
import MemberForm from './components/Form.js';
import styled from 'styled-components';

function App() {
  const [teamState, setTeamState] = useState(teamData);

  const AppDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    .main-header {
      color: darkred;
      font-size: 4rem;
    }
  `;

  const addToTeam = (member) =>  {
    setTeamState([...teamState, member]);
  };

  return (
    <AppDiv>
      <h1 className='main-header'>The Team</h1>
      <MemberForm addFunction={addToTeam} />
      {teamState.map(person=><MemberCard member={person} key={person.name} />)}
      <p></p>
    </AppDiv>
  );
}

export default App;
