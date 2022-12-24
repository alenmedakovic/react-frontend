import React from 'react'
import "./navbar.css";
import { BrowserRouter, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/">About</NavLink>
            </li>
            <li>
                <NavLink to="/">Contact</NavLink>
            </li>
        </ul>
        <nav>
            <ul>
                
            </ul>
            <div class="right">
                <ul>
                    <li>
                        <a href="#">Sign up</a>
                    </li>
                    <li>
                        <a href="#">Log in</a>
                    </li>
                </ul>
            </div>
        </nav>
    </nav>
  );
};

export default Navbar;