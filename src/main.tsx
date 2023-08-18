import React from 'react'
import ReactDOM from 'react-dom/client'

import {
	RouterProvider,
	Route,
	createBrowserRouter,
	createRoutesFromElements,
 } from "react-router-dom";

import './index.css'
import { Layout } from './Layout';
import { Notfoundpage } from "./Pages/Notfoundpage";

const router = createBrowserRouter(
  createRoutesFromElements(
   <Route path="/"
   element={<Layout />} 
	errorElement={<Notfoundpage />}>
      {/* <Route index element={<Home />} /> */}
      {/* <Route path="authorization" element={<Authorization />} />
      <Route path="registration" element={<Registration />} /> */}
      {/* <Route path="account" element={<Account />}>
        <Route path="Profile" element={<Profile />} />
        <Route path="Orders" element={<Orders />} />
        <Route path="Favourites" element={<Favourites />} />
      </Route> */}
      {/* <Route path="*" element={<Notfoundpage />} /> */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
<RouterProvider router={router} />
  </React.StrictMode>,
)
