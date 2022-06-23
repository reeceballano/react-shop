import { createContext, useEffect, useState } from 'react';

const DataContext = createContext([]);

export const DataProvider = ({children}) => {
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);

    const fetchProducts = async () => {
        // const data = [
        //     { id: 1, name: 'Rebisco', price: 3, stocks: 10, },
        //     { id: 2, name: 'Biko', price: 4, stocks: 5 },
        //     { id: 3, name: 'Kanin', price: 5, stocks: 3 },
        //     { id: 4, name: 'Dinengdeng', price: 5, stocks: 3 },
        //     { id: 5, name: 'Papaitan', price: 5, stocks: 6 },
        // ]

        const res = await fetch(`https://fakestoreapi.com/products`);
        const data = await res.json();
        const randomStocks = () => { return Math.floor(Math.random() * 100) };
        const newData = data.map(item => (
            {...item, stocks: randomStocks() }
        ));

        for(let element of newData) {
            element.name = element.title;
            delete element.title;
        }

        setProducts(newData);
    }

    const updateQty = (id) => {
        id = 1;
        const item = products.find(i => i.id === id);
        
        if(!item) { return }

        const updateItem = { ...item, stocks: item.stocks-- }

        console.log(updateItem);
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

        // CHECK IF STOCKS NOT ZERO
        if(!item.stocks ) { return }

        // DECREASE STOCK
        item.stocks--;

        // CHECK IF ITEM IS EXIST IN CART ITEMS; IF EXIST, JUST UPDATE QTY
        if(checkItem(item.id)) {
            const updateItem = cart.find(i => i.id === item.id);
            updateItem.qty++;
            setCart([...cart], updateItem)
        } else {
            setCart([...cart, cartItem]);
        }

    }

    const checkItem = (id) => {
        const isExist = cart.find(item => item.id === id);

        if(isExist) { return true; }

        return false;
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
            setProducts,
            cart,
            setCart,
            addToCart,
            updateQty
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;