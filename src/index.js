import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Components/Signup';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home';
import Login from './Components/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "Signup",
    element: <Signup/>,
  },
  {
    path: "Login",
    element: <Login/>,
  },
  {
    path: "Home",
    element: <Home/>,
  },
  {
    path: "Login/Home",
    element: <Home/>,
  },
  {
    path: "Signup/Home",
    element: <Home/>,
  },
  {
    path: "Login/Signup",
    element: <Signup/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
   <RouterProvider router={router}/>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
