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
import { Home } from './Pages/Home';
import { News } from './Pages/News';
import { Documents } from './Pages/Documents';
import { Celender } from './Pages/Celender';
import { Reports } from './Pages/Reports';
import { Appeal } from './Pages/Appeal';

const router = createBrowserRouter(
  createRoutesFromElements(
   <Route path="/"
   element={<Layout />} 
	errorElement={<Notfoundpage />}>
      <Route index element={<Home />} />
      <Route path="News" element={<News />} />
      <Route path="Documents" element={<Documents />} />
      <Route path="Celender" element={<Celender />} />
      <Route path="Reports" element={<Reports />} />
      <Route path="Appeal" element={<Appeal />} />
      {/* <Route path="registration" element={<Registration />} /> */}
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
