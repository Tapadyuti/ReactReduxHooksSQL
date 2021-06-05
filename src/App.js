import React from 'react';
import { Provider } from 'react-redux';
import store from "./redux/store";
import './App.css';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer></CakeContainer>
        <HooksCakeContainer></HooksCakeContainer>
      </div>
    </Provider>
  );
}



export default App;
