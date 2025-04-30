import Navbar from "@/components/Navbar"
import RestaurantHeader from "@/components/restaurantHeader"
import { Button } from "@/components/ui/button";
import Image from "@/components/ui/image"
import axios from "axios";
import { Star } from "lucide-react"
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const predefinedItems = [
  "Shawarma", "Tacos", "Falafel", "Hummus",
  "Kale Salad", "Zoodle Pasta", "Smoothie Bowl", "Grilled Chicken"
]

interface restaurantsProps {
  item_price?: number
  zip?: string
  restaurant_name?: string
  total_quantity?: number
  total_orders?: number
  liked_item?: number
  like_percentage?: number
  score?: number
}


export default function RestaurantList() {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const [imgSrc, setImgSrc] = useState<string>(`/food-item${Math.floor(Math.random() * 5) + 1}.jpg`);
  const [restaurants, setRestaurants] = useState<restaurantsProps[]>([])
  const [loadingRestaurants, setLoadingRestaurants] = useState(false);

  const itemName = query.get('itemName');
  const cityName = query.get('cityName');

  useEffect(() => {
    if (predefinedItems.includes(String(itemName))) {
      setImgSrc(`/${itemName}.jpg`);
    } else {
      const randomNum = Math.floor(Math.random() * 5) + 1;
      setImgSrc(`/food-item${randomNum}.jpg`);
    }
  }, [itemName]);
  const featuredRestaurant = {
    id: 1,
    name: "Gourmet Fusion",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.8,
    reviews: 243,
    cuisine: "International",
    priceRange: "$$$",
    description:
      "Experience the finest fusion cuisine with our award-winning chefs creating innovative dishes from around the world.",
    address: "123 Culinary Ave, Foodville",
    openHours: "11:00 AM - 10:00 PM",
  }

  const restaurants1 = [
    {
      id: 2,
      name: "Spice Garden",
      image: "/placeholder.svg?height=300&width=400",
      rating: 4.5,
      reviews: 187,
      cuisine: "Indian",
      priceRange: "$$",
      address: "456 Flavor St, Foodville",
    },
    {
      id: 3,
      name: "Pasta Paradise",
      image: "/placeholder.svg?height=300&width=400",
      rating: 4.3,
      reviews: 156,
      cuisine: "Italian",
      priceRange: "$$",
      address: "789 Noodle Rd, Foodville",
    },
    {
      id: 4,
      name: "Sushi Sensation",
      image: "/placeholder.svg?height=300&width=400",
      rating: 4.7,
      reviews: 210,
      cuisine: "Japanese",
      priceRange: "$$$",
      address: "321 Ocean Dr, Foodville",
    },
    {
      id: 5,
      name: "Taco Fiesta",
      image: "/placeholder.svg?height=300&width=400",
      rating: 4.2,
      reviews: 142,
      cuisine: "Mexican",
      priceRange: "$",
      address: "654 Salsa Ln, Foodville",
    },
    {
      id: 6,
      name: "Burger Bliss",
      image: "/placeholder.svg?height=300&width=400",
      rating: 4.4,
      reviews: 198,
      cuisine: "American",
      priceRange: "$$",
      address: "987 Patty Pl, Foodville",
    },
    {
      id: 7,
      name: "Dim Sum Delight",
      image: "/placeholder.svg?height=300&width=400",
      rating: 4.6,
      reviews: 176,
      cuisine: "Chinese",
      priceRange: "$$",
      address: "135 Bamboo St, Foodville",
    },
  ]

  useEffect(() => {
    const query = `
      query getRestaurantLisOfItem {
       getRestaurantLisOfItem(cityName:  "${cityName}", itemName: "${itemName}") {
        item_price
        zip
        restaurant_name
        total_quantity
        total_orders
        liked_item
        like_percentage
        score
    
        }
      }
    `;

    async function getItem() {
      try {
        setLoadingRestaurants(true); // start loading
        const response = await axios.post(
          "http://localhost:4000/",
          { query },
          { headers: { "Content-Type": "application/json" } }
        );
        setRestaurants(response.data.data.getRestaurantLisOfItem);
        console.log(response.data.data.getRestaurantLisOfItem)
      } catch (error) {
        console.error("GraphQL query error:", error);
      } finally {
        setLoadingRestaurants(false); // stop loading
      }
    }
    getItem()

  }, []);

  return (
    <div className="min-h-screen bg-violet-100 text-white">
      <div className="container mx-auto px-4 ">
        <Navbar />
        <div className="relative w-full h-[350px] md:h-[450px] overflow-hidden items-center justify-center">
          <Image
            src={imgSrc}
            alt="Delicious Burger"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />

          {/* Move itemName to bottom */}
          <div className="absolute bottom-8 text-white/70 text-4xl md:text-6xl text-center font-semibold backdrop-blur-2xl p-4">
            {itemName}
          </div>
        </div>



        <div className="mb-12 mt-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 ">Featured Restaurant</h2>
          <div className="bg-gray-800 rounded-xl overflow-hidden shadow-xl border border-purple-700">
            {restaurants[0] && (
              <>
                <div className="md:flex">
                  <div className="md:w-1/2 relative h-64 md:h-auto rounded-XL overflow-hidden" >
                    <Image
                      src={`/food-item${Math.floor(Math.random() * 5) + 1}.jpg`}
                      alt={`${restaurants[0].restaurant_name}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-1/2">
                    <div className="flex justify-between items-start">
                      <h3 className="text-2xl font-bold text-white">{restaurants[0].restaurant_name}</h3>
                      <span className="bg-purple-600 text-white px-2 py-1 rounded text-m font-semibold">₹ 
                        {restaurants[0].item_price}
                      </span>
                    </div>
                    <div className="flex items-center mt-2 mb-4">
                      <div className="flex items-center">
                        <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        <span className="ml-1 text-yellow-400 font-medium">{restaurants[0].score}</span>
                      </div>
                      <span className="mx-2 text-gray-400">•</span>
                      <span className="text-gray-400">{restaurants[0].total_orders} reviews</span>
                      <span className="mx-2 text-gray-400">•</span>
                      {/* <span className="text-purple-300">{restaurants.cuisine}</span> */}
                    </div>
                    <p className="text-gray-300 mb-4">Experience the finest fusion cuisine with our award-winning chefs creating innovative dishes from around the world.</p>
                    <div className="text-gray-400 mb-1">
                      <span className="font-medium text-purple-300">Address: </span>{restaurants[0].zip}
                    </div>
                    <div className="text-gray-400">
                      {/* <span className="font-medium text-purple-300">Hours:</span> {restaurants.openHours} */}
                    </div>
                    <button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300">
                      Reserve a Table
                    </button>
                  </div>
                </div>
              </>
            )

            }
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">All Restaurants</h2>
            <div className="text-gray-900">
              <span className="font-bold">{(restaurants.length) - 1}</span> restaurants available
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(restaurants.slice(1)).map((restaurant, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-purple-800 hover:border-purple-600 transition duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={`/food-item${Math.floor(Math.random() * 5) + 1}.jpg`}
                    alt={restaurant.restaurant_name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">{restaurant.restaurant_name}</h3>
                    <span className="bg-purple-700 text-white px-2 py-1 rounded text-xs font-bold">₹ {restaurant.item_price}</span>
                  </div>
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      <span className="ml-1 text-yellow-400 font-medium">{restaurant.score}</span>
                    </div>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="text-gray-400">{restaurant.total_orders} reviews</span>
                  </div>
                  <div className="flex justify-between items-center">
                    {/* <span className="text-purple-300">{restaurant.cuisine}</span> */}
                    <button className="text-sm bg-purple-600 hover:bg-purple-700 text-white font-medium py-1 px-3 rounded transition duration-300">
                      View Menu
                    </button>
                  </div>
                  <div className="text-gray-400 text-sm mt-2"> {restaurant.zip}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
