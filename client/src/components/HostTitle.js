import React from 'react';
import SvgSuperHost from './SvgSuperHost';
import moment from 'moment';

const HostTitle = ({ hostInfo }) => {
  return (
    <div>
      {hostInfo.host_has_profile_pic && hostInfo.host_is_superHost ?
        <div>
          <img className="host-img" src="https://res.cloudinary.com/dumikauss/image/upload/v1596857391/waterBnB-reviewers/240x240_xo9yef.jpg" height="90px" width="90px"></img>
          <SvgSuperHost />
        </div>
        : (!hostInfo.host_has_profile_pic && hostInfo.host_is_superHost) ?
          <div>
            <img className="host-img" src="https://fec-gai-hostprofile.s3-us-west-1.amazonaws.com/icons/airbnb.png" height="90px" width="90px"></img>
            <SvgSuperHost />
          </div>
          : hostInfo.host_has_profile_pic ?
            <div>
              <img className="host-img" src="https://res.cloudinary.com/dumikauss/image/upload/v1596857391/waterBnB-reviewers/240x240_xo9yef.jpg" height="90px" width="90px"></img>
            </div>
            : !hostInfo.host_has_profile_pic ?
              <div>
                <img className="host-img" src="https://fec-gai-hostprofile.s3-us-west-1.amazonaws.com/icons/airbnb.png" height="90px" width="90px"></img>
              </div>
              : null}

      <span className="host-title">Hosted by {hostInfo.host_name}</span>
      {hostInfo.host_languages ?
        <div>
          <span className="title-time">Joined in {moment(hostInfo.createdAt.split('').slice(0, 10).join('').split('-').join(''), 'YYYYMMDD').format("MMMM YYYY")}</span>
        </div>
        : null}
    </div>
  )
};

export default HostTitle;