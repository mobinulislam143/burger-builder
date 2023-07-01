import React from "react";
import { NavLink } from "react-router-dom";
import "../Header/Header.css"
import { 
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
 } from "reactstrap"
 import Logo from "../../assets/logo.png"

const Header = () => {
    return (
        <div className="Navigation">
           <Navbar style={{
                backgroundColor: "#D70F64",
                height: "97px",
           }} >
                <NavbarBrand className="mr-auto ml-md-5 Brand" href="/">
                     <img src={Logo} alt="Logo" width="80px" />
                </NavbarBrand>
                <Nav className="mr-md-5">
                    <NavItem>
                        <NavLink exact to='/' className="NavLink" >Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink exact to='/orders' className="NavLink" >Order</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink exact to='/login' className="NavLink" >Login</NavLink>
                    </NavItem>
                </Nav>
           </Navbar>
        </div>        
    )
}
export default Header