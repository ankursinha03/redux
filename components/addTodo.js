import React, {Component} from 'react';
import {Button, Text, TextInput, View} from 'react-native';

export class AddTodo extends Component {
  state = {
    text: '',
  };
  render() {
    return (
      <View style={{flexDirection: 'row', margin: 10}}>
        <TextInput
          placeholder="ADD TODO"
          onChange={(text) => {
            this.setState({text});
          }}
          style={{borderWidth: 1, flex: 1}}></TextInput>
        <Button title="add" />
      </View>
    );
  }
}

export default AddTodo;
