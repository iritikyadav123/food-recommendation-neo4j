import Navbar from "@/components/Navbar"
import RestaurantHeader from "@/components/restaurantHeader"
import { Heart, ShoppingBag } from "lucide-react"
import Image from "@/components/ui/image"

import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"
import { useEffect, useState } from "react"
import axios from "axios"
import { useLocation } from 'react-router-dom';


interface menuProps {
  item_id: String
  item_name: String
  number_of_order: Number
  order_item: Number
  liked_item: Number
  disliked_item: Number
  liked_percentage: Number
  price: Number
}


const restaurantItemList =() => {
const [menuItems, getMenuItems] = useState<menuProps[]>([])
const { search } = useLocation();
const query = new URLSearchParams(search);

  const id = query.get('id');
  const name = query.get('name');


  useEffect(() => {
    if (!id) return;
    const query =   `
  query getRestaurantItems {
    getRestaurantItems(restaurantId: "${id}") {
      item_id
      item_name
      number_of_order
      order_item
      liked_item
      disliked_item
      liked_percentage
      price
    }
  }
`;
    async function getItem() {
      try {
        const response = await axios.post(
          "http://localhost:4000/",
          {
            query
          },
          { headers: { "Content-Type": "application/json" } }
        );

        getMenuItems(response.data.data.getRestaurantItems);
        console.log(response.data.data.getRestaurantItems)
      } catch (error) {
        console.error("GraphQL query error:", error);
      }

    }
    getItem();

  }, [id])


    return (
        <div className="min-h-screen flex flex-col bg-violet-100 text-slate-200">
           <Navbar />
           <RestaurantHeader name={String(name)}/>
            {/* Menu Items */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="mb-8 text-center text-2xl font-bold text-slate-900 md:text-3xl">Food Menu</h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {
          menuItems.map((item) => (
            <div
              key={Number(item.item_id)}
              className="group overflow-hidden rounded-xl bg-slate-900 shadow-lg transition-all hover:shadow-purple-900/20"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={`/food-item${Math.floor(Math.random() * 5) + 1}.jpg`}
                  alt={String(item.item_name)}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-xl font-semibold text-white">{item.item_name}</h3>
                <p className="mb-4 text-sm text-slate-400">{"Angus beef patty with caramelized onions and special sauce"}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-purple-400">
                    <ShoppingBag className="h-4 w-4" />
                    <span className="text-sm">{Number(item.order_item)} orders</span>
                  </div>
                  <div className="flex items-center gap-1 text-pink-400">
                    <Heart className="h-4 w-4" />
                    <span className="text-sm">{Number(item.liked_percentage)}% likes</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-bold text-white">₹{item.price.toFixed(2)}</span>
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
        </div>
    )
}


// Sample menu items data


export default restaurantItemList