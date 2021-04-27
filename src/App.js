
import './App.css';

import React, {useState} from 'react'
import BaseballTable from './BaseballTable'
import BasketballTable from './BasketballTable'
import FootballTable from './FootballTable'
import Football from './Football'
import Baseball from './Baseball'
import Basketball from './Basketball'


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

{sport === 'Baseball' ? <BaseballTable /> : sport === 'Football' ? <FootballTable /> : <BasketballTable />}
</div>



      </div>
  );
}

export default App;
