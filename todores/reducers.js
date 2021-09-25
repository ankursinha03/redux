import todos from './todoReducer';
import visibility from './visibility';

import {combineReducers} from 'redux';

export default combineReducers({
  todos,
  visibility,
});
