import {
  BarChart,
  CreditCard,
  Users
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from "react"
import axios from "axios"
interface restaurantMatrixProps {
  restaurantName: string
  currentAmount: number
  currentOrder: number
  prevOrder: number
  currentAvgOrder: number
  prevAvgOrder: number
  satisfiedCustomer: number
  lastMonthsatisfiedCustomer: number
  revenueChangePercent: number
  orderChangePercent: number
  avgOrderValueChangePercent: number
  satifycoutomerSenrio: number
}

const RestaurantAdminMatrix = () => {
  const [restaurantMatrix, setRestaurantMatrix] = useState<restaurantMatrixProps>({} as restaurantMatrixProps)
  useEffect(() => {
    const query = `
  query restaurantMetrix {
     restaurantMetrix(
      restaurantId: "459"
      startCurrent: "2024-05-31",
      endCurrent: "2024-07-01",
      startPrev: "2024-04-30",
      endPrev: "2024-06-01"
    ) {
      restaurantName
      currentAmount
      currentOrder
      prevOrder
      currentAvgOrder
      prevAvgOrder
      satisfiedCustomer
      lastMonthsatisfiedCustomer
      revenueChangePercent
      orderChangePercent
      avgOrderValueChangePercent
      satifycoutomerSenrio
    }
  }
`;
    async function getItem() {
      try {
        const response = await axios.post(
          "http://localhost:4000/",
          {
            query
          },
          { headers: { "Content-Type": "application/json" } }
        );

        const data = response.data.data.restaurantMetrix[0];
        setRestaurantMatrix(data);
      } catch (error) {
        console.error("GraphQL query error:", error);
      }

    }
    getItem();

  }, [])
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <Card className="bg-slate-950 border-slate-700">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-slate-400">Total Revenue</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center">
            <span className="h-5 w-5 text-purple-500 mr-2 mb-3 text-2xl">₹</span>
            <div className="text-2xl text-gray-100 font-bold -ml-2">{Intl.NumberFormat('en-IN').format(restaurantMatrix.currentAmount)}</div>
          </div>
          <p className={`text-xs  mt-1 ${restaurantMatrix.revenueChangePercent < 0 ? "text-red-500" : "text-green-500"}`}>{restaurantMatrix.revenueChangePercent < 0 ? "" : "+"}{restaurantMatrix.revenueChangePercent}% from last month</p>
        </CardContent>
      </Card>
      <Card className="bg-slate-950 border-slate-700">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-slate-400">Total Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center">
            <CreditCard className="h-5 w-5 text-purple-500 mr-2" />
            <div className="text-2xl text-gray-100  font-bold">{Intl.NumberFormat('en-IN').format(restaurantMatrix.currentOrder)}</div>
          </div>
          <p className={`text-xs  mt-1 ${restaurantMatrix.orderChangePercent < 0 ? "text-red-500" : "text-green-500"}`}>{restaurantMatrix.orderChangePercent < 0 ? "" : "+"}{restaurantMatrix.orderChangePercent}% from last month</p>
        </CardContent>
      </Card>
      <Card className="bg-slate-950 border-slate-700">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-slate-400">Avg. Order Value</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center">
            <BarChart className="h-5 w-5 text-purple-500 mr-2" />
            <div className="text-2xl text-gray-100  font-bold">₹ {Intl.NumberFormat('en-IN').format(restaurantMatrix.currentAvgOrder)}</div>
          </div>
          <p className={`text-xs  mt-1 ${restaurantMatrix.avgOrderValueChangePercent < 0 ? "text-red-500" : "text-green-500"}`}>{restaurantMatrix.avgOrderValueChangePercent < 0 ? "" : "+"}{restaurantMatrix.avgOrderValueChangePercent}% from last month</p>
        </CardContent>
      </Card>
      <Card className="bg-slate-950 border-slate-700">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-slate-400">Customer Satisfaction</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center">
            <Users className="h-5 w-5 text-purple-500 mr-2" />
            <div className="text-2xl text-gray-100  font-bold">{restaurantMatrix.satisfiedCustomer}%</div>
          </div>
          <p className={`text-xs  mt-1 ${restaurantMatrix.satifycoutomerSenrio < 0 ? "text-red-500" : "text-green-500"}`}>{restaurantMatrix.satifycoutomerSenrio < 0 ? "" : "+"}{restaurantMatrix.satifycoutomerSenrio}% from last month</p>
        </CardContent>
      </Card>
    </div>
  )
}

export default RestaurantAdminMatrix