import { useContext } from 'react';
import DataContext from '../context/ProductAPI';
import Product from './Product';

const Products = () => {
    const { products, cart } = useContext(DataContext);

    return(
        <>
        {JSON.stringify(cart)}
        <div className="products">
            {
                products.map(item =>
                    <Product product={item} key={item.id} />    
                )
            }
        </div>
        </>
    )
}

export default Products;