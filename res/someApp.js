import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';
import {connect} from 'react-redux';

class SomeAPP extends Component {
  //   state = {
  //     count: 0,
  //   };
  render() {
    return (
      <View>
        <Text> {this.props.name}</Text>
        <Text style={{textAlign: 'center', fontSize: 18, padding: 5}}>
          {this.props.count}
        </Text>
        <Button
          onPress={() => {
            this.props.incCount();
          }}
          title=" increse"></Button>
        <Text>.</Text>
        <Button
          onPress={() => {
            this.props.decCount();
          }}
          title=" decrese"></Button>
      </View>
    );
  }
}
function mapStateToProp(state) {
  return {
    count: state.count,
    name: state.name,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    incCount: () => dispatch({type: 'INCRESE'}),
    decCount: () => dispatch({type: 'DECREASE'}),
  };
}

export default connect(mapStateToProp, mapDispatchToProps)(SomeAPP);
