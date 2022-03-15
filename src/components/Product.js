import { useContext } from 'react';
import DataContext from '../context/ProductAPI';

const Product  = ({product}) => {
    const { id, name, price, stocks } = product;

    const { addToCart } = useContext(DataContext);

    const handleCartItem = () => {
        addToCart(id);
    }

    return(
        <div className="product-item">
            ID: {id} / NAME: {name} / PRICE: {price} / STOCKS: {stocks} <button onClick={handleCartItem}>Add cart</button>
        </div>
    )
}

export default Product;