import React, {Component} from 'react';
import {Text, TextInput, View} from 'react-native';

import AddTodo from '../components/addTodo';
export class TodoApp extends Component {
  render() {
    return (
      <View>
        <AddTodo />
      </View>
    );
  }
}

export default TodoApp;
