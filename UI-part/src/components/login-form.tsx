

import type React from "react"

import { useState } from "react"
import { Facebook } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"

export default function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log("Login with:", email, password)
  }

  return (
    <div className="grid gap-6">
      <form onSubmit={handleSubmit}>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email" className="text-slate-200">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-slate-800 border-slate-700 text-slate-200 focus-visible:ring-purple-500"
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password" className="text-slate-200">
                Password
              </Label>
              <a href="#" className="text-sm text-purple-400 hover:text-purple-300">
                Forgot password?
              </a>
            </div>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-slate-800 border-slate-700 text-slate-200 focus-visible:ring-purple-500"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="remember"
              className="border-slate-700 data-[state=checked]:bg-purple-700 data-[state=checked]:border-purple-700"
            />
            <Label htmlFor="remember" className="text-sm font-normal text-slate-300">
              Remember me
            </Label>
          </div>
          <Button type="submit" className="bg-purple-700 hover:bg-purple-800 text-white">
            Sign In
          </Button>
        </div>
      </form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <Separator className="w-full bg-slate-800" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-slate-900 px-2 text-slate-400">Or continue with</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Button
          variant="outline"
          className="gap-2 border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-slate-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-google"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v12" />
            <path d="M6 12h12" />
          </svg>
          Google
        </Button>
        <Button
          variant="outline"
          className="gap-2 border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-slate-200"
        >
          <Facebook className="h-4 w-4" />
          Facebook
        </Button>
      </div>
    </div>
  )
}
