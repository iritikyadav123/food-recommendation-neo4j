import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"


const UserPage = lazy(() => import('./pages/userPage'));
const RestaurantItemList = lazy(() => import('./pages/restaurantItemList'));
const RestaurantList = lazy(() => import('./pages/restaurantList'));


export default function App() {
  return <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UserPage />} />
          <Route path='/restaurantItemList' element={<RestaurantItemList />} />
          <Route path='/restaurantList' element={<RestaurantList />} /> 
        </Routes>
      </BrowserRouter>
  </div>
 }