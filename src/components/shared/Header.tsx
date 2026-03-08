import { Bell, CircleHelp, Menu, Search } from "lucide-react";
import React from "react";

function Header() {
  return (
    <header className="items-center flex justify-between h-full px-4">
        <div className="flex items-center gap-6">
            <button className="text-gray-500 mr-10">
                <Menu className="w-20 h-5 items-center" />
            </button>
        </div>
        <div className="flex items-center text-gray-500">
            <Search className="w-50 h-5" />
            <input type="text" placeholder="Search..." className="bg-gray-50 outline-none w-120 h-10" />
        </div>
        <div>
            <button>
                <Bell className="w-30 h-5 text-gray-500 bg" />
            </button>
        </div>
        <div>
            <button>
                <CircleHelp className="w-30 h-5 text-gray-500" />
            </button>
        </div>
    </header>
  )

}
export default Header;