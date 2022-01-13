import React, { useEffect } from 'react';
//import logo from './logo.svg';
import './App.css';
import OneSignal from 'react-onesignal';
import Location from './components/location';

function App() {

  useEffect(() => {
    OneSignal.init({
      appId: process.env.REACT_APP_ONESIGNAL,
    });
  }, []);

  return (
    <div className="App">
      <Location />
    </div>
  );
}

export default App;
