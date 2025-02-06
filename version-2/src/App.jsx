import './App.css'
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './pages/Home';
import CountryDetails from './pages/CountryDetails';
import SavedCountries from './pages/SavedCountries';
import  Header  from "./customComponents/Header.jsx";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAX0lza60oXwqW_DR2WVmr0guiKytBXC-I",
  authDomain: "countries-api-project-e718c.firebaseapp.com",
  databaseURL: "https://countries-api-project-e718c-default-rtdb.firebaseio.com",
  projectId: "countries-api-project-e718c",
  storageBucket: "countries-api-project-e718c.firebasestorage.app",
  messagingSenderId: "608276541140",
  appId: "1:608276541140:web:e72e9baeb6b9c6f1045541",
  measurementId: "G-8XQY4YM50N"
};


function App( ) {
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const [countries, setCountries] = useState([]);
console.log(analytics)

  const apiCall = () => {
      fetch('https://restcountries.com/v3.1/all')
          .then(response => response.json())
          .then(data => {
              console.log(data)
              setCountries(data)
          })
          .catch(error => setError('Error: ' + error.message));
  }
  

  useEffect(() => {
      apiCall();
  }, []);


  


  return (
    <>
    
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<Home countries= {countries}/>}  />
          <Route path="/SavedCountries" element={<SavedCountries countries= {countries}/>} />
          <Route path="/Country/:individualCountry" element={<CountryDetails countries= {countries}/>} />
        </Routes>
      </div>
      
    </>
  );
}

export default App;
