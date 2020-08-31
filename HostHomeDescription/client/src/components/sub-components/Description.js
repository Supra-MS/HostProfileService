import React from 'react';
import ReadMore from './ReadMore';

const Description = ({ homeDesc, toggleReadMore, toggleDisplay }) => {
  if (homeDesc.description_section) {
    for (var key in homeDesc.description_section) {
      if (!homeDesc.description_section[key].length) {
        delete homeDesc.description_section[key];
      }
    }
  }
  return (
    <>
      <hr></hr>
      {homeDesc.description_section ?
          <div>
            <ReadMore max={20} homeDesc={homeDesc.description_section} toggleReadMore={toggleReadMore} toggleDisplay={toggleDisplay} />
          </div>
        : null}
    </>
  );
};

export default Description;