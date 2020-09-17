import React from 'react';

const CoHost = ({ hostInfo, coHostPic }) => {
  return (
    <div>
      {hostInfo.host_has_coHost ? <div>
        <div className="heading6">Co-hosts</div>
        <img className="host-img" src={coHostPic} height="50px" width="50px"></img>
        <p className="co-host">{hostInfo.cohost_name}</p>
      </div> : null}
    </div>
  )
};

export default CoHost;