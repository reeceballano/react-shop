import { DataProvider } from "./context/ProductAPI";
import Products from "./components/Products";
import CartItems from "./components/CartItems";

const App = () => {
    return(
        <div className="app">
            <h2>Shop</h2>
            <DataProvider>
                <CartItems />
                <Products />
            </DataProvider>
        </div>
    )
}

export default App;