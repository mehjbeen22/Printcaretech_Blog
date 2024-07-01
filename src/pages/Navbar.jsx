import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-around items-center">
          <Link to="/">
            <h1 className="text-2xl font-bold text-blue-900">
              PrinterCareTech
            </h1>
          </Link>
          <div className="flex space-x-4">
            <Link to="/" className="hover:text-gray-300 cursor-pointer">
              Explore
            </Link>
            <Link to="/" className="hover:text-gray-300 cursor-pointer">
              Shop
            </Link>
            <Link to="/" className="hover:text-gray-300 cursor-pointer">
              Support
            </Link>
          </div>
        </div>
      </div>

      <ul className="flex justify-center space-x-4 py-2 bg-blue-900 text-white">
        <Link
          to="/printeroffline"
          className="hover:text-gray-300 cursor-pointer"
        >
          Printer Offline
        </Link>
        <Link to="/printersetup" className="hover:text-gray-300 cursor-pointer">
          Printer Setup
        </Link>
        <Link to="/scannersetup" className="hover:text-gray-300 cursor-pointer">
          Scanner Setup
        </Link>
        <Link
          to="/privacypolicy"
          className="hover:text-gray-300 cursor-pointer"
        >
          Privacy Policy
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
