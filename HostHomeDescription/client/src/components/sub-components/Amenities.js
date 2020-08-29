import React from 'react';
import SvgAc from './svg/amenitySvgs/SvgAc';
import SvgDryer from './svg/amenitySvgs/SvgDryer';
import SvgEssential from './svg/amenitySvgs/SvgEssential';
import SvgFire from './svg/amenitySvgs/SvgFire';
import SvgHanger from './svg/amenitySvgs/SvgHanger';
import SvgHeating from './svg/amenitySvgs/SvgHeating';
import SvgIron from './svg/amenitySvgs/SvgIron';
import SvgLaptop from './svg/amenitySvgs/SvgLaptop';
import SvgParking from './svg/amenitySvgs/SvgParking';
import SvgTv from './svg/amenitySvgs/SvgTv';
import SvgWasher from './svg/amenitySvgs/SvgWasher';
import SvgWifi from './svg/amenitySvgs/SvgWifi';

const Amenities = ({ homeDesc }) => {
  return (
    <>
      <hr></hr>
      {homeDesc.amenities_section ?
        <>
        <h4 style={{ "marginBottom": "20px" }}>Amenities</h4>
        <div className="row">
          <div className="col-md-6">
            {homeDesc.amenities_section.air_conditioning ?
              <div>
                <span>
                  <SvgAc />
                  <p className="amenity">Air conditioning</p>
                </span>
              </div>
              :
              <>
                <SvgAc />
                <p className="amenity no-amenity">Air conditioning</p>
              </>}

            {homeDesc.amenities_section.closet_drawers ?
              <div>
                <span>
                  <SvgHanger />
                  <p className="amenity">Hangers</p>
                </span>
              </div>
              :
              <>
                <SvgHanger />
                <p className="amenity no-amenity">Hangers</p>
              </>}

            {homeDesc.amenities_section.dryer ?
              <div>
                <span>
                  <SvgDryer />
                  <p className="amenity">Dryer</p>
                </span>
              </div>
              :
              <>
                <SvgDryer />
                <p className="amenity no-amenity">Dryer</p>
              </>}

            {homeDesc.amenities_section.essentials ?
              <div>
                <span>
                  <SvgEssential />
                  <p className="amenity">Essentials</p>
                </span>
              </div>
              :
              <>
                <SvgEssential />
                <p className="amenity no-amenity">Essentials</p>
              </>}

            {homeDesc.amenities_section.heating ?
              <div>
                <span>
                  <SvgHeating />
                  <p className="amenity">Heating</p>
                </span>
              </div>
              :
              <>
                <SvgHeating />
                <p className="amenity no-amenity">Heating</p>
              </>}

            {homeDesc.amenities_section.indoor_fireplace ?
              <div>
                <span>
                  <SvgFire />
                  <p className="amenity">Indoor fireplace</p>
                </span>
              </div>
              :
              <>
                <SvgFire />
                <p className="amenity no-amenity">Indoor fireplace</p>
              </>}

          </div>

          <div className="col-md-6">

            {homeDesc.amenities_section.iron ?
              <div>
                <span>
                  <SvgIron />
                  <p className="amenity">Iron</p>
                </span>
              </div>
              :
              <>
                <SvgIron />
                <p className="amenity no-amenity">Iron</p>
              </>}

            {homeDesc.amenities_section.laptop_friendly_workspace ?
              <div>
                <span>
                  <SvgLaptop />
                  <p className="amenity">Laptop-friendly workspace</p>
                </span>
              </div>
              :
              <>
                <SvgLaptop />
                <p className="amenity no-amenity">Laptop-friendly workspace</p>
              </>}

            {homeDesc.amenities_section.private_entrance ?
              <div>
                <span>
                  <SvgParking />
                  <p className="amenity">Free parking on premises</p>
                </span>
              </div>
              :
              <>
                <SvgParking />
                <p className="amenity no-amenity">Free parking on premises</p>
              </>}

            {homeDesc.amenities_section.tv ?
              <div>
                <span>
                  <SvgTv />
                  <p className="amenity">Cable Tv</p>
                </span>
              </div>
              :
              <>
                <SvgTv />
                <p className="amenity no-amenity">Cable Tv</p>
              </>}

            {homeDesc.amenities_section.washer ?
              <div>
                <span>
                  <SvgWasher />
                  <p className="amenity">Washer</p>
                </span>
              </div>
              :
              <>
                <SvgWasher />
                <p className="amenity no-amenity">Washer</p>
              </>}

            {homeDesc.amenities_section.wiFi ?
              <div>
                <span>
                  <SvgWifi />
                  <p className="amenity">Wifi</p>
                </span>
              </div>
              :
              <>
                <SvgWifi />
                <p className="amenity no-amenity">Wifi</p>
              </>}
          </div>

        </div>
        <div className="row">
        <button className="see-amenities">See All 26 Amenities</button>
        </div>
        </>
      : null}
    </>
  );
};

export default Amenities;