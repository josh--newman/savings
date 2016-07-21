import React, { View, Text, StyleSheet } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';
// import { App } from '../../containers/src/App';

const Test = React.createClass({
  render() {
    return (
      <View>
        <Text>enzyme</Text>
        <Text>rules</Text>
      </View>
    )
  }
});

describe('App', () => {
  it('should render', () => {
    const wrapper = shallow(<Test/>);
    expect(wrapper.find(View)).to.have.length(1);
  });

  it('should render 2 view components', () => {
    const wrapper = shallow(<Test/>);
    expect(wrapper.find(Text)).to.have.length(2);
  });
});
