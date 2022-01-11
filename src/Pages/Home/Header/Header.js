import React from 'react';
import  { Navbar, Container, Nav } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom';

const Header = (props) => {
    const isLogin = props.isLogin
    const myName = props.myName
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/home">TuringStack</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink as= {Link} to="/home" style={{textDecoration:"none", fontWeight:"bold", color:"white", margin:"7px"}}>HOME</NavLink>
                            {
                                isLogin && <NavLink as= {Link} to="/dashboard" style={{textDecoration:"none", fontWeight:"bold", color:"white", margin:"7px"}}>DASHBOARD</NavLink>
                            }
                            
                        </Nav>
                        <Nav>
                        {
                            myName && <NavLink as= {Link} to="/login" style={{textDecoration:"none", fontWeight:"bold", color:"white", margin:"7px"}}>{myName}</NavLink>
                        }
                        <NavLink as= {Link} to="/register" style={{textDecoration:"none", fontWeight:"bold", color:"white", margin:"7px"}}>SIGNUP</NavLink>
                        {
                            !isLogin && <NavLink as= {Link} to="/login" style={{textDecoration:"none", fontWeight:"bold", color:"white", margin:"7px"}}>LOGIN</NavLink>
                        }
                        
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;