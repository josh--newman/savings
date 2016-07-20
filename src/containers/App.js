import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

export default class App extends Component {
  render() {
    console.log(this.props);
    return (
      <View>
        <Text>{this.props.example}</Text>
      </View>
    );
  }
};

function mapStateToProps(state) {
  return {
    example: state.state
  }
}

export default connect(mapStateToProps)(App);
