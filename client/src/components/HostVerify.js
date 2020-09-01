import React from 'react';

const HostVerify = ({ hostInfo, resTime }) => {
  return (
    <div>
      {(hostInfo.host_verifications) ?
        <div>
          {hostInfo.host_identity_verified ?
            <p>Policy Number: STR-000{hostInfo.host_verifications[2]}</p>
            : null}
        </div>
        : null}
      <p>Languages: {hostInfo.host_languages[0]} {hostInfo.host_languages[1]} </p>
      <p>Response Rate: {hostInfo.host_response_time}% </p>
      <p>Response Time: {resTime}</p>
    </div>
  )
};

export default HostVerify;