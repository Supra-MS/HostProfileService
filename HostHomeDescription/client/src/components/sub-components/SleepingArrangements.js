import React from 'react';

import SleepSvg from './SleepSvg';

const SleepingArrangements = ({ homeDesc }) => {

  return (
    <>
      {homeDesc.sleeping_arrangements_section && homeDesc.sleeping_arrangements_section.has_sleeping_arrangements ?
        <>
        <hr></hr>
        {homeDesc.sleeping_arrangements_section.common_spaces.length || homeDesc.sleeping_arrangements_section.sleeping_beds.length ?
        <h4>Sleeping arrangements</h4>
        : null}
        <div className="row">

          {homeDesc.sleeping_arrangements_section.common_spaces.length ?
            <div className="bedtype-div col-md-4">

              <SleepSvg space={homeDesc.sleeping_arrangements_section.common_spaces}  />

              <p className="slp-title">Common Spaces</p>
              {homeDesc.sleeping_arrangements_section.common_spaces.map((bedType, index, self) => {

                return (
                  <span className="bedtype" key={index}>
                    <span>1 {bedType}{index !== (self.length - 1) ? <>{`,`}</> : <>{``}</>} </span>
                  </span>
                );
              })}
            </div>
            : null}

          {homeDesc.sleeping_arrangements_section.sleeping_beds.length ?
            <div className="bedtype-div col-md-4">

              <SleepSvg space={homeDesc.sleeping_arrangements_section.sleeping_beds}  />

              <p className="slp-title">Sleeping beds</p>
              {homeDesc.sleeping_arrangements_section.sleeping_beds.map((bedType, index, self) => {
                return (
                  <span className="bedtype" key={index}>
                    <span>1 {bedType}{index !== (self.length - 1) ? <>{`,`}</> : <>{``}</>} </span>
                  </span>
                );
              })}
            </div>
            : null}

        </div>

        <br></br>
        </>
        : null}
    </>
  );
};

export default SleepingArrangements;