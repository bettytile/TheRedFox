import { Link } from 'react-router-dom';
import './SideDrawer.css';
import { useSelector } from 'react-redux';

const SideDrawer = ({show, click}) => {
    const sideDrawerClass =["sidedrawer"];
    if(show){
        sideDrawerClass.push("show")
    }
    const cart = useSelector(state=> state.cart);
    const {cartItems} = cart;

    const getCartCount = () => {
        return cartItems.reduce( (qty,item) => qty + Number(item.qty), 0);
    };
    return (
        <div className={sideDrawerClass.join(" ")}>
            <ul className="sidedrawer__link" onClick={click}>
            <li>
                    <Link to="/" >
                        
                        <span>
                         Home                       
                        </span>
                        
                    </Link>
                </li>
            <li>
                    <Link to="/category" >
                        
                        <span>
                         Category                        
                        </span>
                        
                    </Link>
                </li>
               
                <li>
                    <Link to="/suppliers">
                        
                        <span>
                         Suppliers                       
                        </span>
                        
                    </Link>
                </li>
                <li>
                    <Link to="/" >
                        
                        <span>
                         Best Selling                       
                        </span>
                        
                    </Link>
                </li>
                <li>
                    <Link to="/" >
                        
                        <span>
                         About                       
                        </span>
                        
                    </Link>
                </li>
                <li>
                    <Link to="/cart" className="cart__link">
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                        cart
                        <span className="cartlogo__badge">{getCartCount()}</span>
                        </span>
                        
                    </Link>
                </li>
                <li  className="signin">
                    <Link to="/" >
                        
                        <span>
                         Sign In                       
                        </span>
                        
                    </Link>
                </li>
            

            </ul>

        </div>
    )
}

export default SideDrawer
