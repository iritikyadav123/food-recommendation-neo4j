import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingDown, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";

interface hotSellingItemsProps {
  Item: string;
  AprilSales: number;
  MarchSales: number;
  PercentChange: number;
}

// Optional image map
const itemImageMap: Record<string, string> = {
  Shawarma: "/shawarma.jpg",
  Tacos: "/tacos.jpg",
  Falafel: "/falafel.jpg",
  Hummus: "/hummus.jpg",
  "Kale Salad": "/kale-salad.jpg",
  "Zoodle Pasta": "/zoodle-pasta.jpg",
  "Smoothie Bowl": "/smoothie-bowl.jpg",
  "Grilled Chicken": "/grilled-chicken.jpg",
};

const RestaurantAdminHotSellingItem = () => {
  const [hotSellingItems, setHotSellingItems] = useState<hotSellingItemsProps[]>([]);

  useEffect(() => {
    const query = `
      query itemSalesComparison {
        itemSalesComparison(
          restaurantId: "459"
          aprilYear: 2024
          aprilMonth: 4
          marchYear: 2024
          marchMonth: 3
        ) {
          Item
          AprilSales
          MarchSales
          PercentChange
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
        setHotSellingItems(response.data.data.itemSalesComparison);
      } catch (error) {
        console.error("GraphQL query error:", error);
      }
    }
    getItem();
  }, []);

  return (
    <>
      {hotSellingItems.map((item, index) => {
        const imgSrc =
          itemImageMap[item.Item] ??
          `/food-item${(index % 5) + 1}.jpg`; // Fallback image if not mapped

        return (
          <Card
            key={index}
            className="bg-slate-950 border-slate-700 overflow-hidden"
          >
            <div className="h-40 bg-purple-900/20 relative">
              {index === 0 && (
                <div className="absolute top-2 right-2">
                  <Badge className=" text-slate-100">Top Seller</Badge>
                </div>
              )}
              <img
                src={`${imgSrc}`}
                alt={item.Item}
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-slate-100">{item.Item}</CardTitle>
              <CardDescription className="text-slate-400">
                Handmade pasta with truffle cream sauce
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="text-sm text-slate-100">
                  Month Sales: ₹{Intl.NumberFormat('en-IN').format(item.AprilSales)}
                </div>
                <div
                  className={`${
                    item.PercentChange >= 0
                      ? "text-green-500"
                      : "text-red-500"
                  } flex items-center`}
                >
                    {
                        item.PercentChange >= 0
                        ? <TrendingUp className="h-4 w-4 mr-1" /> : <TrendingDown className="h-4 w-4 mr-1"  />
                    }
                  
                  <span>
                    {item.PercentChange >= 0 ? "+" : ""}
                    {item.PercentChange.toFixed(1)}%
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </>
  );
};

export default RestaurantAdminHotSellingItem;
