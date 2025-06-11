
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import axios from "axios";
import { useEffect, useState } from "react";

interface halfYearlyDataProps {
    Year: number
    Month: number
    MonthYear: string
    MonthlyRevenue: number
    RevenuePercentage: number
}

const month: string[] = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

const RestaurantAdminHalfYearlyRevenue = () => {
    const [halfYearlyData, setHalfYearlyData] = useState<halfYearlyDataProps[]>([])

    useEffect(() => {
        const query = `
      query monthlyRevenueBreakdown {
         monthlyRevenueBreakdown(
         restaurantId: "458"
         startDate: "2024-01-01"
         endDate: "2024-06-30"
        ) {
          Year
          Month
          MonthYear
          MonthlyRevenue
          RevenuePercentage
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
                setHalfYearlyData(response.data.data.monthlyRevenueBreakdown);
            } catch (error) {
                console.error("GraphQL query error:", error);
            }
        }
        getItem();
    }, []);
    return (
        <>
            <Card className="bg-slate-950 border-slate-700">
                <CardHeader>
                    <CardTitle>Monthly Sales Trend</CardTitle>
                    <CardDescription className="text-slate-400">Revenue over the past 6 months</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="h-[300px] flex items-end gap-4">

                        {
                            halfYearlyData.map((item, index) => (
                                <div className="flex-1 flex flex-col justify-end" key={index}>
                                    <div className="bg-purple-900/90 hover:bg-purple-900/40 transition-colors rounded-t-sm relative group"
                                        style={{ height: `${item.RevenuePercentage + 80}px` }}>
                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 hidden group-hover:block bg-slate-700 text-white text-xs px-2 py-1 rounded">₹
                                            {Intl.NumberFormat('en-IN').format(item.MonthlyRevenue)}
                                        </div>
                                    </div>
                                    <div className="text-xs text-slate-400 text-center mt-2">{month[item.Month - 1]}</div>
                                </div>
                            ))
                        }

                    </div>
                </CardContent>
            </Card>

        </>
    )
}

export default RestaurantAdminHalfYearlyRevenue