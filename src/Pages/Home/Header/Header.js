import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Header.css"

const Header = (props) => {
    const isLogin = props.isLogin
    return (
        <div>
{/*************************** Navigation Setup **************************/}
            <nav>
                <ul className="navigation">
                    <div className="logo">

                        <li><Link to="/home">HOME</Link></li>
                        {
                            isLogin && <NavLink as={Link} to="/dashboard" style={{ textDecoration: "none", fontWeight: "bold", color: "white", margin: "7px" }}>DASHBOARD</NavLink>
                        }

                    </div>
                    <div className="navber">
                        <li><Link to="/register">SIGNUP</Link></li>
                        <li><Link to="/login">LOGIN</Link></li>
                    </div>
                </ul>

            </nav>

        </div>
    );
};

export default Header;