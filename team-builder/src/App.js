import React, {useState} from 'react';
import './App.css';
import teamData from './team-data.js';
import MemberCard from './components/MemberCard.js';
import MemberForm from './components/Form.js';
import styled from 'styled-components';

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

function App() {
  const [teamState, setTeamState] = useState(teamData);
  const [memberToEdit, setMemberToEdit] = useState();

  const addToTeam = (member) =>  {
    if (teamState.find(person=>person.id===member.id)) {
      setTeamState(teamState.map(person=>{
        if (person.id===member.id) {
          return member;
        } else {
          return person;
        }
      }));
    } else {
      setTeamState([...teamState, member]);
    }
  };

  const editMember = (member) => {
    console.log(`Edit: ${member.name}`);
    setMemberToEdit(member);
  };

  return (
    <AppDiv>
      <h1 className='main-header'>The Team</h1>
      {(memberToEdit!==undefined)?<MemberForm memberToEdit={memberToEdit} addFunction={addToTeam} />:<MemberForm addFunction={addToTeam} />}
      {teamState.map(person=><MemberCard member={person} key={person.id} editFunction={editMember} />)}
      <p></p>
    </AppDiv>
  );
}

export default App;
