import { lazy} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import CategoryItem from "./pages/categoryItem";
import Footer from "./components/footer";
import RestaurantAdmin from "./pages/restauranAdmin";



const UserPage = lazy(() => import('./pages/userPage'));
const RestaurantItemList = lazy(() => import('./pages/restaurantItemList'));
const RestaurantList = lazy(() => import('./pages/restaurantList'));


export default function App() { 
  
  return  ( <div className="bg-purple-100 ">
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<UserPage />} />
          <Route path='/restaurantItemList' element={<RestaurantItemList />} />
          <Route path='/restaurantList' element={<RestaurantList />} />
          <Route path='/categoryItem/:name' element={<CategoryItem />} />  
          <Route path='/restaurantAdmin' element={<RestaurantAdmin />} />  
        </Routes>
      </BrowserRouter>
      <div className="mt-20">
        <Footer />
       </div>  
    
  </div>
  )
  
  }
 