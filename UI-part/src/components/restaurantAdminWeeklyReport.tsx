import axios from "axios";
import { useEffect, useState } from "react";

interface weeklyReportProps {
    dayName: string
    dailyRevenue: number
    orderDate: string
    percentageOfWeek: number
}


const RestaurantAdminWeeklyReport = () => {

    const [weeklyReport, setWeeklyReport] = useState<weeklyReportProps[]>([])


    useEffect(() => {
        const query = `
      query weeklyRevenueBreakdown {
         weeklyRevenueBreakdown(
            restaurantId: "459"
            startDate: "2024-01-08"
            endDate: "2024-01-14"
        ) {
            dayName
            orderDate
            dailyRevenue
            percentageOfWeek
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
                setWeeklyReport(response.data.data.weeklyRevenueBreakdown);
            } catch (error) {
                console.error("GraphQL query error:", error);
            }
        }
        getItem()

    }, []);
    return (
        <>
            <div className="h-[200px] flex items-end gap-2">
                {
                    weeklyReport.map((item, index) => (
                        <div className="flex-1 bg-purple-900/80 hover:bg-purple-900/95 transition-colors rounded-sm relative group"
                            style={{ height: `${item.percentageOfWeek}%` }}
                            key={index}>
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 hidden group-hover:block bg-slate-700 text-white text-xs px-2 py-1 rounded">₹ 
                                {Intl.NumberFormat('en-IN').format(item.dailyRevenue)}
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="flex justify-between mt-2 text-xs text-slate-400">
                {
                    weeklyReport.map((item,index) => (
                        <div key={index}>
                            {(item.dayName).slice(0,3)}
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default RestaurantAdminWeeklyReport 