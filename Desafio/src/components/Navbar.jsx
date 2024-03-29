import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { PizzaContext } from '../context/PizzaContext';

const Navbar = () => {
    const { carro } = useContext(PizzaContext);
    const totalCarro = carro.reduce((total, item) => total + item.price * item.cantidad, 0);
    const setActiveClass = ({isActive}) => (isActive ? 'active' : 'inactive')
    
    return(
        <nav>
            <span></span>
            <div className='links'>
                <NavLink to='/' className={({ isActive })=> setActiveClass(isActive)}>Pizzería Mamma Mia!</NavLink>
                <div className="cart">
                    <NavLink to='/carrito' className={({ isActive })=> setActiveClass(isActive)}><i className="fa-solid fa-cart-shopping"></i></NavLink>               
                    <span>${totalCarro.toFixed(2)}</span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;