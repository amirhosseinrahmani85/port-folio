import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Menu, X } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const [theme, setTheme] = useState('light');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (theme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const links = [
    { to: '/', label: 'خانه' },
    { to: '/about', label: 'درباره من' },
    { to: '/projects', label: 'نمونه‌کارها' },
    { to: '/contact', label: 'ارتباط با من' },
  ];

  const linkClass = (path) =>
    `block px-3 py-2 rounded-md transition duration-200 ${
      location.pathname === path
        ? 'text-emerald-500 font-bold'
        : 'hover:text-emerald-400 text-gray-700 dark:text-gray-200'
    }`;

  return (
    <nav className="w-full  bg-gradient-to-b from-gray-100 to-gray-100 dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-900 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* لوگو */}
        <div className="text-xl font-extrabold text-emerald-600 dark:text-emerald-400">
          فرانت آذر
        </div>

        {/* منوی دسکتاپ */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link key={link.to} to={link.to} className={linkClass(link.to)}>
              {link.label}
            </Link>
          ))}

          {/* دکمه تغییر تم */}
          
        </div>
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>

        {/* دکمه منوی موبایل */}
        <div className="md:hidden flex items-center gap-2">
          {/* <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button> */}

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-800 transition"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* منوی موبایل */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 pb-4">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={linkClass(link.to)}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
