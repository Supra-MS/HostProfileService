import React, { Component } from 'react';

export default class ReadMore extends Component {

  render() {
    let { toggleReadMore, toggleDisplay, max, homeDesc } = this.props;
    let homeDescKeys = Object.keys(homeDesc);
    let hasMultipleProps = homeDescKeys.length > 1;
    let ReadMore;
    if (hasMultipleProps) {
      ReadMore = homeDesc[homeDescKeys[1]].split(' ').slice(0, max).join(' ');
    }

    return (
      <>
        {!toggleDisplay ? (
          <>
            <p>{homeDesc.description}</p>
            {hasMultipleProps ?
              <>
                {homeDesc.hasOwnProperty('space_desc') ?
                  <div>
                    <p className="desc"><strong>The Space</strong></p>
                    <p>{ReadMore}</p>
                  </div>
                  : homeDesc.hasOwnProperty('guest_desc') ?
                    <div>
                      <p className="desc"><strong>Guest Access</strong></p>
                      <p>{ReadMore}</p>
                    </div>
                    :
                    <>
                      <p className="desc"><strong>Other things to note</strong></p>
                      <p>{ReadMore}</p>
                    </>
                }
              ...<button className="read-more" onClick={
                  () => {
                    toggleReadMore()
                  }
                } >read more</button>
              </>
              : null}
          </>
        ) : (
            <>
              <div>
                <p>{homeDesc.description}</p>

                {homeDesc.hasOwnProperty('space_desc') ?
                  <div>
                    <p className="desc"><strong>The Space</strong></p>
                    <p>{homeDesc.space_desc}</p>
                  </div>
                  : null}

                {homeDesc.hasOwnProperty('guest_desc') ?
                  <div>
                    <p className="desc"><strong>Guest Access</strong></p>
                    <p>{homeDesc.guest_desc}</p>
                  </div>
                  : null}

                {homeDesc.hasOwnProperty('availability_desc') || homeDesc.hasOwnProperty('getting_around_desc') | homeDesc.hasOwnProperty('neigh_desc') ?
                <>
                <p className="desc"><strong>Other things to note</strong></p>
                {homeDesc.hasOwnProperty('availability_desc') ?
                  <div>
                    <p>{homeDesc.availability_desc}</p>
                  </div>
                  : null}
                {homeDesc.hasOwnProperty('getting_around_desc') ?
                  <div>
                    <p>{homeDesc.getting_around_desc}</p>
                  </div>
                  : null}
                {homeDesc.hasOwnProperty('neigh_desc') ?
                  <div>
                    <p>{homeDesc.neigh_desc}</p>
                  </div>
                  : null}
                </>
                : null}



              </div>
              <button className="read-more" onClick={
                () => {
                  toggleReadMore()
                }
              } >show less</button>
            </>
          )}
        <br></br>
      </>
    )
  }

}