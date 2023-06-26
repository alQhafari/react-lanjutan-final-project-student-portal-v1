import React from "react";
import { Link } from "@chakra-ui/react";
import { Link as RouteLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-teal-500">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="w-full flex items-center justify-between">
            <div className="flex-shrink-0">
              <RouteLink to="/">
                <Link
                  data-testid="home-page"
                  className="text-white font-bold text-xl"
                >
                  Student Portal
                </Link>
              </RouteLink>
            </div>
            <div className="ml-4 flex items-center">
              <RouteLink
                data-testid="student-page"
                to="/student"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                <Link>All Student</Link>
              </RouteLink>
              <RouteLink
                data-testid="add-page"
                to="/add"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                <Link>Add Student</Link>
              </RouteLink>
              {/* Add more navigation links here */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
