import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom"

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex flex-row items-center justify-between sm:justify-around p-3 bg-white/30 backdrop-blur-md border-b border-white/20 shadow-md">
      <Link
        to="/"
        className="flex items-center h-10 px-8 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 rounded-tl-full rounded-br-full font-bold uppercase italic text-white tracking-wider shadow hover:opacity-90 hover:scale-105 transition-transform duration-300"
      >
        Espanso Builder
      </Link>

      <nav className="hidden sm:flex justify-between items-center gap-6 font-semibold text-gray-900">
        <Link to="/" className="hover:text-gray-600 transition-colors">
          Home
        </Link>
        <Link to="/triggers/all" className="hover:text-gray-600 transition-colors">
          All Triggers
        </Link>
        <Link to="/login" className="hover:text-gray-600 transition-colors">
          Login
        </Link>
      </nav>

      <nav className="sm:hidden flex flex-col items-end gap-1 font-semibold">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="font-bold text-2xl text-gray-900 hover:text-gray-600 transition-colors"
        >
          {showMenu ? <GrClose /> : <GiHamburgerMenu />}
        </button>
        {showMenu && (
          <div className="flex flex-col items-end gap-2 mt-2 bg-white/40 backdrop-blur-md rounded-lg p-3 shadow-lg">
            <Link to="/" className="hover:text-gray-600 transition-colors">
              Home
            </Link>
            <Link to="/triggers/all" className="hover:text-gray-600 transition-colors">
              All Triggers
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
