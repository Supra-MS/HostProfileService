import React from 'react';

const SuperHost = ({ hostInfo, superHostText }) => {
  return (
    <div>
      {hostInfo.host_is_superHost ? <div>
        <div className="heading6">{hostInfo.host_name} is a Superhost</div>
        <p>{superHostText}</p>
      </div> : null}
    </div>
  )
};

export default SuperHost;