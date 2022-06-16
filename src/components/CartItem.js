import { useContext, useState } from "react";
import DataContext from "../context/ProductAPI";
import Currency from "./Currency";

const CartItem = ({item}) => {
    const  { id, name, price, qty } = item;
    const { products } = useContext(DataContext);

    const [cartQty, setCartQty] = useState(qty);

    const handleIncreaseItem = () => {
        console.log('increase cart item', qty);

        const product = products.find(item => item.id === id);

        if(cartQty <= product.stocks) {
            console.log('add qty');
            setCartQty(cartQty+1);
        }
    }

    const handleDecreaseItem = () => {
        console.log('decrease cart item');

        if(cartQty !== 0) {
            console.log('minus qty');
            setCartQty(cartQty-1);
        }
    }

    const total = () => {
        return price * qty;
    }

    return(
        <div className="cart-item">
            {id} - {name} <Currency />{price} {cartQty} | <Currency />{total()}
            <button onClick={handleIncreaseItem}>+</button>
            <button onClick={handleDecreaseItem}>-</button>
        </div>
    )
}

export default CartItem;