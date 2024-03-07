
import React, { Fragment, useEffect, useMemo } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {routes} from './routes'
import DefautComponent from './components/DefautComponent/DefautComponent';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7grtQgWAFc5PxSKTbF2BEr4Y5nnO2YVE",
  authDomain: "dnsevent-ff746.firebaseapp.com",
  projectId: "dnsevent-ff746",
  storageBucket: "dnsevent-ff746.appspot.com",
  messagingSenderId: "229101021035",
  appId: "1:229101021035:web:263d80753d13d854e64e2e",
  measurementId: "G-GPX2R23NNC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
 
  return (
    <Router>
      <Routes>
        {routes.map((routes) => {
          const Page = routes.element
          const Layout = routes.isShowHeader ? DefautComponent : Fragment
          return (
            <Route key={routes.path} path={routes.path} element={
            <Layout>
              <Page/>

            </Layout>
         }/>
          )
        })}
        
      </Routes>
     </Router>
  )
}


export default App;
