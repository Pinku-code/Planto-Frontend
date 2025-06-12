import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Bars3Icon,
  XMarkIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/products", label: "Products" },
    { to: "/services", label: "Services" },
    { to: "/training", label: "Training & Courses" },
    { to: "/journal", label: "Journal" },
    { to: "/blog", label: "Blog" },
    { to: "/case-studies", label: "Case Studies" },
    { to: "/team", label: "Team" },
    { to: "/collaborate", label: "Collaborate" },
    { to: "/contact", label: "Contact" },
  ];

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] md:w-[90%] max-w-7xl z-50 rounded-2xl backdrop-blur bg-white/80 dark:bg-gray-900/70 shadow-lg transition-all p-1">
      <div className="flex justify-evenly items-center px-2 py-3">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold text-green-600 dark:text-green-400"
        >
          Plantosphere
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex justify-center items-center gap-3 text-sm font-semibold text-gray-700 dark:text-gray-200">
          {navItems.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`relative p-2 rounded-2xl transition duration-300
  ${
    location.pathname === to
      ? "text-green-700 dark:text-green-400 after:scale-x-100"
      : "text-gray-700 dark:text-gray-200 hover:text-green-900 dark:hover:text-green-400 after:scale-x-0"
  }
  after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-3/4 after:h-[2px] after:bg-green-500 after:transition-transform after:duration-300 after:origin-center after:-translate-x-1/2`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop Theme Toggle */}
        <div className="hidden md:block ml-1">
          <ModeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-1">
          <ModeToggle />
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? (
              <XMarkIcon className="h-6 w-6 text-gray-700 dark:text-gray-200" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-gray-700 dark:text-gray-200" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
  <div className="md:hidden bg-white dark:bg-gray-900 rounded-b-2xl px-4 pb-4 space-y-2 text-sm font-medium">
    {navItems.map(({ to, label }) => (
      <Link
        key={to}
        to={to}
        className={`relative block transition px-2 py-1 rounded-md 
          ${location.pathname === to
            ? 'text-green-700 dark:text-green-400 after:scale-x-100'
            : 'text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 after:scale-x-0'}
          after:content-[''] after:absolute after:left-4/10 after:bottom-0 after:w-9/10 after:h-[2px] after:bg-green-500 after:transition-transform after:duration-300 after:origin-left after:-translate-x-1/2`}
      >
        {label}
      </Link>
    ))}

    <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
      <Link
        to="/profile"
        className={`relative block transition px-2 py-1 rounded-md
          ${location.pathname === "/profile"
            ? 'text-green-700 dark:text-green-400 after:scale-x-100'
            : 'text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 after:scale-x-0'}
          after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-3/4 after:h-[2px] after:bg-green-500 after:transition-transform after:duration-300 after:origin-center after:-translate-x-1/2`}
      >
        Profile
      </Link>
      <Link
        to="/logout"
        className="block text-red-600 dark:text-red-400 hover:underline px-2 py-1"
      >
        Logout
      </Link>
    </div>
  </div>
)}

    </header>
  );
}
