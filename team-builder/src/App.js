import React, {useState, useEffect} from 'react';
import './App.css';
import teamData from './team-data.js';
import Team from './components/Team.js';
import {Route} from 'react-router-dom';
import TeamList from './components/TeamList.js';

function App() {
  const [teamState, setTeamState] = useState(teamData);


  const updateTeam = uTeam => {
    setTeamState(teamState.map(team=>{
      if (team.id===uTeam.id) {
        return uTeam;
      } else {
        return team;
      }
    }))
  };

  const addTeam = team => {
    setTeamState([...teamState, team]);
  };

  return (
    <div>
      <Route path="/team/:id" render={props=><Team {...props} teams={teamState} updateFunction={updateTeam} />} />
      <Route exact path="/" render={props=><TeamList {...props} teams={teamState} addFunction={addTeam} />} />
    </div>
  );
}

export default App;
