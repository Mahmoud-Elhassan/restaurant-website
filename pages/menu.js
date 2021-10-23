/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { useCart } from "react-use-cart";
//
import Pizza from "../components/Pizza.js";
import pizzaMenu from "../components/PizzaMenu.js";
import Cart from "../components/Cart.js";
//
import Popup from "reactjs-popup";
//
import "reactjs-popup/dist/index.css";

const Menu = () => {
    const [open, setOpen] = useState(false);
    //
    const { totalUniqueItems } = useCart();
    return (
        <div id="menu">
            <img
                className="menu-background"
                src="/images/menu-back.jpg"
                alt=""
            />
            <div className="cart-logo" onClick={() => setOpen(!open)}>
                {totalUniqueItems !== 0 && (
                    <div className="cart-count-circle">{totalUniqueItems}</div>
                )}
                <img src="/images/shopping-cart.svg" alt="cart" />
            </div>
            <Popup
                open={open}
                closeOnDocumentClick
                onClose={() => setOpen(!open)}
            >
                <div className="popup-card">
                    <Cart />
                </div>
            </Popup>
            <div className="pizzas-container">
                {pizzaMenu.map((pizza) => (
                    <Pizza
                        pizza={pizza}
                        img={pizza.img}
                        name={pizza.name}
                        ingr={pizza.ingredients}
                        price={pizza.price}
                        key={pizza.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default Menu;
