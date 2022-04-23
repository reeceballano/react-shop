import { useContext } from "react";
import DataContext from "../context/ProductAPI";
import CartItem from "../components/CartItem";

const CartItems = () => {
    const { cart } = useContext(DataContext);

    return(
        <>
            <div className="cart-items">
                {
                    cart.map(c => {
                        return <CartItem item={c} key={c.id}/>
                    })
                }
            </div>
        </>
    )
}

export default CartItems;