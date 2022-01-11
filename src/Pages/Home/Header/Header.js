import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom';
import "./Header.css"

const Header = (props) => {
    const isLogin = props.isLogin
    const myName = props.myName
    return (
        <div>
            {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/home">TuringStack</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink as={Link} to="/home" style={{ textDecoration: "none", fontWeight: "bold", color: "white", margin: "7px" }}>HOME</NavLink>
                            {
                                isLogin && <NavLink as={Link} to="/dashboard" style={{ textDecoration: "none", fontWeight: "bold", color: "white", margin: "7px" }}>DASHBOARD</NavLink>
                            }

                        </Nav>
                        <Nav>
                            {
                                myName && <NavLink as={Link} to="/login" style={{ textDecoration: "none", fontWeight: "bold", color: "white", margin: "7px" }}>{myName}</NavLink>
                            }
                            <NavLink as={Link} to="/register" style={{ textDecoration: "none", fontWeight: "bold", color: "white", margin: "7px" }}>SIGNUP</NavLink>
                            {
                                !isLogin && <NavLink as={Link} to="/login" style={{ textDecoration: "none", fontWeight: "bold", color: "white", margin: "7px" }}>LOGIN</NavLink>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

 */}

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