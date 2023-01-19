import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <div className="">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin">
                  ADMIN
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/users">
                  USERS
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container p-4">
        <Outlet />
      </div>
    </>
  );
};

export default Navbar;
