import { Bell, CircleHelp, Menu, Search } from "lucide-react";
import React from "react";

function Header() {
  return (
    <header className="items-center flex h-full px-4">
        <div className="flex items-center gap-6">
            <button className="text-gray-500 mr-10">
                <Menu className="w-20 h-5 items-center" />
            </button>
        </div>
       <div className="flex items-center bg-r-50 rounded-md px-3 h-10 w-150 text-gray-500 focus-within:ring-2 focus-within:ring-blue-500 border border-gray-200">
            <Search className="w-5 h-5 flex-shrink-0" />
            <input 
                type="text" 
                placeholder="Search..." 
                className="outline-none ml-2 w-full" 
            />
        </div>
        <div className="flex ml-auto items-center gap-4">
            <button>
                <Bell className="w-5 h-5 text-gray-500 mr-5" />
            </button>
            <button>
                <CircleHelp className="w-5 h-5 text-gray-500" />
            </button>
        </div>
    </header>
  )

}
export default Header;