import Link from "next/link";
import { Bell, Home, ShoppingCartIcon, Store } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between border-b border-gray-200 pb-4">
      <Link href="/" className="flex items-center space-x-2">
        <Store className="h-5 w-5 text-gray-800" />
        <p className="hidden md:block text-md font-medium tracking-wider">
          TSENAKO.
        </p>
      </Link>
      <div className="flex items-center gap-6">
        <Home className="w-6 h-6 text-gray-600" />
        <Bell className="w-6 h-6 text-gray-600" />
        <ShoppingCartIcon className="w-6 h-6 text-gray-600" />
      </div>
    </nav>
  );
}
