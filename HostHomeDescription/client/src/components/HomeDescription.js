import React from 'react';
import http from 'axios';

class HomeDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homeDesc: {},
      amenities: []
    }
    this.getHomeDescById = this.getHomeDescById.bind(this);
  }

  componentDidMount() {
    this.getHomeDescById(3);
  }

  getHomeDescById(id) {
    var serverUrl = 'http://localhost:3002'
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

  render() {
    let { homeDesc } = this.state;
    return (
      <div>
        <hr></hr>

        {homeDesc.highlights_section && homeDesc.highlights_section.is_entire_home ?
          <div>
            <p><strong>Entire home</strong></p>
            <p style={{color: 'rgb(113, 113, 113)'}}>You will have the house to yourself.</p>
          </div>
        : null}

        <br></br>

        {homeDesc.highlights_section && homeDesc.highlights_section.has_cancellation_policy ?
        <div>
          {homeDesc.highlights_section.free_cancellation_days === 5 ?
            <div>
              <p><strong>Free cancellation for 5 days before check-in </strong></p>
              <p style={{color: 'rgb(113, 113, 113)'}}>After that, cancel before check-in and get a 50% refund, minus the first night and service fee.</p>
            </div>
          : null}
          {homeDesc.highlights_section.free_cancellation_days === 24 ?
            <div>
              <p><strong>Free cancellation for 24 hours before check-in </strong></p>
              <p style={{color: 'rgb(113, 113, 113)'}}>After that, cancel before check-in and get a full refund, minus the first night and service fee.</p>
            </div>
          : null}
          {homeDesc.highlights_section.free_cancellation_days === 48 ?
            <div>
              <p><strong>Free cancellation for 48 hours </strong></p>
              <p style={{color: 'rgb(113, 113, 113)'}}>After that, cancel up to 7 days before check-in and get a 50% refund, minus the service fee.</p>
            </div>
          : null}
        </div>
        : null}

        <br></br>

        {homeDesc.highlights_section && homeDesc.highlights_section.has_enhanced_clean ?
          <div>
            <p><strong>Enhanced Clean</strong></p>
            <p style={{color: 'rgb(113, 113, 113)'}}>This host committed to a rigorous cleaning protocol developed with leading health and hospitality experts.
            <a>Learn more</a>
            </p>
          </div>
        : null}

        <br></br>

        {homeDesc.highlights_section && homeDesc.highlights_section.has_self_checkIn ?
          <div>
            <p><strong>Self check-in</strong></p>
            <p style={{color: 'rgb(113, 113, 113)'}}>Check yourself in with the keypad.</p>
          </div>
        : null}

        <hr></hr>

        {homeDesc.description_section ?
          <div>
            <p>{homeDesc.description_section.description}</p>

            <br></br>

            {homeDesc.description_section.space_desc.length ?
              <div>
                <p><strong>The Space</strong></p>
                <p>{homeDesc.description_section.space_desc}</p>
              </div>
            : null}

            <br></br>

            {homeDesc.description_section.guest_desc.length ?
              <div>
                <p><strong>Guest Access</strong></p>
                <p>{homeDesc.description_section.guest_desc}</p>
              </div>
            : null}

            <br></br>

            <p><strong>Other things to note</strong></p>
            {homeDesc.description_section.availability_desc.length ?
              <div>
                <p>{homeDesc.description_section.availability_desc}</p>
              </div>
            : null}
            {homeDesc.description_section.getting_around_desc.length ?
              <div>
                <p>{homeDesc.description_section.getting_around_desc}</p>
              </div>
            : null}
            {homeDesc.description_section.neigh_desc.length ?
              <div>
                <p>{homeDesc.description_section.neigh_desc}</p>
              </div>
            : null}

          </div>
        : null}

        <hr></hr>

        {homeDesc.sleeping_arrangements_section ?
        <div>
          <h4>Sleeping arrangements</h4>
        </div>
        : null}

        <hr></hr>

        {homeDesc.amenities_section ?
        <div>
          <h4>Amenities</h4>
          <div>
          {console.log('Amenties check', homeDesc.amenities_section.air_conditioning )}
            {homeDesc.amenities_section.air_conditioning ?
            <div><p>Air conditioning</p></div>
            : null}
            {homeDesc.amenities_section.closet_drawers ?
            <div><p>Closet drawers</p></div>
            : null}
            {homeDesc.amenities_section.dryer ?
            <div><p>{homeDesc.amenities_section.dryer}</p></div>
            : null}
            {homeDesc.amenities_section.essentials ?
            <div><p>Essentials</p></div>
            : null}
            {homeDesc.amenities_section.heating ?
            <div><p>Heating</p></div>
            : null}
            {homeDesc.amenities_section.indoor_fireplace ?
            <div><p>Indoor fireplace</p></div>
            : null}
            {homeDesc.amenities_section.iron ?
            <div><p>Iron</p></div>
            : null}
            {homeDesc.amenities_section.laptop_friendly_workspace ?
            <div><p>Laptop-friendly workspace</p></div>
            : null}
            {homeDesc.amenities_section.private_entrance ?
            <div><p>Private entrance</p></div>
            : null}
            {homeDesc.amenities_section.tv ?
            <div><p>Cable Tv</p></div>
            : null}
            {homeDesc.amenities_section.washer ?
            <div><p>Washer</p></div>
            : null}
            {homeDesc.amenities_section.wiFi ?
            <div><p>Wifi</p></div>
            : null}
          </div>

        </div>
        : null}

      </div> /* end */
    )
  }

}

export default HomeDescription;

/*
Handle amenities client side.
Separate components
*/