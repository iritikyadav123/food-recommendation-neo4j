import { Button } from "@/components/ui/button"
import { Tabs,  TabsList, TabsTrigger } from "@/components/ui/tabs"
import FoodItemCard from "@/components/food-item-card"
import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const FoodItemSection = () => {
    const [viewAll, setViewAll] = useState(true)
    const [itemCat, SetItemCat] = useState<String>('trending')
    const [trendItems, getTrendItem] = useState([])
    const [loadingItems, setLoadingItems] = useState(false);
    const navigation = useNavigate();

    useEffect(() => {
        const query = itemCat == 'trending' ? `
          query getMostPopularFoodItem {
            getMostPopularFoodItem {
              item_name
              orderCount
              likedTotal
            }
          }
        ` : `
          query getSuggestedItems {
            getSuggestedItems(userId: "1") {
              item_name
              itemCategory
              orderCount
              likedTotal
            }
          }
        `;
    
        async function getItem() {
          try {
            setLoadingItems(true); // start loading
            const response = await axios.post(
              "http://localhost:4000/",
              { query },
              { headers: { "Content-Type": "application/json" } }
            );
            itemCat == 'trending'
              ? getTrendItem(response.data.data.getMostPopularFoodItem)
              : getTrendItem(response.data.data.getSuggestedItems);
          } catch (error) {
            console.error("GraphQL query error:", error);
          } finally {
            setLoadingItems(false); // stop loading
          }
        }
    
        getItem();
      }, [itemCat]);
    return (
        <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto w-full">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-slate-800">Trending Dishes Near You</h2>
                <Button onClick={() => (setViewAll(!viewAll))} variant="outline" className="border-purple-700 text-purple-400 hover:bg-purple-900/30 w-28">
                    {!viewAll ? 'View Less' : 'View All'}
                </Button>
            </div>

            <Tabs defaultValue="nearby" className="w-full">
                <TabsList className="mb-6 bg-slate-700 pl-2 pr-2">
                    <TabsTrigger onClick={() => { SetItemCat('trending') }} value="trending" className={`data-[state=active]:bg-purple-700 data-[state=active]:text-white m-2 text-purple-200 ${itemCat == "trending" && "bg-purple-700"}`}>
                        Trending
                    </TabsTrigger>
                    <TabsTrigger
                        onClick={() => { SetItemCat('recommended') }}
                        value="recommended"
                        className={`data-[state=active]:bg-purple-700 data-[state=active]:text-white m-2 text-purple-200 ${itemCat == "recommended" && "bg-purple-700"}`}
                    >
                        Recommended
                    </TabsTrigger>
                </TabsList>
            </Tabs>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {loadingItems ? (
                    <p className="col-span-full text-center text-purple-400">Loading dishes...</p>
                ) : (
                    (viewAll ? trendItems.slice(0, 4) : trendItems).map((item: any, index) => (
                        <FoodItemCard
                            onClick={()=>{navigation(`/restaurantList/?itemName=${item.item_name}&cityName=${"Gwalior"}`);}}
                            key={index}
                            id={index}
                            itemName={item.item_name}
                            orderNumbers={item.orderCount}
                            likeNumbers={item.likedTotal}
                        />
                    ))
                )}
            </div>
        </section>
    )
}

export default FoodItemSection