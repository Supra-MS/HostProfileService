import React from 'react';

const CoHost = ({ hostInfo }) => {
  return (
    <div>
      {hostInfo.host_has_coHost ? <div>
        <div className="heading6">Co-hosts</div>
        <img className="host-img" src="https://res.cloudinary.com/dumikauss/image/upload/v1596857530/waterBnB-reviewers/240x240_gmk0zr.jpg" height="50px" width="50px"></img>
        <p className="co-host">John</p>
      </div> : null}
    </div>
  )
};

export default CoHost;