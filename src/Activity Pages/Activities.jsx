import React from 'react';
import team from '../Images/teampage.svg';

const Activities = () => {
  return (
    <div>
      <div id="first-part">
        <img src={team} alt="team" id="illustration" />
        <div id="head">
          <div id="heading">
           <span>EVENTS </span><span className="inline">& </span><span>PROJECTS</span>
          </div>
          <div className='inline' id="fam">It's a FAMILY!</div>
        </div>
      </div>
    </div>
  )
}

export default Activities