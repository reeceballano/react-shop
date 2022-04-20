import Currency from "./Currency";

const CartItem = ({item}) => {
    const { id, name, price, qty } = item;
    
    const handleIncreaseItem = () => {
        console.log('increase cart item');

    }

    const handleDecreaseItem = () => {
        console.log('decrease cart item');
    }

    return(
        <div className="cart-item">
            {id} - {name} <Currency />{price} {qty}
            <button onClick={handleIncreaseItem}>+</button>
            <button onClick={handleDecreaseItem}>-</button>
        </div>
    )
}

export default CartItem;