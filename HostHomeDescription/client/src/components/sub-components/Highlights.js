import React from 'react';
import SvgCancelPolicy from './svg/hlSvgs/SvgCancelPolicy';
import SvgClean from './svg/hlSvgs/SvgClean';
import SvgEnhancedClean from './svg/hlSvgs/SvgEnhancedClean';
import SvgEntireHome from './svg/hlSvgs/SvgEntireHome';
import SvgSelfCheckin from './svg/hlSvgs/SvgSelfCheckin';
import SvgSuperhost from './svg/hlSvgs/SvgSuperhost';

const Highlights = ({ homeDesc, hostInfo, superHostText }) => {
  return (
    <>
      <hr></hr>

      {homeDesc.highlights_section && homeDesc.highlights_section.is_entire_home ?
        <div>
        <span>
          <SvgEntireHome />
          <p className="hl-title"><strong>Entire home</strong></p>
          <p className="hl-mini-title">You will have the house to yourself.</p>
        </span>
        </div>
        : null}

      {homeDesc.highlights_section && homeDesc.highlights_section.has_cancellation_policy ?
        <div>
          {homeDesc.highlights_section.free_cancellation_days === 5 ?
            <div>
            <span>
              <SvgCancelPolicy />
              <p className="hl-title"><strong>Free cancellation for 5 days before check-in </strong></p>
              <p className="hl-mini-title">After that, cancel before check-in and get a 50% refund, minus the first night and service fee.</p>
            </span>
            </div>
            : null}
          {homeDesc.highlights_section.free_cancellation_days === 24 ?
            <div>
            <span>
              <SvgCancelPolicy />
              <p className="hl-title"><strong>Free cancellation for 24 hours before check-in </strong></p>
              <p className="hl-mini-title">After that, cancel before check-in and get a full refund, minus the first night and service fee.</p>
            </span>
            </div>
            : null}
          {homeDesc.highlights_section.free_cancellation_days === 48 ?
            <div>
              <span>
                <SvgCancelPolicy />
                <p className="hl-title"><strong>Free cancellation for 48 hours </strong></p>
                <p className="hl-mini-title">After that, cancel up to 7 days before check-in and get a 50% refund, minus the service fee.</p>

              </span>
            </div>
            : null}
        </div>
        : null}


      {homeDesc.highlights_section && homeDesc.highlights_section.has_enhanced_clean ?
        <div>
          <span>
            <SvgEnhancedClean />
            <p className="hl-title"><strong>Enhanced Clean</strong></p>
            <p className="hl-mini-title">This host committed to a rigorous cleaning protocol developed with leading health and hospitality experts.
            <a>Learn more</a>
            </p>

          </span>
        </div>
        : homeDesc.highlights_section && homeDesc.highlights_section.is_clean_tidy ?
          <div>
          <span>
            <SvgClean />
            <p className="hl-title"><strong>Clean and Tidy</strong></p>
            <p className="hl-mini-title">{homeDesc.highlights_section.recent_guests_clean_reviews} recent guests said this place was sparkling clean.</p>

          </span>
          </div>
          : null}

      {hostInfo.isSuperHost ?
        <>
          <SvgSuperhost />
          <p className="hl-title"><strong>{hostInfo.hostName} is a Superhost</strong></p>
          <p className="hl-mini-title">{superHostText}</p>
        </>
      : null}

      {homeDesc.highlights_section && homeDesc.highlights_section.has_self_checkIn ?
        <div>
        <span>
          <SvgSelfCheckin />
          <p className="hl-title"><strong>Self check-in</strong></p>
          <p className="hl-mini-title">Check yourself in with the keypad.</p>
        </span>
        </div>
        : null}
    </>
  );
};

export default Highlights;