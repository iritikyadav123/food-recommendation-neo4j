import { CategoryCard } from "@/components/category-card"
import axios from "axios";
import { useEffect, useState } from "react";

interface categoriesPops {
  name: string
  score: number
  type: string
}

export default function CategorySection() {
   const [loadingRestaurants, setLoadingRestaurants] = useState(false);
   const [categories, setCategories] = useState<categoriesPops[]>([])
  // const categories = [
  //   { name: "Italian", href: "/category/italian" },
  //   { name: "Mexican", href: "/category/mexican" },
  //   { name: "Japanese", href: "/category/japanese" },
  //   { name: "Indian", href: "/category/indian" },
  //   { name: "Chinese", href: "/category/chinese" },
  //   { name: "Thai", href: "/category/thai" },
  //   { name: "Greek", href: "/category/greek" },
  //   { name: "French", href: "/category/french" },
  // ]

   useEffect(() => {
        const query = `
          query recommendedCategories {
            recommendedCategories(userId: "2") {
              name
              score
              type
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
            setCategories(response.data.data.recommendedCategories);
          } catch (error) {
            console.error("GraphQL query error:", error);
          } finally {
            setLoadingRestaurants(false); // stop loading
          }
        }
        getItem()
      
      }, []);

  

  return (
    <main className="mt-10 mb-20">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-12 text-center font-display text-4xl font-bold text-purple-700">
          Explore <span className="text-gray-900">Food Cuisines</span>
        </h1>

        <div className="flex flex-wrap items-center justify-center gap-8">
          {categories.map((category , index) => (
            index < 8 ? <CategoryCard key={category.name} name={category.name} href={`categoryItem/${category.name}`} /> : ""
          ))}
        </div>
      </div>
    </main>
  )
}
