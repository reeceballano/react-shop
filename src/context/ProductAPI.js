import { createContext, useEffect, useState } from 'react';

const DataContext = createContext([]);

export const DataProvider = ({children}) => {
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);

    const fetchProducts = () => {
        const data = [
            { id: 1, name: 'Rebisco', price: 3, stocks: 10, },
            { id: 2, name: 'Biko', price: 4, stocks: 5 },
            { id: 3, name: 'Kanin', price: 5, stocks: 3 },
            { id: 4, name: 'Dinengdeng', price: 5, stocks: 3 },
            { id: 5, name: 'Papaitan', price: 5, stocks: 6 },
        ]

        setProducts(data);
    }

    const addToCart = (id) => {
        // const items = [...cart, product]
        // console.log(items)
        // setCart(items);
        const item = [...products].find(item => item.id === id);

        const cartItem = {
            id: item.id,
            name: item.name,
            price: item.price,
            qty: 1    
        } 

        if(!item.stocks ) { return }
        
        setCart([...cart, cartItem]);
    }

    useEffect(() => {
        setCart(cart);
    },[cart])

    useEffect(() => {
        fetchProducts();
    },[])

    return(
        <DataContext.Provider value={{
            products,
            cart,
            setCart,
            addToCart
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;