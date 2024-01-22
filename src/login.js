import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import{ethers,BigNumber} from "ethers";
import { ConnectKitButton } from "connectkit";

// import abijson

// const metamask = async() => {

//   const provider =new ethers.providers.Web3Provider(window.ethereum);
//   const signer = provider.getSigner();
//   const contracts = new ethers.Contract(wallet_address,abi,signer);
//   contracts.

// }



const Login = () => {
  const navigate = useNavigate();

  const redirectToNotepad = () => {
    // Redirect to notepad.js or the desired route
    navigate('/notes');
  };
    return (
      <>
        {/*
          This example requires updating your template:
        
          
          <html class="h-full bg-white">
          <body class="h-full">
          
        */}
        <div className="flex min-h-full">
      {/* Left side (Image) */}
      <div className="w-3/5 bg-gray-200">
        {/* Placeholder image */}
        <img
          className="object-cover w-full h-full"
          src="https://via.placeholder.com/800x600"  // Replace with your actual image URL
          alt="Placeholder Image"
        />
      </div>

      {/* Right side (Signup Form) */}
      <div className="w-2/5 flex flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Log in to your account
          </h2>
        </div>
  
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
          <div>
          <ConnectKitButton />
          </div>
          <br/>
          <div>
          <button
        type="button"
        onClick={redirectToNotepad}
        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Add your content
      </button>
          </div>

  

            </form>
  
      
          </div>
        </div>
        </div>
      </>
    )
    }
    export default Login;