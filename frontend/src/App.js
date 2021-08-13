import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import CategoryScreen from "./screens/CategoryScreen";
import SupplierScreen from "./screens/SupplierScreen";
import ProductScreen from "./screens/ProductScreen";
import Navbar from "./componenets/Navbar";
import Backdrop from "./componenets/Backdrop";
import SideDrawer from "./componenets/SideDrawer";
function App() {
  const [sideDrawerToggle, setSideDrawerToggle] = useState(false);
  return (
    <Router>
        <Navbar click={()=>(setSideDrawerToggle(true))}/>
        <SideDrawer show={sideDrawerToggle} click={()=>(setSideDrawerToggle(false))} />
        <Backdrop show={sideDrawerToggle } click={()=>(setSideDrawerToggle(false))} />
        <main>
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/category" component={CategoryScreen} />
            <Route exact path="/supplier" component={SupplierScreen} />
            <Route exact path="/product/:id" component={ProductScreen} />
            <Route exact path="/cart" component={CartScreen} />
          </Switch>
        </main>
        {/* category */}
        {/* homeScreen */}
        {/* productScreen */}
        {/* CartScreen */}
    </Router>
  );
}

export default App;
