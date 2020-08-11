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
      })
      .catch(err => {
      });
  }

  render() {
    let { hostInfo, superHostText, securityText, resTime } = this.state;
    return (
      <div>
        <p>Security Text: {securityText}</p>
        <p>{superHostText}</p>
        <p>{resTime}</p>
      </div>
    )
  }

}

export default HostInfo;