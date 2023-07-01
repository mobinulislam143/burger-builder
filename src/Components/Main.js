import React from "react";
import Header from "./Header/Header";
import BurgerBuilder from "./BurgerBuilder/BurgerBuilders";
import Orders from "./Order/Order";
import Checkout from "./Order/Checkoute/Checkout";
import { Routes,  Route } from 'react-router-dom';
import Footer from "./footer/footer";
import Auth from "./Auth/Auth";
import Dashboard from "./Dashboard/dashboard";

const Main = props => { 
     
    return (
        <div>
            <Header/>
            <div className="container">
                    <Routes>
                        <Route exact path='/orders' element={ <Orders/> } />
                        <Route exact path="/checkout" element={<Checkout/>} />
                        <Route exact path="/login" element={<Auth/>} />
                        <Route exact path="/" element={<BurgerBuilder/>} />
                        <Route exact path="/dashboard" element={<Dashboard/>} />
                    </Routes>
            </div>
        <Footer/>
        </div>

    )
}
export default Main