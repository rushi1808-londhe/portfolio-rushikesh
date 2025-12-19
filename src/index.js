import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import 'react-icons/fa';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'
import App from './App';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Error from './components/Error.js';
import Skills from './components/Skills.js';
import AboutMe from './components/AboutMe.js';
import Achivement from './components/Achivement.js';
import Resume from './components/Resume.js';
import Project from './components/Project.js';
import Experience from './components/Experience.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
let routes = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<Error/>,
    children:[
      {
        path:'/skills',
        element:<Skills/>
      },
      {
        path:'/resume',
        element:<Resume/>
      },
      {
        path:'/project',
        element:<Project/>
      },
      {
        path:'/experience',
        element:<Experience/>
      },
      {
        path:'/achievement',
        element:<Achivement/>
      },
      {
        path:'/',
        element:<AboutMe/>
      }
    ]
  }
])
root.render(
    <RouterProvider router={routes}></RouterProvider>
);


