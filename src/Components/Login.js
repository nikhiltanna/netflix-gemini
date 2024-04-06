import React,{useState,useRef} from 'react'
import Header from './Header';
import {validateData} from '../utils/validate.js';
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile  } from "firebase/auth";
import { auth } from  '../utils/firebase.js';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/UserSlice';

const Login = () => {
  const [signin,setSignin]= useState(false);
  const [errormessage,setErrormessage]= useState(null);
  const dispatch=useDispatch();
  const toggleform=()=>{
    setSignin(!signin);
  }
  const email=useRef("myname");
  const password=useRef(null);
  const name=useRef("name");
  const handleButtonclick=()=>
  {
    const message= validateData(email.current.value,password.current.value);
    console.log(message);
    setErrormessage(message);
    //console.log(email.current.value,password.current.value);
    if(message) return ;

    if(signin)
    {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value
    }).then(() => {
      const {uid,email,displayName} = auth.currentUser;
      dispatch(addUser({uid:uid,email:email,displayname:displayName}));
      // ...
    }).catch((error) => {
      // An error occurred
      // ...
    });
    
    // ...
  })
  .catch((error) => {
    console.log(error);
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
    }
    else{

      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user; 
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

    }
  }
  return (
    <div>
        <Header/>
        <div className="absolute">
        <img className="h-screen object-cover md:h-full" src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg"
         alt="background">
        </img>
        </div>
        <form className="w-full md:w-3/12 p-12 bg-black absolute my-36 mx-auto text-white right-0 left-0  bg-opacity-80" onSubmit={(e)=>e.preventDefault()}>         
        <h1 className="font-bold text-2xl">{!signin?"Sign In" : "Sign Up"}</h1>
        {signin && ( <input ref={name}type="text" placeholder="Full Name" className="p-2 my-2 w-full  bg-gray-700"/>)}
          <input type="text" placeholder="Email Address" ref ={email} className="p-2 my-2 w-full  bg-gray-700"/>
          <input type="password" placeholder="password"  ref={password} className="p-2 my-2 w-full   bg-gray-700"/>
          <p className='text-red-700 font-bold text-lg  '>{errormessage?errormessage:''}</p>
          <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonclick}> {!signin?"Sign In" : "Sign Up"}</button>
          <p  className="py-4 cursor-pointer  " onClick={toggleform}>{!signin?"New to Netflix? Sign Up":"Already a member? Sign IN"}</p>
        </form>
    </div>
  )
}

export default Login