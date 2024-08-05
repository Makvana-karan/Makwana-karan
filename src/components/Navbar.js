import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { navlink } from "./nav";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    navlink();
  }, []);

  return (
    <nav
      className="bg-gray-800 p-4 text-white fixed w-full z-10 top-0"
      style={{ cursor: "default" }}
    >
      <div className="mx-auto text-center flex w-5/6 justify-between">
        <div className="text-xl sm:text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r hover:from-yellow-200 to-pink-500 from-green-400 ">
          <a href="/">Karan Makwana</a>
        </div>
        <div className="hidden sm:flex space-x-6 items-center text-sm">
          <Link
            to="/"
            className="link border-b-2 text-green-400 border-green-400"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="link transition ease-in-out duration-300 hover:text-green-400 hover:border-green-400 hover:border-b-2 "
          >
            About
          </Link>
          <Link
            to="/projects"
            className="link transition ease-in-out duration-300 hover:text-green-400 hover:border-green-400 hover:border-b-2 "
          >
            Projects
          </Link>

          <Link
            to="/contact"
            className="link transition ease-in-out duration-300 hover:text-green-400 hover:border-green-400 hover:border-b-2 "
          >
            Contact
          </Link>
        </div>

        <div className="sm:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-xl focus:outline-none"
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
        <div
          className={`sm:hidden fixed top-0 left-0 w-full h-full bg-gray-800 text-center ${
            isMobileMenuOpen
              ? "flex flex-col items-center justify-center "
              : "hidden"
          }`}
        >
          <button
            onClick={closeMobileMenu}
            className="text-xl absolute top-4 right-4 focus:outline-none"
          >
            ✕
          </button>
          <ul className="font-medium text-2xl space-y-4">
            <li className="bg-slate-600 hover:text-green-400">
              <Link to="/" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="hover:text-green-400">
              <Link to="/about" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className="hover:text-green-400">
              <Link to="/projects" onClick={closeMobileMenu}>
                Projects
              </Link>
            </li>
            <li className="hover:text-green-400">
              <Link to="/experience" onClick={closeMobileMenu}>
                Experince
              </Link>
            </li>
            <li className="hover:text-green-400">
              <Link to="/contact" onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
