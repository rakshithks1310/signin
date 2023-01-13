import React from 'react';
import './index.css';
import  ReactDOM  from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login  from './components/login';
import Home from './components/home';
import Profile from './components/profile';
import Dash from './components/dash';
import Dash2 from './components/dash2';
import Header from './components/header';

ReactDOM.render(
  // <Header/>,
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/profile" element={<Profile />} />
      <Route path='/dash' element={<Dash/>}/>
      <Route path='/dash2' element={<Dash2/>}/>
      <Route path='/header' element={<Header/>}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
// import ButtonAppBar from './components/ButtonAppBar';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//     {/* <ButtonAppBar/> */}
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
