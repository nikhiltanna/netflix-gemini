import React,{useEffect} from 'react';
import { auth } from  '../utils/firebase.js';
import {  signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {LOGO, avatar, supported_languages} from '../utils/constants.js'
import {  onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/UserSlice';
import { toggleGptSearchView } from '../utils/gptslice.js';
import {changelanguage} from '../utils/configSlice.js';

const Header =()=>{
const navigate = useNavigate();
const dispatch=useDispatch();

const user=useSelector((store)=>store.user)
const SHOWGPT=useSelector((store)=>store.gpt.showGptSearch);
    const handleSignout=()=>
    {
        signOut(auth).then(() => {
          }).catch((error) => {
            navigate("/error");
          });
    }
    const handleGptSearchClick=()=>{
      dispatch(toggleGptSearchView());
    }
    const handlechange=(e)=>{
      dispatch(changelanguage(e.target.value));
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            const {uid,email,displayname} = user;
            dispatch(addUser({uid:uid,email:email,displayname:displayname}));
           navigate("/browse");
            // ...
          } else {
            dispatch(removeUser());
            navigate("/")
          }
        });
      },[])
    return (
        <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex w-full flex-col md:flex-row justify-between'>
        <img  className="w-44 mx-auto md:mx-0"
        src={LOGO}
        alt="logo"/>
        {user && <div className=" flex p-2 justify-between">
          {SHOWGPT && <select className="py-2 px-4 mx-4 my-2 bg-slate-700 text-white "onChange={handlechange}>
           {supported_languages.map((lang)=>( <option key={lang.identifier} value={lang.identifier} >{lang.name}</option>))}
          </select>}
        <button className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg" onClick={handleGptSearchClick}>
{SHOWGPT?("HomePage"):("Gemini Search ")}</button>
            <img className='hidden md:block w-12 h-12' alt="usericon"
            src={avatar}/>
             <button className="font-bold text-white" onClick={handleSignout}> Sign out</button>
        </div>}
       
        </div>
    )
}

export default Header;