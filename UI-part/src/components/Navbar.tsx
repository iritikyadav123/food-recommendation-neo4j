import { useState } from "react"
import { Menu, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import LoginForm from "@/components/login-form"
import SignupForm from "@/components/signup-form"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"


export default function Navbar() {
    const [showLogin, setShowLogin] = useState(true)
    // This would be determined by authentication state in a real app
    const [isLoggedIn, setIsLoggedIn] = useState(false)
  
    return (
      <header className="sticky top-0 z-50 w-full border-b border-slate-800 items-center  justify-center bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/80 ">
        <div className="container flex h-16 items-center  justify-around ">
          {/* Auth buttons on the left side as requested */}
          
  
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon"  className="md:hidden hover:bg-slate-600 hover:h-8 hover:w-8 h-4 w-8 m-2">
                <Menu className="h-6 w-6 text-slate-200" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-slate-900 border-slate-800 text-slate-200">
              <div className="flex flex-col gap-2 mt-4">
                {!isLoggedIn ? (
                  <>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full border-purple-700 text-purple-400 hover:bg-purple-900/30"
                        >
                          Sign In
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="bg-slate-900 border-slate-800 text-slate-200">
                        <DialogHeader>
                          <DialogTitle className="text-slate-100">Welcome back</DialogTitle>
                          <DialogDescription className="text-slate-400">Sign in to your account</DialogDescription>
                        </DialogHeader>
                        <LoginForm />
                      </DialogContent>
                    </Dialog>
  
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full bg-purple-700 hover:bg-purple-800 text-white">Sign Up</Button>
                      </DialogTrigger>
                      <DialogContent className="bg-slate-900 border-slate-800 text-slate-200">
                        <DialogHeader>
                          <DialogTitle className="text-slate-100">Create an account</DialogTitle>
                          <DialogDescription className="text-slate-400">Sign up to get started</DialogDescription>
                        </DialogHeader>
                        <SignupForm />
                      </DialogContent>
                    </Dialog>
                  </>
                ) : (
                  <div className="flex items-center gap-3 px-2 py-3">
                    <div className="h-10 w-10 rounded-full bg-purple-900 flex items-center justify-center">
                      <User className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-100">John Doe</p>
                      <p className="text-sm text-slate-400">john.doe@example.com</p>
                    </div>
                  </div>
                )}
              </div>
  
              <nav className="flex flex-col gap-4 mt-8">
                <a href="/" className="text-lg font-medium text-slate-200 hover:text-purple-400 transition-colors">
                  Home
                </a>
                <a href="#" className="text-lg font-medium text-slate-200 hover:text-purple-400 transition-colors">
                  Restaurants
                </a>
                <a href="#" className="text-lg font-medium text-slate-200 hover:text-purple-400 transition-colors">
                  Cuisines
                </a>
                <a href="#" className="text-lg font-medium text-slate-200 hover:text-purple-400 transition-colors">
                  About
                </a>
                <a href="#" className="text-lg font-medium text-slate-200 hover:text-purple-400 transition-colors">
                  Contact
                </a>
              </nav>
  
              {isLoggedIn && (
                <>
                  <div className="h-px bg-slate-800 my-6" />
                  <nav className="flex flex-col gap-4">
                    <a href="#" className="text-lg font-medium text-slate-200 hover:text-purple-400 transition-colors">
                      My Profile
                    </a>
                    <a href="#" className="text-lg font-medium text-slate-200 hover:text-purple-400 transition-colors">
                      My Orders
                    </a>
                    <a href="#" className="text-lg font-medium text-slate-200 hover:text-purple-400 transition-colors">
                      Favorites
                    </a>
                    <a href="#" className="text-lg font-medium text-slate-200 hover:text-purple-400 transition-colors">
                      Settings
                    </a>
                    <Button
                      variant="ghost"
                      className="justify-start p-0 h-auto font-medium text-lg text-red-400 hover:text-red-300 hover:bg-transparent"
                      onClick={() => setIsLoggedIn(false)}
                    >
                      Log out
                    </Button>
                  </nav>
                </>
              )}
            </SheetContent>
          </Sheet>
  
          <a href="/" className="flex items-center gap-2">
            <span className="font-bold text-xl text-purple-400">FoodFinder</span>
          </a>
  
          <nav className="hidden md:flex items-center gap-6 text-sm ml-8">
            <a href="/" className="font-medium text-slate-200 transition-colors hover:text-purple-400">
              Home
            </a>
            <a href="#" className="font-medium text-slate-200 transition-colors hover:text-purple-400">
              Restaurants
            </a>
            <a href="#" className="font-medium text-slate-200 transition-colors hover:text-purple-400">
              Cuisines
            </a>
            <a href="#" className="font-medium text-slate-200 transition-colors hover:text-purple-400">
              About
            </a>
            <a href="#" className="font-medium text-slate-200 transition-colors hover:text-purple-400">
              Contact
            </a>
          </nav>
  
          <div className="ml-auto md:hidden m-2 flex items-center gap-2">
            {!isLoggedIn ? (
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="sm" className="bg-purple-700 hover:bg-purple-800 text-white">
                    Sign In
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-slate-900 border-slate-800 text-slate-200">
                  <DialogHeader>
                    <DialogTitle className="text-slate-100">Welcome back</DialogTitle>
                    <DialogDescription className="text-slate-400">Sign in to your account</DialogDescription>
                  </DialogHeader>
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-4">
                      <Button
                        variant={showLogin ? "default" : "outline"}
                        className={`flex-1 ${
                          showLogin
                            ? "bg-purple-700 hover:bg-purple-800 text-white"
                            : "border-purple-700 text-purple-400 hover:bg-purple-900/30"
                        }`}
                        onClick={() => setShowLogin(true)}
                      >
                        Sign In
                      </Button>
                      <Button
                        variant={!showLogin ? "default" : "outline"}
                        className={`flex-1 ${
                          !showLogin
                            ? "bg-purple-700 hover:bg-purple-800 text-white"
                            : "border-purple-700 text-purple-400 hover:bg-purple-900/30"
                        }`}
                        onClick={() => setShowLogin(false)}
                      >
                        Sign Up
                      </Button>
                    </div>
                    {showLogin ? <LoginForm /> : <SignupForm />}
                  </div>
                </DialogContent>
              </Dialog>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <User className="h-5 w-5 text-purple-400" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-slate-900 border-slate-800 text-slate-200" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none text-slate-100">John Doe</p>
                      <p className="text-xs leading-none text-slate-400">john.doe@example.com</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-slate-800" />
                  <DropdownMenuItem className="hover:bg-slate-800 focus:bg-slate-800">Profile</DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-slate-800 focus:bg-slate-800">My Orders</DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-slate-800 focus:bg-slate-800">Favorites</DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-slate-800 focus:bg-slate-800">Settings</DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-slate-800" />
                  <DropdownMenuItem
                    className="hover:bg-slate-800 focus:bg-slate-800 text-red-400"
                    onClick={() => setIsLoggedIn(false)}
                  >
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          
          </div>
          <div className="hidden md:flex items-center gap-2 mr-8">
            {!isLoggedIn ? (
              <>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="ghost" className="text-purple-400 hover:text-purple-300 hover:bg-slate-800">
                      Sign In
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-slate-900 border-slate-800 text-slate-200">
                    <DialogHeader>
                      <DialogTitle className="text-slate-100">Welcome back</DialogTitle>
                      <DialogDescription className="text-slate-400">Sign in to your account</DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-col gap-4">
                      <div className="flex gap-4">
                        <Button
                          variant={showLogin ? "default" : "outline"}
                          className={`flex-1 ${
                            showLogin
                              ? "bg-purple-700 hover:bg-purple-800 text-white"
                              : "border-purple-700 text-purple-400 hover:bg-purple-900/30"
                          }`}
                          onClick={() => setShowLogin(true)}
                        >
                          Sign In
                        </Button>
                        <Button
                          variant={!showLogin ? "default" : "outline"}
                          className={`flex-1 ${
                            !showLogin
                              ? "bg-purple-700 hover:bg-purple-800 text-white"
                              : "border-purple-700 text-purple-400 hover:bg-purple-900/30"
                          }`}
                          onClick={() => setShowLogin(false)}
                        >
                          Sign Up
                        </Button>
                      </div>
                      {showLogin ? <LoginForm /> : <SignupForm />}
                    </div>
                  </DialogContent>
                </Dialog>
  
                <Button className="bg-purple-700 hover:bg-purple-800 text-white">Sign Up</Button>
              </>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <User className="h-5 w-5 text-purple-400" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-slate-900 border-slate-800 text-slate-200" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">John Doe</p>
                      <p className="text-xs leading-none text-slate-400">john.doe@example.com</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-slate-800" />
                  <DropdownMenuItem className="hover:bg-slate-800 focus:bg-slate-800">Profile</DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-slate-800 focus:bg-slate-800">My Orders</DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-slate-800 focus:bg-slate-800">Favorites</DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-slate-800 focus:bg-slate-800">Settings</DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-slate-800" />
                  <DropdownMenuItem
                    className="hover:bg-slate-800 focus:bg-slate-800 text-red-400"
                    onClick={() => setIsLoggedIn(false)}
                  >
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
          
        </div>
        
      </header>
    )
  }
  

