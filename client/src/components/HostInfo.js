import React from 'react';
import http from 'axios';
import ReadMoreReact from 'read-more-react';
import SvgSecurity from './SvgSecurity';
import HostListIcons from './HostListIcons';
import HostTitle from './HostTitle';
import CoHost from './CoHost';
import SuperHost from './SuperHost';
import HostVerify from './HostVerify';

var serverUrl = 'http://ec2-3-101-118-169.us-west-1.compute.amazonaws.com:3000';
// var serverUrl = 'http://localhost:3000';

class HostInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      hostInfo: {},
      superHostText: 'Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.',
      securityText: 'To protect your payment, never transfer money or communicate outside of the Airbnb website or app.',
      resTime: 'within an hour',
      reviewCount: 0
    }
    this.getHostInfoById = this.getHostInfoById.bind(this);
    this.getReviewCount = this.getReviewCount.bind(this);
  }

  componentDidMount() {
    let queryString = window.location.search;
    if (!queryString.length) {
      let pathname = window.location.pathname.split('/').pop();
      if (pathname === undefined) {
        this.getHostInfoById(1);
      } else {
        this.getHostInfoById(pathname);
      }
    } else {
      this.getHostInfoById(queryString.split('?').pop());
    }
  }

  getReviewCount() {
    http.get('https://fec-gai-hostprofile.s3-us-west-1.amazonaws.com/json/reviews.json')
      .then(response => {
        console.log('GET response from the AWS server: ', response);
        let reviewCount = response.data.filter((ele, i, self) => {
          return ele.id === this.state.id
        })
        console.log('reviewCount', reviewCount)
        this.setState({
          reviewCount: reviewCount[0].review_count
        })
      });
  }

  getHostInfoById(id) {
    http.get(`${serverUrl}/hostInfo/${id}`)
      .then(response => {
        console.log('GET response from the server by hostId: ', response);
        this.setState({
          hostInfo: response.data
        });
      })
      .catch(err => {
        console.log('Error receiving response from the server by hostId: ', err);
      });
  }

  render() {
    let { hostInfo, superHostText, securityText, resTime, reviewCount } = this.state;
    return (
      <div>
      <hr></hr>
        {(hostInfo.host_languages) ?
          <div>
            <HostTitle hostInfo={hostInfo} />
            <div className="list row">
              <div className="col-left col-md-6">
                <HostListIcons hostInfo={hostInfo} reviewCount={reviewCount} />
                <ReadMoreReact text={hostInfo.host_about} readMoreText="...read more" />
                <br></br>
                <CoHost hostInfo={hostInfo} />
                <br></br>

                <div className="heading6">During your stay</div>
                <ReadMoreReact text={hostInfo.host_messages} min={100} max={200} readMoreText="...read more" />
                <br></br>

                <SuperHost hostInfo={hostInfo} superHostText={superHostText} />
              </div>

              <div className="col-right col-md-6">
                <HostVerify hostInfo={hostInfo} resTime={resTime} />
                <button className="contact-host">Contact host</button>
                <SvgSecurity />
                <p className="security-txt">{securityText}</p>
              </div>
            </div>
          </div>
          : null}
          <hr></hr>
      </div>
    )
  }

};

export default HostInfo;