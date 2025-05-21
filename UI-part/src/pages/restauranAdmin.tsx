import { useState } from "react"
import {
  BarChart,
  Calendar,
  ChefHat,
  CreditCard,
  DollarSign,
  FileBarChart,
  Home,
  LineChart,
  Menu,
  Package,
  Settings,
  ThumbsDown,
  TrendingUp,
  Users,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function RestaurantAdmin() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="flex min-h-screen bg-purple-100 text-slate-100 -mb-20">
      {/* Sidebar for desktop */}
      <aside className="hidden w-64 flex-col bg-slate-950 p-6 md:flex">
        <div className="flex items-center gap-2 pb-6">
          <ChefHat className="h-8 w-8 text-purple-500" />
          <h1 className="text-xl font-bold">Gourmet Admin</h1>
        </div>
        <nav className="flex flex-col gap-2">
          <Button
            variant="ghost"
            className={`justify-start ${activeTab === "overview" ? "bg-purple-900/50 text-purple-400" : "text-slate-400 hover:text-slate-600"}`}
            onClick={() => setActiveTab("overview")}
          >
            <Home className="mr-2 h-5 w-5" />
            Overview
          </Button>
          <Button
            variant="ghost"
            className={`justify-start ${activeTab === "hot-items" ? "bg-purple-900/50 text-purple-400 hover:text-slate-600" : "text-slate-400 hover:text-slate-600"}`}
            onClick={() => setActiveTab("hot-items")}
          >
            <TrendingUp className="mr-2 h-5 w-5" />
            Hot Selling Items
          </Button>
          <Button
            variant="ghost"
            className={`justify-start ${activeTab === "trends" ? "bg-purple-900/50 text-purple-400 hover:text-slate-600" : "text-slate-400 hover:text-slate-600"}`}
            onClick={() => setActiveTab("trends")}
          >
            <LineChart className="mr-2 h-5 w-5" />
            Sales Trends
          </Button>
          <Button
            variant="ghost"
            className={`justify-start ${activeTab === "feedback" ? "bg-purple-900/50 text-purple-400 hover:text-slate-600" : "text-slate-400 hover:text-slate-600"}`}
            onClick={() => setActiveTab("feedback")}
          >
            <ThumbsDown className="mr-2 h-5 w-5" />
            Customer Feedback
          </Button>
          <Button variant="ghost" className="justify-start text-slate-400 hover:text-slate-600">
            <Package className="mr-2 h-5 w-5" />
            Inventory
          </Button>
          <Button variant="ghost" className="justify-start text-slate-400 hover:text-slate-600">
            <Users className="mr-2 h-5 w-5" />
            Staff
          </Button>
          <Button variant="ghost" className="justify-start text-slate-400 hover:text-slate-600">
            <Calendar className="mr-2 h-5 w-5" />
            Reservations
          </Button>
          <Button variant="ghost" className="justify-start text-slate-400 hover:text-slate-600">
            <Settings className="mr-2 h-5 w-5" />
            Settings
          </Button>
        </nav>
      </aside>

      {/* Mobile sidebar */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="fixed left-4 top-4 z-40 md:hidden">
            <Menu className="h-5 w-5 text-slate-900 border-slate-900 hover:bg-slate-400" />
            <span className="sr-only bg-slate-900">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="bg-slate-900 text-slate-100 pl-4 pt-4 pr-4">
          <div className="flex items-center gap-2 pb-6">
            <ChefHat className="h-8 w-8 text-purple-500" />
            <h1 className="text-xl font-bold">Gourmet Admin</h1>
          </div>
          <nav className="flex flex-col gap-2">
            <Button
              variant="ghost"
              className={`justify-start ${activeTab === "overview" ? "bg-purple-900/50 text-purple-400" : "text-slate-100 hover:text-slate-100"}`}
              onClick={() => setActiveTab("overview")}
            >
              <Home className="mr-2 h-5 w-5" />
              Overview
            </Button>
            <Button
              variant="ghost"
              className={`justify-start ${activeTab === "hot-items" ? "bg-purple-900/50 text-purple-400" : "text-slate-400 hover:text-slate-900"}`}
              onClick={() => setActiveTab("hot-items")}
            >
              <TrendingUp className="mr-2 h-5 w-5" />
              Hot Selling Items
            </Button>
            <Button
              variant="ghost"
              className={`justify-start ${activeTab === "trends" ? "bg-purple-900/50 text-purple-400" : "text-slate-400 hover:text-slate-900"}`}
              onClick={() => setActiveTab("trends")}
            >
              <LineChart className="mr-2 h-5 w-5" />
              Sales Trends
            </Button>
            <Button
              variant="ghost"
              className={`justify-start ${activeTab === "feedback" ? "bg-purple-900/50 text-purple-400" : "text-slate-400 hover:text-slate-900"}`}
              onClick={() => setActiveTab("feedback")}
            >
              <ThumbsDown className="mr-2 h-5 w-5" />
              Customer Feedback
            </Button>
            <Button variant="ghost" className="justify-start text-slate-400 hover:text-slate-900">
              <Package className="mr-2 h-5 w-5" />
              Inventory
            </Button>
            <Button variant="ghost" className="justify-start text-slate-400 hover:text-slate-900">
              <Users className="mr-2 h-5 w-5" />
              Staff
            </Button>
            <Button variant="ghost" className="justify-start text-slate-400 hover:text-slate-900">
              <Calendar className="mr-2 h-5 w-5" />
              Reservations
            </Button>
            <Button variant="ghost" className="justify-start text-slate-400 hover:text-slate-900">
              <Settings className="mr-2 h-5 w-5" />
              Settings
            </Button>
          </nav>
        </SheetContent>
      </Sheet>

      {/* Main content */}
      <main className="flex-1 p-4 md:p-8">
        <div className="flex items-center justify-between pb-6">
          <div>
            <h1 className="text-2xl font-bold ml-10 md:ml-0 text-slate-900">Restaurant Dashboard</h1>
            <p className="text-slate-500">Monitor your restaurant's performance</p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:flex text-gray-800 hover:bg-gray-400">
              <FileBarChart className="mr-2 h-5 w-5 " />
              Generate Report
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
              <AvatarFallback className="bg-purple-700">JD</AvatarFallback>
            </Avatar>
          </div>
        </div> 

        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-slate-800 text-slate-100">
            <TabsTrigger className={`${activeTab != "overview" && "text-gray-100"}`} value="overview">Overview</TabsTrigger>
            <TabsTrigger className={`${activeTab != "hot-items" && "text-gray-100"}`} value="hot-items">Hot Items</TabsTrigger>
            <TabsTrigger className={`${activeTab != "trends" && "text-gray-100"}`} value="trends">Trends</TabsTrigger>
            <TabsTrigger className={`${activeTab != "feedback" && "text-gray-100"}`} value="feedback">Feedback</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-slate-400">Total Revenue</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <DollarSign className="h-5 w-5 text-purple-500 mr-2" />
                    <div className="text-2xl text-gray-100 font-bold">$24,389</div>
                  </div>
                  <p className="text-xs text-green-500 mt-1">+12.5% from last month</p>
                </CardContent>
              </Card>
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-slate-400">Total Orders</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <CreditCard className="h-5 w-5 text-purple-500 mr-2" />
                    <div className="text-2xl text-gray-100  font-bold">1,248</div>
                  </div>
                  <p className="text-xs text-green-500 mt-1">+8.2% from last month</p>
                </CardContent>
              </Card>
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-slate-400">Avg. Order Value</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <BarChart className="h-5 w-5 text-purple-500 mr-2" />
                    <div className="text-2xl text-gray-100  font-bold">$19.54</div>
                  </div>
                  <p className="text-xs text-green-500 mt-1">+3.7% from last month</p>
                </CardContent>
              </Card>
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-slate-400">Customer Satisfaction</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-purple-500 mr-2" />
                    <div className="text-2xl text-gray-100  font-bold">92%</div>
                  </div>
                  <p className="text-xs text-red-500 mt-1">-1.2% from last month</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-gray-100 ">Sales Overview</CardTitle>
                  <CardDescription className="text-slate-400">Daily revenue for the past week</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[200px] flex items-end gap-2">
                    <div className="flex-1 bg-purple-900/20 hover:bg-purple-900/40 transition-colors rounded-sm h-[30%] relative group">
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 hidden group-hover:block bg-slate-700 text-white text-xs px-2 py-1 rounded">
                        $1,245
                      </div>
                    </div>
                    <div className="flex-1 bg-purple-900/20 hover:bg-purple-900/40 transition-colors rounded-sm h-[45%] relative group">
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 hidden group-hover:block bg-slate-700 text-white text-xs px-2 py-1 rounded">
                        $1,876
                      </div>
                    </div>
                    <div className="flex-1 bg-purple-900/20 hover:bg-purple-900/40 transition-colors rounded-sm h-[60%] relative group">
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 hidden group-hover:block bg-slate-700 text-white text-xs px-2 py-1 rounded">
                        $2,498
                      </div>
                    </div>
                    <div className="flex-1 bg-purple-900/20 hover:bg-purple-900/40 transition-colors rounded-sm h-[40%] relative group">
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 hidden group-hover:block bg-slate-700 text-white text-xs px-2 py-1 rounded">
                        $1,654
                      </div>
                    </div>
                    <div className="flex-1 bg-purple-900/20 hover:bg-purple-900/40 transition-colors rounded-sm h-[75%] relative group">
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 hidden group-hover:block bg-slate-700 text-white text-xs px-2 py-1 rounded">
                        $3,124
                      </div>
                    </div>
                    <div className="flex-1 bg-purple-500 hover:bg-purple-600 transition-colors rounded-sm h-[90%] relative group">
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 hidden group-hover:block bg-slate-700 text-white text-xs px-2 py-1 rounded">
                        $3,756
                      </div>
                    </div>
                    <div className="flex-1 bg-purple-900/20 hover:bg-purple-900/40 transition-colors rounded-sm h-[65%] relative group">
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 hidden group-hover:block bg-slate-700 text-white text-xs px-2 py-1 rounded">
                        $2,687
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-slate-400">
                    <div>Mon</div>
                    <div>Tue</div>
                    <div>Wed</div>
                    <div>Thu</div>
                    <div>Fri</div>
                    <div>Sat</div>
                    <div>Sun</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-gray-100 ">Top Categories</CardTitle>
                  <CardDescription className="text-slate-400">Most popular food categories</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1 text-sm">
                      <span className="text-gray-100 ">Main Courses</span>
                      <span className="text-purple-400">42%</span>
                    </div>
                    <Progress value={42} className="h-2 bg-slate-700" indicatorClassName="bg-purple-500" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1 text-sm">
                      <span className="text-gray-100 ">Appetizers</span>
                      <span className="text-purple-400">28%</span>
                    </div>
                    <Progress value={28} className="h-2 bg-slate-700" indicatorClassName="bg-purple-500" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1 text-sm">
                      <span className="text-gray-100 ">Desserts</span>
                      <span className="text-purple-400">18%</span>
                    </div>
                    <Progress value={18} className="h-2 bg-slate-700" indicatorClassName="bg-purple-500" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1 text-sm">
                      <span className="text-gray-100 ">Beverages</span>
                      <span className="text-purple-400">12%</span>
                    </div>
                    <Progress value={12} className="h-2 bg-slate-700 " indicatorClassName="bg-purple-500" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Hot Selling Items Tab */}
          <TabsContent value="hot-items" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-slate-800 border-slate-700 overflow-hidden">
                <div className="h-40 bg-purple-900/20 relative">
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-purple-600">Top Seller</Badge>
                  </div>
                  <img
                    src="/placeholder.svg?height=160&width=320"
                    alt="Truffle Pasta"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Truffle Pasta</CardTitle>
                  <CardDescription className="text-slate-400">Handmade pasta with truffle cream sauce</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="text-lg font-bold">$24.99</div>
                    <div className="text-green-500 flex items-center">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      <span>+18%</span>
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="flex justify-between mb-1 text-sm">
                      <span>Sales Target</span>
                      <span className="text-purple-400">78%</span>
                    </div>
                    <Progress value={78} className="h-2 bg-slate-700" indicatorClassName="bg-purple-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700 overflow-hidden">
                <div className="h-40 bg-purple-900/20 relative">
                  <img
                    src="/placeholder.svg?height=160&width=320"
                    alt="Wagyu Steak"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Wagyu Steak</CardTitle>
                  <CardDescription className="text-slate-400">
                    Premium A5 Japanese Wagyu with truffle butter
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="text-lg font-bold">$89.99</div>
                    <div className="text-green-500 flex items-center">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      <span>+12%</span>
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="flex justify-between mb-1 text-sm">
                      <span>Sales Target</span>
                      <span className="text-purple-400">65%</span>
                    </div>
                    <Progress value={65} className="h-2 bg-slate-700" indicatorClassName="bg-purple-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700 overflow-hidden">
                <div className="h-40 bg-purple-900/20 relative">
                  <img
                    src="/placeholder.svg?height=160&width=320"
                    alt="Chocolate Lava Cake"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Chocolate Lava Cake</CardTitle>
                  <CardDescription className="text-slate-400">Warm chocolate cake with molten center</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="text-lg font-bold">$12.99</div>
                    <div className="text-green-500 flex items-center">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      <span>+24%</span>
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="flex justify-between mb-1 text-sm">
                      <span>Sales Target</span>
                      <span className="text-purple-400">82%</span>
                    </div>
                    <Progress value={82} className="h-2 bg-slate-700" indicatorClassName="bg-purple-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700 overflow-hidden">
                <div className="h-40 bg-purple-900/20 relative">
                  <img
                    src="/placeholder.svg?height=160&width=320"
                    alt="Seafood Paella"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Seafood Paella</CardTitle>
                  <CardDescription className="text-slate-400">
                    Traditional Spanish rice with fresh seafood
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="text-lg font-bold">$32.99</div>
                    <div className="text-green-500 flex items-center">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      <span>+9%</span>
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="flex justify-between mb-1 text-sm">
                      <span>Sales Target</span>
                      <span className="text-purple-400">58%</span>
                    </div>
                    <Progress value={58} className="h-2 bg-slate-700" indicatorClassName="bg-purple-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700 overflow-hidden">
                <div className="h-40 bg-purple-900/20 relative">
                  <img
                    src="/placeholder.svg?height=160&width=320"
                    alt="Signature Cocktail"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Signature Cocktail</CardTitle>
                  <CardDescription className="text-slate-400">
                    House special with premium spirits and fresh fruits
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="text-lg font-bold">$16.99</div>
                    <div className="text-green-500 flex items-center">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      <span>+15%</span>
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="flex justify-between mb-1 text-sm">
                      <span>Sales Target</span>
                      <span className="text-purple-400">72%</span>
                    </div>
                    <Progress value={72} className="h-2 bg-slate-700" indicatorClassName="bg-purple-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700 overflow-hidden">
                <div className="h-40 bg-purple-900/20 relative">
                  <img
                    src="/placeholder.svg?height=160&width=320"
                    alt="Lobster Bisque"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Lobster Bisque</CardTitle>
                  <CardDescription className="text-slate-400">Creamy soup with fresh lobster and herbs</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="text-lg font-bold">$18.99</div>
                    <div className="text-green-500 flex items-center">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      <span>+7%</span>
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="flex justify-between mb-1 text-sm">
                      <span>Sales Target</span>
                      <span className="text-purple-400">45%</span>
                    </div>
                    <Progress value={45} className="h-2 bg-slate-700" indicatorClassName="bg-purple-500" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Trends Tab */}
          <TabsContent value="trends" className="space-y-6">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle>Monthly Sales Trend</CardTitle>
                <CardDescription className="text-slate-400">Revenue over the past 6 months</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-end gap-4">
                  <div className="flex-1 flex flex-col justify-end">
                    <div className="bg-purple-900/20 hover:bg-purple-900/40 transition-colors rounded-t-sm h-[40%] relative group">
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 hidden group-hover:block bg-slate-700 text-white text-xs px-2 py-1 rounded">
                        $18,245
                      </div>
                    </div>
                    <div className="text-xs text-slate-400 text-center mt-2">Jan</div>
                  </div>
                  <div className="flex-1 flex flex-col justify-end">
                    <div className="bg-purple-900/20 hover:bg-purple-900/40 transition-colors rounded-t-sm h-[55%] relative group">
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 hidden group-hover:block bg-slate-700 text-white text-xs px-2 py-1 rounded">
                        $21,876
                      </div>
                    </div>
                    <div className="text-xs text-slate-400 text-center mt-2">Feb</div>
                  </div>
                  <div className="flex-1 flex flex-col justify-end">
                    <div className="bg-purple-900/20 hover:bg-purple-900/40 transition-colors rounded-t-sm h-[65%] relative group">
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 hidden group-hover:block bg-slate-700 text-white text-xs px-2 py-1 rounded">
                        $24,498
                      </div>
                    </div>
                    <div className="text-xs text-slate-400 text-center mt-2">Mar</div>
                  </div>
                  <div className="flex-1 flex flex-col justify-end">
                    <div className="bg-purple-900/20 hover:bg-purple-900/40 transition-colors rounded-t-sm h-[50%] relative group">
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 hidden group-hover:block bg-slate-700 text-white text-xs px-2 py-1 rounded">
                        $19,654
                      </div>
                    </div>
                    <div className="text-xs text-slate-400 text-center mt-2">Apr</div>
                  </div>
                  <div className="flex-1 flex flex-col justify-end">
                    <div className="bg-purple-900/20 hover:bg-purple-900/40 transition-colors rounded-t-sm h-[75%] relative group">
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 hidden group-hover:block bg-slate-700 text-white text-xs px-2 py-1 rounded">
                        $28,124
                      </div>
                    </div>
                    <div className="text-xs text-slate-400 text-center mt-2">May</div>
                  </div>
                  <div className="flex-1 flex flex-col justify-end">
                    <div className="bg-purple-500 hover:bg-purple-600 transition-colors rounded-t-sm h-[90%] relative group">
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 hidden group-hover:block bg-slate-700 text-white text-xs px-2 py-1 rounded">
                        $32,756
                      </div>
                    </div>
                    <div className="text-xs text-slate-400 text-center mt-2">Jun</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle>Peak Hours</CardTitle>
                  <CardDescription className="text-slate-400">Order distribution by time of day</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[200px] flex items-end gap-1">
                    {[10, 15, 20, 25, 45, 80, 95, 75, 60, 40, 30, 20].map((value, index) => (
                      <div
                        key={index}
                        className={`flex-1 ${index === 6 ? "bg-purple-500 hover:bg-purple-600" : "bg-purple-900/20 hover:bg-purple-900/40"} transition-colors rounded-sm`}
                        style={{ height: `${value}%` }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-slate-400">
                    <div>11am</div>
                    <div>1pm</div>
                    <div>3pm</div>
                    <div>5pm</div>
                    <div>7pm</div>
                    <div>9pm</div>
                    <div>11pm</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle>Order Types</CardTitle>
                  <CardDescription className="text-slate-400">Distribution by order method</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col items-center justify-center p-4 bg-slate-900 rounded-lg">
                      <div className="text-3xl font-bold text-purple-400">62%</div>
                      <div className="text-sm text-slate-400 mt-1">Dine-in</div>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 bg-slate-900 rounded-lg">
                      <div className="text-3xl font-bold text-purple-400">24%</div>
                      <div className="text-sm text-slate-400 mt-1">Takeout</div>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 bg-slate-900 rounded-lg">
                      <div className="text-3xl font-bold text-purple-400">10%</div>
                      <div className="text-sm text-slate-400 mt-1">Delivery</div>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 bg-slate-900 rounded-lg">
                      <div className="text-3xl font-bold text-purple-400">4%</div>
                      <div className="text-sm text-slate-400 mt-1">Catering</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Feedback Tab */}
          <TabsContent value="feedback" className="space-y-6">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle>Most Disliked Items</CardTitle>
                <CardDescription className="text-slate-400">Items with highest negative feedback</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded bg-slate-700 mr-4">
                      <img
                        src="/placeholder.svg?height=48&width=48"
                        alt="Seafood Risotto"
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-medium">Seafood Risotto</h3>
                        <div className="flex items-center text-red-500">
                          <ThumbsDown className="h-4 w-4 mr-1" />
                          <span>24%</span>
                        </div>
                      </div>
                      <div className="text-sm text-slate-400">Common feedback: "Too salty"</div>
                      <Progress value={24} className="h-2 mt-1 bg-slate-700" indicatorClassName="bg-red-500" />
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded bg-slate-700 mr-4">
                      <img
                        src="/placeholder.svg?height=48&width=48"
                        alt="Vegan Burger"
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-medium">Vegan Burger</h3>
                        <div className="flex items-center text-red-500">
                          <ThumbsDown className="h-4 w-4 mr-1" />
                          <span>18%</span>
                        </div>
                      </div>
                      <div className="text-sm text-slate-400">Common feedback: "Dry texture"</div>
                      <Progress value={18} className="h-2 mt-1 bg-slate-700" indicatorClassName="bg-red-500" />
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded bg-slate-700 mr-4">
                      <img
                        src="/placeholder.svg?height=48&width=48"
                        alt="Spicy Ramen"
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-medium">Spicy Ramen</h3>
                        <div className="flex items-center text-red-500">
                          <ThumbsDown className="h-4 w-4 mr-1" />
                          <span>15%</span>
                        </div>
                      </div>
                      <div className="text-sm text-slate-400">Common feedback: "Too spicy"</div>
                      <Progress value={15} className="h-2 mt-1 bg-slate-700" indicatorClassName="bg-red-500" />
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded bg-slate-700 mr-4">
                      <img
                        src="/placeholder.svg?height=48&width=48"
                        alt="Tiramisu"
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-medium">Tiramisu</h3>
                        <div className="flex items-center text-red-500">
                          <ThumbsDown className="h-4 w-4 mr-1" />
                          <span>12%</span>
                        </div>
                      </div>
                      <div className="text-sm text-slate-400">Common feedback: "Too sweet"</div>
                      <Progress value={12} className="h-2 mt-1 bg-slate-700" indicatorClassName="bg-red-500" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle>Recent Customer Feedback</CardTitle>
                <CardDescription className="text-slate-400">Latest reviews from customers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-slate-900 rounded-lg">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center">
                        <Avatar className="h-10 w-10 mr-3">
                          <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Customer" />
                          <AvatarFallback className="bg-purple-700">JD</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">John Doe</div>
                          <div className="text-xs text-slate-400">June 12, 2023</div>
                        </div>
                      </div>
                      <div className="flex">
                        {[1, 2, 3, 4].map((star) => (
                          <svg
                            key={star}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5 text-yellow-500"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ))}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5 text-slate-600"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <p className="mt-3 text-sm">
                      "The truffle pasta was amazing! Perfectly cooked and the sauce was rich and flavorful. Service was
                      a bit slow though."
                    </p>
                  </div>

                  <div className="p-4 bg-slate-900 rounded-lg">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center">
                        <Avatar className="h-10 w-10 mr-3">
                          <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Customer" />
                          <AvatarFallback className="bg-purple-700">SM</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">Sarah Miller</div>
                          <div className="text-xs text-slate-400">June 10, 2023</div>
                        </div>
                      </div>
                      <div className="flex">
                        {[1, 2, 3].map((star) => (
                          <svg
                            key={star}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5 text-yellow-500"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ))}
                        {[1, 2].map((star) => (
                          <svg
                            key={star}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5 text-slate-600"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="mt-3 text-sm">
                      "The seafood risotto was too salty for my taste. The ambiance was great though and the staff was
                      very attentive."
                    </p>
                  </div>

                  <div className="p-4 bg-slate-900 rounded-lg">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center">
                        <Avatar className="h-10 w-10 mr-3">
                          <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Customer" />
                          <AvatarFallback className="bg-purple-700">RJ</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">Robert Johnson</div>
                          <div className="text-xs text-slate-400">June 8, 2023</div>
                        </div>
                      </div>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg
                            key={star}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5 text-yellow-500"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="mt-3 text-sm">
                      "Absolutely fantastic experience! The wagyu steak was cooked to perfection and the wine pairing
                      was spot on. Will definitely be coming back!"
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
