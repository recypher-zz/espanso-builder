import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex flex-row items-center justify-between sm:justify-around p-3 bg-white/30 backdrop-blur-md border-b border-white/20 shadow-md">
      {/* Logo / Branding */}
      <a
        href="/"
        className="flex items-center h-10 px-8 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 rounded-tl-full rounded-br-full font-bold uppercase italic text-white tracking-wider shadow hover:opacity-90 hover:scale-105 transition-transform duration-300"
      >
        Espanso Builder
      </a>

      {/* Desktop Nav */}
      <nav className="hidden sm:flex justify-between items-center gap-6 font-semibold text-gray-900">
        <a href="/" className="hover:text-gray-600 transition-colors">
          Home
        </a>
        <a href="/triggers/all" className="hover:text-gray-600 transition-colors">
          All Triggers
        </a>
      </nav>

      {/* Mobile Nav */}
      <nav className="sm:hidden flex flex-col items-end gap-1 font-semibold">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="font-bold text-2xl text-gray-900 hover:text-gray-600 transition-colors"
        >
          {showMenu ? <GrClose /> : <GiHamburgerMenu />}
        </button>
        {showMenu && (
          <div className="flex flex-col items-end gap-2 mt-2 bg-white/40 backdrop-blur-md rounded-lg p-3 shadow-lg">
            <a href="/" className="hover:text-gray-600 transition-colors">
              Home
            </a>
            <a href="/triggers/all" className="hover:text-gray-600 transition-colors">
              All Triggers
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
