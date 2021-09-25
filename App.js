/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Switch,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import SomeAPP from './res/someApp';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Card from './res/card';
import reducer from './res/redux/reducer';

import TodoApp from './res/todoApp';
const store = createStore(reducer);

// import store from './todores/store';
const App = () => {
  return (
    <Provider store={store}>
      <View>
        <Text>hello</Text>

        <SomeAPP></SomeAPP>
      </View>
      <Card />
    </Provider>
  );
};

const styles = StyleSheet.create({
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
