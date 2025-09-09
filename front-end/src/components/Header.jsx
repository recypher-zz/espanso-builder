import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="flex flex-row items-center justify-between sm:justify-around p-2 border-b-2 bg-gray-300">
      <a
        href="/"
        className="flex items-center h-10 px-10 bg-gradient-to-r from-gray-900 via-gray-600 to-gray-500 rounded-tl-full rounded-br-full font-bold uppercase italic text-white hover:opacity-90"
      >
        Espanso Builder
      </a>
      <nav className="hidden sm:flex justify-between items-center gap-4 font-semibold">
        <a href="/" className="hover:text-gray-500">
          Home
        </a>
        <a href="/triggers/all" className="hover:text-gray-500">
          All Triggers
        </a>
      </nav>
      <nav className="sm:hidden flex flex-col items-end gap-1 font-semibold">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="sm:hidden font-bold text-xl hover:text-gray-500"
        >
          {showMenu ? <GrClose /> : <GiHamburgerMenu />}
        </button>
        {showMenu && (
          <>
            <a href="/" className="hover:text-gray-500">
            Home
            </a>
            <a href="/triggers/all" className="hover:text-gray-500">
            All Triggers
            </a>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;