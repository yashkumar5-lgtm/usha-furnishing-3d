import { NavLink } from "react-router-dom";

import "../../styles/navbar.css";

function Navbar() {

    return (

        <header className="navbar">

            <div className="nav-container">

                <div className="logo">

                    <h2>USHA</h2>

                    <span>FURNISHING & GADI KARKHANA</span>

                </div>

                <nav>

                    <ul className="menu">

                        <li>
                            <NavLink to="/">
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/about">
                                About
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/products">
                                Products
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/contact">
                                Contact
                            </NavLink>
                        </li>

                    </ul>

                </nav>

            </div>

        </header>

    );

}

export default Navbar;