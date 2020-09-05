import 'jsdom-global/register';
import React from 'react';
import sinon from 'sinon';
import HostInfo from '../client/src/components/HostInfo';
import { configure, shallow, mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

configure({
  adapter: new EnzymeAdapter(),
  disableLifecycleMethods: true
});

describe("Test Host Profile component: ", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<HostInfo />);
  });

  test("Check for the Host title: ", () => {
    sinon.spy(HostInfo.prototype, 'componentDidMount');
  });
});