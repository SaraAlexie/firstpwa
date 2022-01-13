import React, { useEffect } from 'react';
import './App.css';
import OneSignal from 'react-onesignal';
import Location from './components/Location';
import PWAPrompt from 'react-ios-pwa-prompt';
import Testlocalbase from './components/Testlocalbase';

function App() {

  useEffect(() => {
    OneSignal.init({
      appId: process.env.REACT_APP_ONESIGNAL,
    });
  }, []);

  return (
    <div className="App">
      <Location />
      <Testlocalbase />
      <PWAPrompt />
    </div>
  );
}

export default App;
