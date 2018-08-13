import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
 function render(){
	ReactDOM.render(<App />, document.getElementById('root'));
	registerServiceWorker();
}
render();
console.log(React.store);
React.store.subscribe(render);
