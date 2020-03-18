import React, {useState, useEffect} from 'react';
import MemberCard from './MemberCard.js';
import MemberForm from './Form.js';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const TeamDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  .main-header {
    color: darkred;
    font-size: 4rem;
  }

  a {
    margin: 15px;
  }
`;

function Team(props) {
  const [team, setTeam] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState();

  useEffect(() => {
    const id = props.match.params.id;
    let team = props.teams.find(team=>team.id===id);
    setTeam(team);
    setTeamMembers(team.members);

  },[props.match.params.id]);

  const addToTeam = (member) =>  {
    if (teamMembers.find(person=>person.id===member.id)) {
      setTeamMembers(teamMembers.map(person=>{
      if (person.id===member.id) {
        return member;
      } else {
        return person;
      }
    }));
    } else {
      setTeamMembers([...teamMembers, member]);
    }
  };

  const editMember = (member) => {
    console.log(`Edit: ${member.name}`);
    setMemberToEdit(member);
  };

  return (
    <TeamDiv>
      <h1 className='main-header'>Team: {team.name}</h1>
      <Link to='/'>Home</Link>
      {(memberToEdit!==undefined)?<MemberForm memberToEdit={memberToEdit} addFunction={addToTeam} />:<MemberForm addFunction={addToTeam} />}
      {teamMembers.map(person=><MemberCard member={person} key={person.id} editFunction={editMember} />)}
      <p></p>
    </TeamDiv>
  );
}

export default Team;
