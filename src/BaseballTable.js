import React, { Component } from 'react'




function BaseballTable(){
  const [teams, setTeams] = React.useState([])
  const BaseballData =  [
    {Name: 'Lou Seal', Team: 'San Francisco Giants', Category: 'Seal'},
    {Name: 'Stomper', Team: 'Oakland Athletics', Category: 'Elephant'},
    {Name: 'Orbit', Team: 'Houston Astros', Category: 'Furry Alien'},
  ]
  const header = Object.keys(BaseballData[0])
return(
  <div>


    <table>
      <tbody>
        {header.map((key, index) => {
         return <th key={index}>{key}</th>
      })}
      {BaseballData.map((item, index) => {
        return(
          <tr key={index}>
            <td>{item.Name}</td>
            <td>{item.Team}</td>
            <td>{item.Category}</td>
          </tr>
        )
      })}
            </tbody>
      </table>

  </div>
)


}
export default BaseballTable