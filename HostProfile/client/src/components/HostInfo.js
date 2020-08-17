import React from 'react';
import http from 'axios';

class HostInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hostInfo: {},
      superHostText: 'Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.',
      securityText: 'To protect your payment, never transfer money or communicate outside of the Airbnb website or app.',
      resTime: 'within an hour'
    }
    this.getHostInfoById = this.getHostInfoById.bind(this);
  }

  componentDidMount() {
    this.getHostInfoById(2);
  }

  getHostInfoById(id) {
    console.log('Get blog by id hit: ', id)
    var serverUrl = 'http://localhost:3001'
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
    let { hostInfo, superHostText, securityText, resTime } = this.state;
    return (
      <div>

        {(hostInfo.host_languages) ?
          <div>
            <p>Languages: {hostInfo.host_languages[0]} {hostInfo.host_languages[1]} </p>
            <p>Response Rate: {hostInfo.host_response_time} % </p>
            <p>Response Time: {resTime}</p>
            <p>Security Text: {securityText}</p>
            <hr></hr>
          </div>
        : null}

        <p>About: {hostInfo.host_about}</p>
        <p>Co-Host: {`${hostInfo.host_has_coHost}`}</p>
        <p>During your stay: {hostInfo.host_messages}</p>
        {hostInfo.host_is_superHost ?
          <div>
          <hr></hr>
          <p>{hostInfo.host_name} is a Superhost</p>
          <p>{superHostText}</p>
          </div>
         : null}

         {(hostInfo.host_verifications) ?
          <div>
            <p>Email: {hostInfo.host_verifications[0]}</p>
            <p>Mobile: {hostInfo.host_verifications[1]}</p>
            <hr></hr>
            <p>Policy Number: STR-{hostInfo.host_verifications[2].slice(0, 7)}</p>
          </div>
        : null}
        <p>{hostInfo.host_updatedAt}</p>
      </div>
    )
  }

}

export default HostInfo;