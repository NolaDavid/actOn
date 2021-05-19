
import './App.css';

import React, {useState} from 'react'
import BaseballTable from './BaseballTable'
import BasketballTable from './BasketballTable'
import FootballTable from './FootballTable'
import Table from './Table'

const baseballData =  [
  {Name: 'Lou Seal', Team: 'San Francisco Giants', Category: 'Seal'},
  {Name: 'Stomper', Team: 'Oakland Athletics', Category: 'Elephant'},
  {Name: 'Orbit', Team: 'Houston Astros', Category: 'Furry Alien'},
]
const basketballData =  [
  {Name: 'Slamson', Team: 'Sacramento Kings', Category: 'Lion'},
  {Name: 'Stuff', Team: 'Orlando Magic', Category: 'Magic Dragon'},
  {Name: 'Jazz Bear', Team: 'Utah Jazz', Category: 'Bear'},

]
const footballData =  [
  {Name: 'Sir Purr', Team: 'Carolina Panthers', Category: 'Panther'},
  {Name: 'Poe', Team: 'Baltimore Ravens', Category: 'Raven'},
  {Name: 'Gumbo', Team: 'New Orleans Saints', Category: 'Dog'},
]
const App = () => {
  const [sport, updateSport] = useState('Baseball')
  return (
    <div className="App">
<h3>Sports Mascots</h3>
<div id='tabs'>
<span  className={sport === 'Baseball' ? 'current' : 'sports'} onClick={() =>updateSport('Baseball')}>Baseball</span>
<span className={sport === 'Basketball' ? 'current' : 'sports'} onClick={() =>updateSport('Basketball')}>Basketball</span>
<span className={sport === 'Football' ? 'current' : 'sports'} onClick={() =>updateSport('Football')}>Football</span>

</div>
<div id='table'>

{sport === 'Baseball' ? <Table teams={baseballData}/> : sport === 'Football' ? <Table teams={footballData}/> : <Table teams={basketballData} />}
</div>



      </div>
  );
}

export default App;
