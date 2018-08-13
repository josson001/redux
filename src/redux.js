/*
* @Author: ww
* @Date:   2018-08-13 10:16:59
* @Last Modified by:   ww
* @Last Modified time: 2018-08-13 10:20:57
*/
import { createStore } from 'redux';
function counter(state = 0, action) {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1;
  case 'DECREMENT':
    return state - 1;
  default:
    return state;
  }
}
let store = createStore(counter);
store.subscribe(() =>
  console.log(store.getState())
);
store.dispatch({ type: 'INCREMENT' });
// 1
store.dispatch({ type: 'INCREMENT' });
// 2
store.dispatch({ type: 'DECREMENT' });
// 1
