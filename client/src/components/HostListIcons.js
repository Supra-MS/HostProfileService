import React from 'react';
import SvgStar from './SvgStar';
import SvgSuperHostIcon from './SvgSuperHostIcon';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

const HostListIcons = ({ hostInfo, reviewCount }) => {
  return (
    <nav className="navbar navbar-expand">
      <div className="navbar-nav mr-auto">
        <div>
          <li className="navbar-item">
            <p className="nav-li">
            <SvgStar />
              {reviewCount} Reviews</p>
          </li>
        </div>

        {hostInfo.host_identity_verified ?
          <div>
            <li className="navbar-item">
              <p className="nav-li"><VerifiedUserIcon style={{"color": "rgb(255,90,95)", "width": "25px", "height": "25px"}} /> Identity verified</p>
            </li>
          </div>
          : null}

        {hostInfo.host_is_superHost ?
          <div>
            <li className="navbar-item">
              <p className="nav-li">
              <SvgSuperHostIcon />
                Superhost</p>
            </li>
          </div>
          : null}
      </div>
    </nav>
  )
};

export default HostListIcons;