/* eslint-disable @next/next/no-img-element */
import { useCart } from "react-use-cart";

const Pizza = ({ pizza, name, ingr, price, img }) => {
    const { addItem } = useCart();

    return (
        <div className="pizza" onClick={() => addItem(pizza)}>
            <img src={img} alt="pizza" />
            <div className="pizza-inf">
                <div className="pizza-name">{name}</div>
                <div className="pizza-ingr">{ingr.join(", ")}</div>
                <div className="pizza-price">${price}</div>
            </div>
        </div>
    );
};

export default Pizza;
