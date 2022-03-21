import { useContext } from "react";
import DataContext from "../context/ProductAPI";

const CartItems = () => {
    const { cart } = useContext(DataContext);

    return(
        <div className="cart-items">
            {
                cart.map(c => {
                    return JSON.stringify(c)
                })
            }
        </div>
    )
}

export default CartItems;