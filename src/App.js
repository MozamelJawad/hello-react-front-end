import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Greeting from './components/Greeting';
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {

  return (
    <Provider store={store}>
      <Router>
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </Router>
    </Provider>
    
  )
}

export default App;
