import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="shadow-lg">
      <div className="flex justify-around items-center mx-auto font-semibold text-xl py-2">
        <div className="text-2xl font-bold text-slate-50">
          Task
        </div>
        <div className="flex gap-5">
          <Link to='/' className="hover:underline underline-offset-4 hover:text-teal-100 transition-all">
            Home
          </Link>
          <Link to='/tables' className="hover:underline underline-offset-4 hover:text-teal-100 transition-all">
            Tables
          </Link>
          <Link to='/charts' className="hover:underline underline-offset-4 hover:text-teal-100 transition-all">
            Charts
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
