import React from 'react';
import SvgAir from './svg/sleepSvgs/SvgAir';
import SvgCouch from './svg/sleepSvgs/SvgCouch';
import SvgDouble from './svg/sleepSvgs/SvgDouble';
import SvgHammock from './svg/sleepSvgs/SvgHammock';
import SvgKing from './svg/sleepSvgs/SvgKing';
import SvgQueen from './svg/sleepSvgs/SvgQueen';
import SvgSingle from './svg/sleepSvgs/SvgSingle';
import SvgSofa from './svg/sleepSvgs/SvgSofa';
import SvgToddler from './svg/sleepSvgs/SvgToddler';
import SvgWater from './svg/sleepSvgs/SvgWater';

const SleepSvg = ({ space }) => {
  return (
    <>
      {space.map((bedType, index, self) => {
        if (bedType.toLowerCase().includes('double')) {
          return (
            <span className="bedtype" key={index}>
              <SvgDouble />
            </span>
          );
        }
        if (bedType.toLowerCase().includes('single')) {
          return (
            <span className="bedtype" key={index}>
              <SvgSingle />
            </span>
          );
        }
        if (bedType.toLowerCase().includes('queen')) {
          return (
            <span className="bedtype" key={index}>
              <SvgQueen />
            </span>
          );
        }
        if (bedType.toLowerCase().includes('king')) {
          return (
            <span className="bedtype" key={index}>
              <SvgKing />
            </span>
          );
        }
        if (bedType.toLowerCase().includes('bunk')) {
          return (
            <span className="bedtype" key={index}>
              <SvgSofa />
            </span>
          );
        }
        if (bedType.toLowerCase().includes('air')) {
          return (
            <span className="bedtype" key={index}>
              <SvgAir />
            </span>
          );
        }
        if (bedType.toLowerCase().includes('toddler')) {
          return (
            <span className="bedtype" key={index}>
              <SvgToddler />
            </span>
          );
        }
        if (bedType.toLowerCase().includes('hammock')) {
          return (
            <span className="bedtype" key={index}>
              <SvgHammock />
            </span>
          );
        }
        if (bedType.toLowerCase().includes('water')) {
          return (
            <span className="bedtype" key={index}>
              <SvgWater />
            </span>
          );
        }
        if (bedType.toLowerCase().includes('crib')) {
          return (
            <span className="bedtype" key={index}>
              <SvgCouch />
            </span>
          );
        }
      })}
    </>
  );
};

export default SleepSvg;