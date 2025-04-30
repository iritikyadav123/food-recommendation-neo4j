
import { Search, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useEffect, useState, useRef } from "react"
import axios from "axios";


const HeroSection = () => {
    const [searchValue, getSearchValue] = useState("")
    const [searchItem, getSearchItem] = useState([])
    const [isSelecting, setIsSelecting] = useState(false)
    const dropdownRef = useRef(null);

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
            query SearchByName($name: String!) {
                searchByName(name: $name) {
                    __typename
                ... on Category {
                categoryName: name
             }
                ... on Restaurant {
                restaurantName: name
            }
                ... on Item {
                    itemName: name
            }
        }
        }
        `;
        const fetchData = async () => {
            try {
                const response = await axios.post(
                    "http://localhost:4000/",
                    {
                        query,
                        variables: { name: searchValue.split(" ").map(w => w[0].toUpperCase() + w.slice(1)).join(" ") },
                    },
                    { headers: { "Content-Type": "application/json" } }
                );

                getSearchItem(response.data.data.searchByName);
                console.log(response.data.data.searchBy)
            } catch (error) {
                console.error("GraphQL query error:", error);
            }
        };

        fetchData();
    }, [searchValue]);
    useEffect(() => {
        const handleClickOrScroll = (e:any) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                getSearchItem([]);
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
        getSearchValue(itemName)
        getSearchItem([])

        setTimeout(() => {
            setIsSelecting(false)
        }, 200)
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
                            onChange={(e) => { getSearchValue(e.target.value) }}
                            value={searchValue}
                            type="text"
                            placeholder="Search for restaurants, cuisines, or dishes"
                            className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent text-slate-200"
                        />
                    </div>
                    <div className="flex items-center px-3 rounded-md border border-slate-700 bg-slate-800">
                        <MapPin className="h-5 w-5 text-slate-400 mr-2" />
                        <Input
                            type="text"
                            placeholder="Location"
                            className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent text-slate-200 w-[150px]"
                        />
                    </div>
                    <Button className="bg-purple-700 hover:bg-purple-800 text-white">Search</Button>


                </div>
                {/* {searchItem.map((item, index) => {
                // let displayName = "";
                // if (item.__typename === "Restaurant") displayName = item.restaurant;
                // else if (item.__typename === "Category") displayName = item.category;
                // else if (item.__typename === "Item") displayName = item.item;

                return (
                    <div
                        onClick={() => choseItem(item.name)}
                        className="hover:bg-slate-800/50 hover:rounded-lg pl-6 cursor-pointer mr-4"
                        key={index}
                    >
                        {item.name}
                    </div>
                );
            })} */}

                {(searchItem.length > 1 && searchValue)  && (
                    <div
                        ref={dropdownRef}
                        className="sticky max-h-xl overflow-y-scroll  left-0 bg-slate-800/90 backdrop-blur w-full max-w-3xl rounded-lg p-2">
                        {searchItem.map((item: SearchResult, index) => {
                            let displayName = "";

                            if (item.__typename === "Category") {
                                displayName = item.categoryName;
                            } else if (item.__typename === "Restaurant") {
                                displayName = item.restaurantName;
                            } else if (item.__typename === "Item") {
                                displayName = item.itemName;
                            }

                            return (
                                <div
                                    onClick={() => choseItem(displayName)}
                                    className="hover:bg-slate-700/90 hover:rounded-lg pl-6 cursor-pointer mr-4"
                                    key={index}
                                >
                                    {displayName}
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