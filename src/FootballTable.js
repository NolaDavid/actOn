import React from 'react'







function FootballTable(){

const FootballData =  [
  {Name: 'Sir Purr', Team: 'Carolina Panthers', Category: 'Panther'},
  {Name: 'Poe', Team: 'Baltimore Ravens', Category: 'Raven'},
  {Name: 'Gumbo', Team: 'New Orleans Saints', Category: 'Dog'},
]

const header = Object.keys(FootballData[0])

return(
  <div>
    <table id='sporting'>
      <tbody id='tableBody'>
        {header.map((key, index) => {
         return <th key={index}>{key}</th>
      })}
      {FootballData.map((item, index) => {
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
export default FootballTable