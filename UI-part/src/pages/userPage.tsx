
import HeroSection from "../components/HeroSection"
import Navbar from "../components/Navbar"
import { Separator } from "@/components/ui/separator"
import RestaurantSection from "@/components/restaurnatSection"
import FoodItemSection from "@/components/foodItemSection"
import CategorySection from "@/components/category-section"
import {MessageCircle} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Chatbot from "@/components/chatbot"
import { useRecoilState} from "recoil"
import { chatbotItem } from "@/atom/atom"






function UserPage() {
  const [todoList, setTodoList] = useRecoilState(chatbotItem);
  const handleMessageClick = () => {
    setTodoList(!todoList)
  }

  return (
    <div className="min-h-screen flex flex-col bg-violet-100 text-slate-200">
      <Navbar />
      {todoList && <Chatbot isOpen={todoList} onClose={()=>{setTodoList(!todoList)}} />}
      <HeroSection />
      <FoodItemSection />
      <RestaurantSection />
      <CategorySection />
       <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={handleMessageClick}
          className="bg-purple-600 hover:bg-purple-700 text-white w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
          aria-label="Open chat"
        >
          <MessageCircle className="h-8 w-8" />
        </Button>
      </div>
    </div>

  )
}

export default UserPage