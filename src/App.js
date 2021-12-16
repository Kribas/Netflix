import React, { useEffect } from 'react';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import { onAuthStateChanged } from "firebase/auth";
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,userAuth => {
      if(userAuth) {
        //Logged In
        console.log(userAuth);
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      }else {
        //Logged Out
        dispatch(logout);
      }
    })
    return unsubscribe;
  }, [])

  return (
    <div className="app">
      <Router>
        {!user ? (<LoginScreen/>) : (<Routes>
          <Route path="/" element = {<HomeScreen/>}/>
          <Route path="/profile" element= {<ProfileScreen/>} />
        </Routes>) }
        
      </Router>
    </div>
  );
}

export default App;
