import Image from "@/components/ui/image"
import { Heart, Star } from "lucide-react"
import { motion } from "framer-motion"
import Navbar from "@/components/Navbar"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

interface footItemProps {
    itemName: string
    soldQuantity: number
    totalOrders: number
    likedCount: number
    likedRating: number
}

export default function CategoryItem() {
    const [foodItems, setFoodItems] = useState<footItemProps[]>([])
    


    const { name } = useParams();

    useEffect(() => {
        const query = `
      query topRatedItemsByCategory {
        topRatedItemsByCategory(categoryName: "Chinese") {
         itemName
         soldQuantity
         totalOrders
         likedCount
         likedRating
        }
      }
    `;

        async function getItem() {
            try {
                const response = await axios.post(
                    "http://localhost:4000/",
                    { query },
                    { headers: { "Content-Type": "application/json" } }
                );
                setFoodItems(response.data.data.topRatedItemsByCategory);
            } catch (error) {
                console.error("GraphQL query error:", error);
            }
        }
        getItem()

    }, []);


    return (
        <div className="min-h-screen text-slate-900 bg-purple-100">
            <Navbar />
            <div className="container mx-auto px-4 py-8">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-400 to-slate-800 text-transparent bg-clip-text mb-4">
                        {name}
                    </h1>
                    <p className="text-purple-700 text-lg md:text-xl max-w-2xl mx-auto">
                        Explore our wide variety of mouthwatering dishes prepared with the finest ingredients
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {foodItems.map((item,index) => (
                        <FoodCard
                            key={index}
                            name={item.itemName}
                            image={'/Falafel.jpg'}
                            rating={item.likedRating}
                            orders={item.soldQuantity}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

interface FoodCardProps {
    name: string
    image: string
    rating: number
    orders: number
}

function FoodCard({ name, image, rating, orders }: FoodCardProps) {
    const navigation = useNavigate();
    return (
        <div className="bg-slate-800 rounded-lg shadow-md p-6 hover:shadow-purple-700/30 hover:shadow-lg transition-all duration-300 flex flex-col items-center border border-slate-700 group">
            <div className="relative w-36 h-36 mb-4 transition-transform duration-300 group-hover:scale-105">
                <Image
                    src={`/food-item${Math.floor(Math.random() * 5) + 1}.jpg`}
                    alt={name}
                    className="rounded-full object-cover border-4 h-full w-full border-slate-700 shadow-sm"
                />
            </div>

            <h3 className="font-semibold text-lg text-center mb-2 text-purple-200">{name}</h3>

            <div className="flex items-center mb-2 justify-between  w-full">
                <div className="flex items-center mr-2 text-pink-400">
                    <Heart className="h-4 w-4" />
                    <span className="ml-1 text-sm font-medium ">{rating}%</span>
                </div>
                <span className="text-sm text-slate-400">{orders} Sold</span>
            </div>

            <button 
             onClick={()=>{navigation(`/restaurantList/?itemName=${name}&cityName=${"Gwalior"}`);}}
             className="mt-auto w-full bg-purple-600 hover:bg-purple-500 text-slate-100 py-2 rounded-md transition-colors duration-300">
                Add to Cart
            </button>
        </div>
    )
}
