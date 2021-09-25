import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';
import {connect} from 'react-redux';

class Card extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: 'pink',
          margin: 10,
          padding: 10,
          borderRadius: 5,
        }}>
        <Text> CARD </Text>
        <Text style={{textAlign: 'center', fontSize: 18, padding: 5}}>
          {this.props.count}
        </Text>
        <Button
          title="multiply by 10"
          onPress={() => {
            this.props.multiplyten();
          }}
        />
        <Text>.</Text>
        <Button
          title="Divide by 10"
          onPress={() => {
            this.props.divten();
          }}
        />
      </View>
    );
  }
}
function mapStateToProp(state) {
  return {
    count: state.count,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    multiplyten: () => dispatch({type: 'M10'}),
    divten: () => dispatch({type: 'D10'}),
  };
}
export default connect(mapStateToProp, mapDispatchToProps)(Card);
