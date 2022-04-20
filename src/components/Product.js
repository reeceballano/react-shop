import { useContext } from 'react';
import DataContext from '../context/ProductAPI';
import Currency from './Currency';

const Product  = ({product}) => {
    const { id, name, price, stocks } = product;

    const { addToCart } = useContext(DataContext);

    const handleCartItem = () => {
        addToCart(id);
    }

    return(
        <div className={`product-item ${!stocks ? 'out-of-stock' : ''}`}>
            ID: {id} / NAME: {name} / PRICE: <Currency />{price} / STOCKS: {stocks} 
            <button onClick={handleCartItem}>Add cart</button>
        </div>
    )
}

export default Product;