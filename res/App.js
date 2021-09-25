import React, {Component} from 'react';
import {Text, TextInput, View} from 'react-native';

import AddApp from '../components/addTodo';
export class App extends Component {
  render() {
    return (
      <View>
        <AddApp />
      </View>
    );
  }
}

export default App;
