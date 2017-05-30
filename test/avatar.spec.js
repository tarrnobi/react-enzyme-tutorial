import React from 'react';
import {mount, shallow} from 'enzyme';
import {expect} from 'chai';

import Avatar from '../lib/avatar';

describe ('<Avatar/>', function() {
  it('should have an image to display the gravatar', function() {
    const wrapper = shallow(<Avatar/>);
    expect(wrapper.find('img')).to.have.length(1);
  });

  it('should have a prop for email', function() {
    const wrapper = shallow(<Avatar/>);
    wrapper.setProps({email:''});
    expect(wrapper.instance().props.email).to.not.be.undefined;
  });
  it('should have a prop for src', function(){
    const wrapper = shallow(<Avatar/>);
    wrapper.setProps({src:''});
    expect(wrapper.instance().props.src).to.not.be.undefined;
  });
});
