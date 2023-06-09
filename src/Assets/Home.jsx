import React, { useEffect, useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import '../styles/home.css'
import Library from './Library'
import Feed from'./Feed'
import Trending from './Trending'
import Player from './Player'
import Favourites  from './Favourites'
import Sidebar from '../components/Sidebar/sidebar'
import Login from './auth/login'
import { setClientToken } from '../spotify'

export default function Home() {
   const [token, setToken] = useState("");
 
   useEffect(() => {
     const token = window.localStorage.getItem("token");
     const hash = window.location.hash;
     window.location.hash = "";
     if (!token && hash) {
       const _token = hash.split("&")[0].split("=")[1];
       window.localStorage.setItem("token", _token);
       setToken(_token);
       setClientToken(_token);
     } else {
       setToken(token);
       setClientToken(token);
     }
   }, []);
 
   return !token ? (
     <Login />
   ) : (
     <Router>
       <div className="main-body">
         <Sidebar />
         <Routes>
           <Route path="/" element={<Library />} />
           <Route path="/feed" element={<Feed />} />
           <Route path="/trending" element={<Trending />} />
           <Route path="/player" element={<Player />} />
           <Route path="/favourites" element={<Favourites />} />
         </Routes>
       </div>
     </Router>
   );
 }
 














// export default function Home() {

//    const [token, setToken] = useState("");
//    useEffect(() => {


//       if(localStorage.getItem('token')){
//          setToken(localStorage.getItem('token'))
//          let token = localStorage.getItem('token')
//          setClientToken(token)
//       }
//    }, [])
//   return !token ? (
//    <Login />
//   ) : (
//    <Router>
//       <div className='main-body'> 
//       <Sidebar />
//       <Routes>
//       <Route path="/" element={<Library />} />
//       <Route path="/feed" element={<Feed />} />
//       <Route path="/trending" element={<Trending />} />
//       <Route path="/player" element={<Player />} />
//       <Route path="/Favourites" element={<Favourites />} />
//      </Routes>
//       </div>
//     </Router>
//   )
// }
