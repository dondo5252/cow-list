import React from 'react';
import CowsListEntry from './CowsListEntry.jsx'

var CowsList = (props) => {

    return (
      <div>
      <ul>
        {props.cows.map((cow, index) => (
          <CowsListEntry key={index} value={cow} displayCow={props.displayCow}/>
        ))}
      </ul>
      </div>
    )
}
export default CowsList;