//-------------code common to any JS application----------------//
function createStore(reducer) {
  let state;

  function dispatch(action){
    state = reducer(state, action);
    render();
  };
  //state variable can now access dispatch

  function getState() {
    return state;
  }

  return { 
    dispatch,
    getState
  }
  //dispatch and state can be used in rest of application
}
//-----------------------//


//---------------code applies to our app-------------------------//
function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return { count: state.count + 1 };

    default:
      return state;
  }
};

function render() {
  let container = document.getElementById('container');
  container.textContent = store.getState().count;
};



let button = document.getElementById('button');
button.addEventListener('click', function() {
    store.dispatch({ type: 'INCREASE_COUNT' });
})


let store = createStore(reducer);
store.dispatch({ type: '@@INIT' })
//------------------------//


