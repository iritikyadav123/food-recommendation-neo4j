
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import RestaurantCard from "../components/restaurantCard"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios";

const RestaurantSection =()=> {
    const [restaurantCat, setRestaurantCat] = useState<String>('trending')
    const navigation = useNavigate();
    const [restaurants, setRestaurants] = useState([])
    const [loadingRestaurants, setLoadingRestaurants] = useState(false);
    


    useEffect(() => {
        const query = `
          query getNearPopularRestaurant {
            getNearPopularRestaurant(cityName: "Gwalior") {
              res_id
              res_name
              ratin
              avg_rait
              orders
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
            setRestaurants(response.data.data.getNearPopularRestaurant);
          } catch (error) {
            console.error("GraphQL query error:", error);
          } finally {
            setLoadingRestaurants(false); // stop loading
          }
        }
        getItem()
      
      }, [restaurantCat]);
      
    return (
        <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto w-full">
        <h2 className="text-3xl font-bold mb-8 text-slate-800">Top Picks For You</h2>

        <Tabs defaultValue="trending" className="w-full">
          <TabsList className="mb-6 bg-slate-700 pl-2 pr-2">
            {/* <TabsTrigger onClick={()=>{setRestaurantCat('nearby')}} value="nearby" className="data-[state=active]:bg-purple-700 data-[state=active]:text-white m-2 text-purple-200">
              Nearby
            </TabsTrigger> */}
            <TabsTrigger onClick={() => { setRestaurantCat('trending') }} value="trending" className={`data-[state=active]:bg-purple-700 data-[state=active]:text-white m-2 text-purple-200 ${restaurantCat == "trending" && "bg-purple-700"}`}>
              Trending
            </TabsTrigger>
            <TabsTrigger
              onClick={() => { setRestaurantCat('recommended') }}
              value="recommended"
              className={`data-[state=active]:bg-purple-700 data-[state=active]:text-white text-stone-50`}
            >
              Recommended
            </TabsTrigger>
          </TabsList>
          <TabsContent value={'trending'} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              
                {loadingRestaurants ? (
                  <p className="col-span-full text-center text-purple-400">Loading restaurants...</p>
                ) : (
                  (restaurants.slice(0, 4)).map((item: any) => (
                    <RestaurantCard
                      key={item.res_id}
                      onClick={() => {
                        navigation(`/restaurantItemList/?id=${item.res_id}&name=${item.res_name}`);
                      }}
                      res_id={item.res_id}
                      res_name={item.res_name}
                      avg_rait={item.avg_rait}
                      orders={item.orders}
                    />
                  ))
                )}
              </div>
          
          </TabsContent>
          <TabsContent value="recommended">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* Recommended content would go here */}
              <p className="col-span-full text-center text-slate-400 py-12">Loading recommendations...</p>
            </div>
          </TabsContent>

        </Tabs>
      </section> 
    )
}

export default RestaurantSection