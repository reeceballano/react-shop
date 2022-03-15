import { DataProvider } from "./context/ProductAPI";
import Products from "./components/Products";

const App = () => {
    return(
        <div className="app">
            <h2>Shop</h2>
            <DataProvider>
                <Products />
            </DataProvider>
        </div>
    )
}

export default App;