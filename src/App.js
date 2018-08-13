import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider,connect } from 'react-redux'
import { createStore } from 'redux'
import Child from './component/child/Child';
import  Father from  './component/father/Father';



// function counter(state = 0, action) {
  // switch (action.type) {
  // case 'INCREMENT':
  //   return state + 1;
  // case 'DECREMENT':
  //   return state - 1; 
  // default:
  //   return state;
  // }
//   console.log(action);
  
//   reg.test(action.type);
//    console.log();
// }
var fun=function(obj){
  return function(state,action){
    var reg= RegExp("@@redux/INIT")
    if(reg.test(action.type)){
      return obj.data;
    }else{
      console.log(state);
      console.log(obj.mutations[action.type](state));
      return Object.assign({},state,obj.mutations[action.type](state));
    }
  }
}
let store = createStore(fun({
    data:{
      name:"veb",
      age:20
    },
    mutations:{
      changeName(){
        return ({
          name :"len"
        })
      },
      changeAge(){
        return ({
          age:"state.age+1"
        })
        
      }
    }
  })
);
console.log(store.getState().name);
function changeName(){
  store.dispatch({
    type:"changeName"
  })
}
function changeAge(){
  store.dispatch({
    type:"changeAge"
  });
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"><Father onClick={changeName}/><Child  /></h1>
        </header>
        <p className="App-intro" onClick={changeName}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
         <span>{store.getState().name}</span>
      </div>
    );
  }
}
console.log(store);
React.store = store;
export default App;
