import React from 'react';

const HostListIcons = ({ hostInfo, reviewCount }) => {
  return (
    <nav className="navbar navbar-expand">
      <div className="navbar-nav mr-auto">
        <div>
          <li className="navbar-item">
            <p className="nav-li"><img className="icons" src="https://fec-gai-hostprofile.s3-us-west-1.amazonaws.com/icons/star.png" width="27px" height="27px"></img> {reviewCount} Reviews</p>
          </li>
        </div>

        {hostInfo.host_identity_verified ?
          <div>
            <li className="navbar-item">
              <p className="nav-li"><img className="icons" src="https://fec-gai-hostprofile.s3-us-west-1.amazonaws.com/icons/verify.png" width="27px" height="27px"></img> Identity verified</p>
            </li>
          </div>
          : null}

        {hostInfo.host_is_superHost ?
          <div>
            <li className="navbar-item">
              <p className="nav-li"><img className="icons" src="https://fec-gai-hostprofile.s3-us-west-1.amazonaws.com/icons/superhost.png" width="27px" height="27px"></img>  Superhost</p>
            </li>
          </div>
          : null}
      </div>
    </nav>
  )
};

export default HostListIcons;