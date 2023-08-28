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
// import { News } from './Pages/News';
// import { Documents } from './Pages/Documents';
// import { Celender } from './Pages/Celender';
// import { Reports } from './Pages/Reports';
// import {  Management } from './Pages/Management';
// import { Company } from './Pages/Company';
// import { Contacts } from './Pages/Contacts';
// import { Info } from './Pages/Info';
// import { Finance } from './Pages/Finance';
// import { Works } from './Pages/Works';
// import { Services } from './Pages/Services';
// import { CostOfWork } from './Pages/CostOfWork';
// import { Tariffs } from './Pages/Tariffs';
// import { Question } from './Pages/Question';
import { Menu } from './Pages/Menu';



const router = createBrowserRouter(
  createRoutesFromElements(
   <Route path="/"
   element={<Layout />} 
	errorElement={<Notfoundpage />}>
      <Route index element={<Home />} />
      <Route path="Menu/*" element={<Menu />}>
			
		</Route>
      {/* <Route path="account" element={<Account />}>
        <Route path="Profile" element={<Profile />} />
        <Route path="Orders" element={<Orders />} />
        <Route path="Favourites" element={<Favourites />} />
      </Route> */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
<RouterProvider router={router} />
  </React.StrictMode>,
)
