
import { Star, ThumbsUp } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Image from "./ui/image"
import { useEffect, useState } from "react"


interface FoodItemCardProps {
  id: number
  itemName: string
  orderNumbers: number
  likeNumbers: number
  itemUrl?: string
  onClick: React.MouseEventHandler<HTMLDivElement> | undefined
}

const predefinedItems = [
  "Shawarma", "Tacos", "Falafel", "Hummus", 
  "Kale Salad", "Zoodle Pasta", "Smoothie Bowl", "Grilled Chicken"
]

export default function FoodItemCard({ id, itemName, orderNumbers, likeNumbers ,onClick }: FoodItemCardProps) {
  const [imgSrc, setImgSrc] = useState(`/food-item${Math.floor(Math.random() * 5) + 1}.jpg`);
  
  useEffect(() => {
    if (predefinedItems.includes(itemName)) {
      setImgSrc(`/${itemName}.jpg`);
    } else {
      const randomNum = Math.floor(Math.random() * 5) + 1;
      setImgSrc(`/food-item${randomNum}.jpg`);
    }
  }, [itemName]);
  return (
    <Card onClick={onClick} className="overflow-hidden group hover:shadow-lg transition-shadow bg-slate-800 border-slate-700">
      <div className="relative h-48">
        <Image
          src={imgSrc}
          alt={`Trending dish ${id}`}
          // onError={handleImageError}
          fill
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 "
        />
        <Badge className="absolute top-2 right-2 bg-purple-700">Popular</Badge>
        {/* {id % 2 === 0 && <Badge className="absolute top-2 left-2 bg-green-600">Veg</Badge>} */}
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-1 text-slate-100">{itemName}</h3>
        {/* <p className="text-slate-400 text-sm mb-2">Restaurant Name</p> */}
        <div className="flex items-center gap-1 mb-2">
          {/* <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
          <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
          <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
          <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
          {id % 2 === 0 ? (
            <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
          ) : (
            <Star className="h-4 w-4 text-slate-600" />
          )} */}
          <span className="text-sm ml-1 text-slate-300">Orders ({orderNumbers})</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-medium text-purple-400  flex gap-1.5"><ThumbsUp />{likeNumbers}</span>
          {/* {id % 2 !== 0 && (
            // <Badge variant="outline" className="text-xs text-red-400 border-red-600">
            //   Non-Veg
            // </Badge>
          )} */}
        </div>
      </CardContent>
    </Card>
  )
}
