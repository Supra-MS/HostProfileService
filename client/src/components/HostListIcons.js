import React from 'react';
import SvgStar from './SvgStar';
import SvgSuperHostIcon from './SvgSuperHostIcon';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

const HostListIcons = ({ hostInfo, reviewCount }) => {
  return (
    <div className="navbar navbar-expand">
      <div className="navbar-nav mr-auto">
        <div>
          <ul className="title-ul">
            <li className="navbar-item">
              <p className="nav-li">
              <SvgStar />
                {reviewCount} Reviews</p>
            </li>
          </ul>
        </div>

        {hostInfo.host_identity_verified &&
          <div>
            <ul className="title-ul">
              <li className="navbar-item">
                <p className="nav-li"><VerifiedUserIcon style={{"color": "rgb(255,90,95)", "width": "25px", "height": "25px"}} /> Identity verified</p>
              </li>
            </ul>
          </div>
          }

        {hostInfo.host_is_superHost &&
          <div>
            <ul className="title-ul">
              <li className="navbar-item">
                <p className="nav-li">
                <SvgSuperHostIcon />
                  Superhost</p>
              </li>
            </ul>
          </div>
          }
      </div>
    </div>
  )
};

export default HostListIcons;