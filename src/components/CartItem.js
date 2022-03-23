const CartItem = ({item}) => {
    const { id, name, price, qty } = item;
    return(
        <div className="cart-item">
            {name} {price} {qty}
        </div>
    )
}

export default CartItem;