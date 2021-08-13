import './Navbar.css';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import SimpleImageSlider from "react-simple-image-slider";
import food from '../assets/images/food4.jpg';
import logo from '../assets/images/IMG_4262.PNG';
const Navbar = ({click}) => {
    const images = [
        { url: food },
        { url: logo },
        { url: food },
        { url: logo },
        { url: food },

    ]

    const cart = useSelector(state=> state.cart);
    const {cartItems} = cart;

    const getCartCount = () => {
        return cartItems.reduce( (qty,item) => qty + Number(item.qty), 0);
    };
    return (
        <nav className="navbar">
        <div className="navbar__items">
        <div className="navbar__logo">
            <img width='140' height='140' style={{margin:0}} src={logo} alt="logo"/>
            {/* <h3>The Red Fox</h3> */}
        </div>
            <ul className="navbar__links">
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
                <li style={{float: 'right', paddingLeft:'400px'}} className="signin">
                    <Link to="/" >
                        
                        <span>
                         Sign In                       
                        </span>
                        
                    </Link>
                </li>
                
            </ul>
            <div className="hamburger__menu" onClick={click }>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <div className="navbar__body">
            <div className="slider__text">
               <h2>Buy The Best Products From Suppliers.</h2> <br/>
               <p>we have the best products from the most well known suppliers.</p>
            </div>
            <div>
            <SimpleImageSlider
            slideDuration={0.2}
            showBullets={true}
            bgColor={'transparent'}
            startIndex={0}
        width={504}
        height={504}
        images={images}
      />
            </div>
        </div>
        </nav>
        
    )
}

export default Navbar
