
import { Search, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useEffect, useState, useRef } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const cities = [
    "Gwalior",
    "Shivpuri",
    "Rewa",
    "Jabalpur",
    "Morena",
    "Guna",
    "Ujjain",
    "Indore",
    "Ratlam",
    "Bhopal",
];


const HeroSection = () => {
    const [searchValue, setSearchValue] = useState("");
    const [searchItem, setSearchItem] = useState<any[]>([]);
    const [isSelecting, setIsSelecting] = useState(false)
    const [searchCity, setSearchCity] = useState<string>('Gwalior');
    const [selectedValue, setSelectedValue] = useState<any>({})
    const dropdownRef = useRef(null);
    const navigation = useNavigate();

    type CategoryResult = {
        __typename: "Category";
        categoryName: string;

    };

    type RestaurantResult = {
        __typename: "Restaurant";
        restaurantName: string;
    };

    type ItemResult = {
        __typename: "Item";
        itemName: string;
    };

    type SearchResult = CategoryResult | RestaurantResult | ItemResult;



    useEffect(() => {
        if (!searchValue) return;

        const query = `
            query searchByName1($itemName: String!, $cityName: String!) {
                searchByName1(itemName: $itemName, cityName: $cityName) {
                  itemName
                  itemLabel
                  itemId
               }
        }
        `;
        const fetchData = async () => {
            try {
                const response = await axios.post(
                    "http://localhost:4000/",
                    {
                        query,
                        variables: { itemName: searchValue.split(" ").map(w => w[0].toUpperCase() + w.slice(1)).join(" "),cityName: searchCity },
                    },
                    { headers: { "Content-Type": "application/json" } }
                );
                setSearchItem(response.data.data.searchByName1);
                console.log(response.data.data.searchByName1)
            } catch (error) {
                console.error("GraphQL query error:", error);
            }
        };

        const timeout = setTimeout(() => {
            if (searchValue) {
                fetchData();
            }
        }, 300);

        return () => clearTimeout(timeout);
    }, [searchValue]);

    useEffect(() => {
        const handleClickOrScroll = (e: any) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setSearchItem([]);
            }
        };

        window.addEventListener("click", handleClickOrScroll);
        window.addEventListener("scroll", handleClickOrScroll);

        return () => {
            window.removeEventListener("click", handleClickOrScroll);
            window.removeEventListener("scroll", handleClickOrScroll);
        };
    }, []);

    const choseItem = (itemName: string) => {
        setIsSelecting(true)
        setSearchValue(itemName)

        setTimeout(() => {
            setIsSelecting(false)
        }, 200)
    }


    const userSerachItem = () => {
        if (selectedValue && selectedValue.itemLabel === 'Item') {
            navigation(`/restaurantList/?itemName=${selectedValue.itemName}&cityName=${searchCity.trim()}`)
        }
        else if (selectedValue && selectedValue.itemLabel === 'Restaurant') {
            navigation(`/restaurantItemList/?id=${selectedValue.itemId}&name=${selectedValue.itemName}`);
        }

    }

    const userSelectItem = (userSelectItem: any) => {
        setSelectedValue(userSelectItem)
        setSearchValue(userSelectItem.itemName)
        setSearchItem([])
    }



    return (
        <section className="relative w-full h-[500px]">
            <img
                src="/heroSection.jpg?height=500&width=1920"
                alt="Delicious food"
                width={1920}
                height={500}
                className="object-cover w-full h-full brightness-50"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Discover Amazing Food Near You</h1>
                <p className="text-xl mb-8 text-center max-w-2xl">
                    Find the best restaurants and dishes based on your preferences
                </p>

                <div className="w-full max-w-3xl bg-slate-800/90 backdrop-blur rounded-lg p-2 flex flex-col md:flex-row gap-2 border border-slate-700">
                    <div className="flex-1 flex items-center px-3 rounded-md border border-slate-700 bg-slate-800">
                        <Search className="h-5 w-5 text-slate-400 mr-2" />
                        <Input
                            onChange={(e) => { choseItem(e.target.value) }}
                            value={searchValue}
                            type="text"
                            placeholder="Search for restaurants, cuisines, or dishes"
                            className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent text-slate-200"
                        />
                    </div>
                    <div className="flex items-center px-3 rounded-md border border-slate-700 bg-slate-800">
                        <MapPin className="h-5 w-5 text-slate-400 mr-2" />
                        {/* <Input
                           
                            
                            type="text"
                            placeholder="Location"
                            className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent text-slate-200 w-[150px]"
                        /> */}
                        <select
                            value={searchCity}
                            onChange={(e) => setSearchCity(e.target.value)}
                            className="border-0 border-slate-800 focus-visible:ring-0 focus-visible:ring-offset-0  text-slate-400 w-[150px] border-none bg-slate-800"
                        >
                            <option value="" disabled>Select city</option>
                            {cities.map((city) => (
                                <option key={city} value={city}  >
                                    {city}
                                </option>
                            ))}
                        </select>

                        {/* {selectedCity && (
                            <p className="mt-4 text-slate-400 text-lg">
                               <strong>{selectedCity}</strong>
                            </p>
                        )} */}
                    </div>
                    <Button onClick={userSerachItem} className="bg-purple-700 hover:bg-purple-800 text-white">Search</Button>


                </div>

                {(searchItem.length > 0 && searchValue && !isSelecting) && (
                    <div
                        ref={dropdownRef}
                        className="sticky max-h-xl overflow-y-scroll  left-0 bg-slate-800/90 backdrop-blur w-full max-w-3xl rounded-lg p-2">
                        {searchItem.map((item: any, index) => {

                            return (
                                <div
                                    onClick={() => userSelectItem(item)}
                                    className="hover:bg-slate-700/90 hover:rounded-lg pl-6 cursor-pointer mr-4"
                                    key={index}
                                >
                                    {item.itemName}
                                </div>
                            );
                        })}
                    </div>
                )}

            </div>
        </section>
    )
}

export default HeroSection