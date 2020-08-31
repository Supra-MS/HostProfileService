import React from 'react';
import http from 'axios';
import Highlights from './sub-components/Highlights';
import Description from './sub-components/Description';
import Amenities from './sub-components/Amenities';
import SleepingArrangements from './sub-components/SleepingArrangements';

class HomeDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homeDesc: {},
      amenities: [],
      superHostText: 'Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.',
      hostInfo: {
        hostId: 1,
        isSuperHost: false,
        hostName: ''
      }
    }
    this.getHomeDescById = this.getHomeDescById.bind(this);
    this.getHostInfoById = this.getHostInfoById.bind(this);
    this.toggleReadMore = this.toggleReadMore.bind(this);
  }

  componentDidMount() {
    /* this.getHostInfoById(this.props.match.params.id); */
    let queryString = window.location.search;
    console.log('query string home', queryString)
    if (!queryString.length) {
      let pathname = window.location.pathname.split('/').pop();
      console.log('/ home')
      this.getHostInfoById(pathname);
      this.getHomeDescById(pathname);
    } else {
      console.log('? home')
      this.getHostInfoById(queryString.split('?').pop());
      this.getHomeDescById(queryString.split('?').pop());
    }
    // console.log('props: ', this.props)
    // let pathname = this.props.location.pathname.split('/').pop();

    // this.getHostInfoById(pathname);
    // this.getHostInfoById(this.state.id);

  }

  getHostInfoById(id) {
    console.log('host id: ', id)
    var serverUrl = 'http://localhost:3000'
    http.get(`${serverUrl}/hostInfo/${id}`)
      .then(response => {
        console.log('GET response from the server by hostInfo Id: ', response.data);
        let hostInfoObj = {
          hostId: response.data.id,
          isSuperHost: response.data.host_is_superHost,
          hostName: response.data.host_name
        }
        this.setState({
          hostInfo: hostInfoObj
        });
        return hostInfoObj;
      })
      // .then((response) => {
      //   this.getHomeDescById(response.hostId);
      // })
      .catch(err => {
        console.log('Error receiving response from the server by hostInfo Id: ', err);
      });
  }

  getHomeDescById(id) {
    var serverUrl = 'http://localhost:3000'
    http.get(`${serverUrl}/rooms/${id}`)
      .then(response => {
        console.log('GET response from the server by homeDesc Id: ', response.data);
        this.setState({
          homeDesc: response.data
        });
      })
      .catch(err => {
        console.log('Error receiving response from the server by homeDesc Id: ', err);
      });
  }

  toggleReadMore() {
    let { toggleDisplay } = this.state;
    this.setState({
      toggleDisplay: !toggleDisplay
    });
  }

  render() {
    let { homeDesc, toggleDisplay, hostInfo, superHostText } = this.state;
    return (
      <div>
        <Highlights homeDesc={homeDesc} hostInfo={hostInfo} superHostText={superHostText} />
        <Description homeDesc={homeDesc} toggleReadMore={this.toggleReadMore} toggleDisplay={toggleDisplay} />
        <SleepingArrangements homeDesc={homeDesc} />
        <Amenities homeDesc={homeDesc} />
      </div>
    )
  }

}

export default HomeDescription;

/*
let randomNumber = Math.floor(Math.random() * (100) - 1 + 1);
    let queryString = window.location.search;
    console.log('query string', queryString)
    if (!queryString.length) {
      let pathname = window.location.pathname.split('/').pop();
      this.getHostInfoById(pathname);
    } else {
      this.getHostInfoById(queryString.split('?').pop());
    }
*/