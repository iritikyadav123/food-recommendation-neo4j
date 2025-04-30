// name, rating, orders,imgUrl,

import { Badge } from "@/components/ui/badge"
import React, { MouseEvent } from 'react';

import { Card, CardContent } from "@/components/ui/card"
import {  MapPin, Star } from "lucide-react"
import Image from "./ui/image";
let item = 5

interface buttonprops {
  onClick: React.MouseEventHandler<HTMLDivElement> | undefined
  res_id?: String
  res_name?: String
  avg_rait: Number
  orders: Number
  catgory?: [String]

}

const RestaurantCard =({onClick,res_id,res_name,avg_rait,orders}: buttonprops)=> {

    
    return (
        <Card
        onClick={onClick}
        key={Number(res_id)}
        className="overflow-hidden group hover:shadow-lg transition-shadow bg-slate-800 border-slate-700"
      >
        <div className="relative h-48">
          <Image
            src={`./${res_name}.jpg`}
            fill
            alt={`Nearby restaurant ${res_id}`}
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {/* <Badge className="absolute top-2 right-2 bg-purple-700">4.8 ★</Badge> */}
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg mb-1 text-slate-100">{res_name}</h3>
          <div className="flex items-center gap-1 mb-2">
            <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
            <span className="text-sm text-slate-300">{Number(avg_rait)}  ({Number(orders)})</span>
          </div>
          {/* <p className="text-slate-400 text-sm mb-2">{catgory}</p> */}
          <div className="flex items-center text-sm text-slate-400">
            {/* <MapPin className="h-4 w-4 mr-1" /> */}
            {/* <span>1.2 km away</span> */}
          </div>
        </CardContent>
      </Card>
    )
}

export default RestaurantCard