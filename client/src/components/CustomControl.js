import React from 'react';
import Select, { components } from 'react-select';
import { stateOptions } from './data';

const ControlComponent = props => (
  <div>
    <div>
      <p className="ctrl-style-p">State / Region</p>
      <components.Control {...props} />
    </div>
  </div>
);

const CustomControl = () => (
  <Select className="controlStyles"
    defaultValue={stateOptions[2]}
    label="Single select"
    options={stateOptions}
    components={{ Control: ControlComponent }}
    theme={theme => ({
      ...theme,
      borderRadius: 0,
      colors: {
        ...theme.colors,
        primary25: '#dcdada',
        primary: 'rgb(255,90,95)',
      },
    })}
  />
);

export default CustomControl;