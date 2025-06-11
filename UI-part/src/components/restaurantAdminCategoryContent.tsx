import { useEffect, useState } from "react"
import Progress from "./ui/progress"
import axios from "axios";

interface sellingCategoryProps {
    Category: string
    CategoryRevenue: number
    SalesPercentage: number
}

const RestaurantAdminCategoryContent = () => {
    const [sellingCategory, getSellingCategory] = useState<sellingCategoryProps[]>([])

    useEffect(() => {
        const query = `
      query categorySalesBreakdown {
         categorySalesBreakdown(restaurantId: "459", year: 2024, month: 4) {
            Category
            CategoryRevenue
            SalesPercentage
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
                getSellingCategory(response.data.data.categorySalesBreakdown);
                console.log(response.data.data.categorySalesBreakdown)
            } catch (error) {
                console.error("GraphQL query error:", error);
            }
        }
        getItem()

    }, []);
    
    return (
        <>
        {
        sellingCategory.map((item, index) => (
                <div className="w-[90%] ml-4" key={index}>
                <div className="flex justify-between mb-1 text-sm">
                    <span className="text-gray-100 ">{item.Category}</span>
                    <span className="text-purple-400">{item.SalesPercentage}%</span>
                </div>
                <Progress value={item.SalesPercentage} class={"h-2 bg-slate-700"} barColor="bg-purple-500" />
            </div>
        ))
        }
           
        </>
    )
}

export default RestaurantAdminCategoryContent