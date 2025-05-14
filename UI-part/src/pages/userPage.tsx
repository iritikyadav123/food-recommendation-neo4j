
import HeroSection from "../components/HeroSection"
import Navbar from "../components/Navbar"
import { Separator } from "@/components/ui/separator"
import RestaurantSection from "@/components/restaurnatSection"
import FoodItemSection from "@/components/foodItemSection"
import CategorySection from "@/components/category-section"





function UserPage() {

  return (
    <div className="min-h-screen flex flex-col bg-violet-100 text-slate-200">
      <Navbar />
      <HeroSection />
      <FoodItemSection />
      <RestaurantSection />
      <CategorySection />
      

    </div>
  )
}

export default UserPage