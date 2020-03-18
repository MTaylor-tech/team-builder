import React, {useState} from 'react';
import './App.css';
import teamData from './team-data.js';
import Team from './components/Team.js';
import {Route} from 'react-router-dom';
import TeamList from './components/TeamList.js';

function App() {
  const [teamState, setTeamState] = useState(teamData);

  return (
    <div>
      <Route path="/team/:id" render={props=><Team {...props} teams={teamState} />} />
      <Route exact path="/" render={props=><TeamList {...props} teams={teamState} />} />
    </div>
  );
}

export default App;
