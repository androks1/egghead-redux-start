import React from 'react';
import ReactDom from 'react-dom';
// import { createStore } from 'redux';
import createStore from './refs/createStore'

const counter = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(counter);
console.log(store.getState());

const Counter = ({ value, onIncrement, onDecrement }) => (
  <div>
    <h1>{ value }</h1>
    <button onClick={ onIncrement }>+</button>
    <button onClick={ onDecrement }>-</button>
  </div>
);

const render = () => ReactDom.render(
  <Counter 
    value={store.getState()}
    onIncrement={() => 
      store.dispatch({
        type: 'INCREMENT'
      })
    }
    onDecrement={() => 
      store.dispatch({
        type: 'DECREMENT'
      })
    }
  />,
  document.getElementById('App')
);

store.subscribe(render);
render();