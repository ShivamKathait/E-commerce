import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

//  const navbar = document.querySelector('.header .flex .navbar');

// document.querySelector('#menu-btn').onclick = () =>{
//     navbar.classList.toggle('active');
//     profile.classList.remove('active');

// }

const Navbar = () => {
    const state = useSelector((state) => state.handleCart);

    useEffect(() => {
    
        const menu = document.querySelector('.header .flex .navbar');
        document.querySelector('#menu-btn').onclick = () =>{
            menu.classList.toggle('active');
        }
      }, []);


    return (
        <header className="header">

            <section className="flex">

                {/* <a href="home.html" className="logo">Food  Panda</a> */}
                <NavLink className="logo " variant="success" to="#">FakeShop</NavLink>


                <nav className="navbar">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/products">Product</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    
                </nav>

                <div className="icons">
                    <NavLink to="/login" className="btn btn-outline-dark ms-2">
                        <i className="fa fa-sign-in ">&nbsp;Login</i>
                    </NavLink>
                    <NavLink to="/register" className="btn btn-outline-dark ms-2">
                        <i className="fa fa-user-plus ">&nbsp;Register</i>
                    </NavLink>
                    <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                        <i className="fa fa-shopping-cart ">&nbsp;Cart ({state.length})</i>
                    </NavLink>               
                     <div id="menu-btn" className="fa fa-bars"></div>
                </div>

            </section>
        </header>
    )
}

export default Navbar;