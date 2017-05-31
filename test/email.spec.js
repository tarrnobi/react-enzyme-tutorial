import React from 'react';
import {mount, shallow} from 'enzyme';
import {expect} from 'chai';

import Email from '../lib/email';
function test_handleEmailChange(){

};
function test_fetchGravatar(){

};
describe('<Email>', function(){
  const wrapper = shallow(<Email/>);
  it('should have an input for the email', function() {
    // console.log(wrapper.instance());
    expect(wrapper.find('input')).to.have.length(1);
  });
  it('should have a button', function(){
    const wrapper = shallow(<Email/>);
    expect(wrapper.find('button')).to.have.length(1);
  });
  it('should have a prop for handleEmailChange', function(){
    const wrapper = shallow(
      <Email handleEmailChange = {test_handleEmailChange} />
    );
    expect(wrapper.instance().props.handleEmailChange).to.not.be.undefined;
  });
  it('should have a prop for fetchGravatar', function(){
    const wrapper = shallow(<Email fetchGravatar={test_fetchGravatar}/>);
    expect(wrapper.instance().props.fetchGravatar).to.not.be.undefined;
  });

});
