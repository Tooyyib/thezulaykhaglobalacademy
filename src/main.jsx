import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.jsx'
import './index.css'
import './App.css'


// import { createBrowserRouter, RouterProvider,} from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home/>,
//   },
//   {
//     path: "/App",
//     element: <Home/>,
//   },
// ]);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
