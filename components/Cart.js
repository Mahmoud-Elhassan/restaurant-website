/* eslint-disable @next/next/no-img-element */
import { useCart } from "react-use-cart";
import Link from "next/link";

const Cart = () => {
    const {
        isEmpty,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();

    if (isEmpty) return <p className="pop-cart-empty">Your cart is empty</p>;

    return (
        <div id="cart">
            <div className="cart-items">
                {items.map((pizza) => (
                    <div className="pizza-cart" key={pizza.id}>
                        <img src={pizza.img} alt="pizza" />
                        <div className="pizza-inf-cart">
                            <div className="pizza-name-cart">{pizza.name}</div>
                            <div className="pizza-ingr-cart">
                                {pizza.ingredients.join(", ")}
                            </div>
                            <div className="pizza-price-cart">
                                ${pizza.price}
                            </div>
                            <div className="pizza-control-cart">
                                <div className="buttons-cart">
                                    <button
                                        onClick={() =>
                                            updateItemQuantity(
                                                pizza.id,
                                                pizza.quantity + 1
                                            )
                                        }
                                    >
                                        +
                                    </button>
                                    <div>{pizza.quantity}</div>
                                    <button
                                        onClick={() =>
                                            updateItemQuantity(
                                                pizza.id,
                                                pizza.quantity - 1
                                            )
                                        }
                                    >
                                        -
                                    </button>
                                </div>
                                <button onClick={() => removeItem(pizza.id)}>
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="total-clear-cart">
                <div className="cart-price">Total price: ${cartTotal}</div>
                <button onClick={() => emptyCart()}>Clear cart</button>
            </div>
            <div className="order-btn-cart">
                <Link href="/">
                    <a onClick={() => emptyCart()}>Order</a>
                </Link>
            </div>
        </div>
    );
};

export default Cart;
