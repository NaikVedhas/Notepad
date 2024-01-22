import './App.css';
import React, { useEffect } from 'react';
import { WagmiConfig, createConfig } from "wagmi";
import { ConnectKitProvider, ConnectKitButton, getDefaultConfig } from "connectkit";
import {sepolia} from "wagmi/chains";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home'
import Notes from './notes';
import SignUp from './signup';
import Login from './login';







const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    alchemyId: process.env.INFURA_ID, // or infuraId
    walletConnectProjectId: process.env.WALLETCONNECT_PROJECT_ID,

    // Required
    appName: "Notes 3.0",

    // Optional
    appDescription: "Your App Description",
    appUrl: "http://localhost:3000/", // your app's url
    appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
  }),
);





function App() {
  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider>
      <Router>
      <Routes>
        

        {/* Add a catch-all route for the root path   <Route path='*' element={<Signup />} />*/}
        <Route path='*' element={<Home/>} />
        <Route path='/notes' element={<Notes />} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/login' element={<Login/>} />
       
      </Routes>
    </Router>
      </ConnectKitProvider>
    </WagmiConfig>
  );
}

export default App;
