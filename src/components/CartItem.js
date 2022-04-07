const CartItem = ({item}) => {
    const { id, name, price, qty } = item;
    
    const handleIncreaseItem = () => {
        console.log('increase cart item');

    }

    return(
        <div className="cart-item">
            {id} - {name} {price} {qty}
            <button onClick={handleIncreaseItem}>+</button>
            <button>-</button>
        </div>
    )
}

export default CartItem;