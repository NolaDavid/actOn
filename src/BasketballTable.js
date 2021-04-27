import React, { Component, useEffect, useState } from 'react'







function BasketballTable(){
const [teams, setTeams] = React.useState([])
const BasketballData =  [
  {Name: 'Slamson', Team: 'Sacramento Kings', Category: 'Lion'},
  {Name: 'Stuff', Team: 'Orlando Magic', Category: 'Magic Dragon'},
  {Name: 'Jazz Bear', Team: 'Utah Jazz', Category: 'Bear'},

]
const header = Object.keys(BasketballData[0])
return(
  <div>

<table>
      <tbody>
        {header.map((key, index) => {
         return <th key={index}>{key}</th>
      })}
      {BasketballData.map((item, index) => {
        return(
          <tr key={index} id='row'>
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
export default BasketballTable