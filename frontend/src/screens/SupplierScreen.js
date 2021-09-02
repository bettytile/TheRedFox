import './CartScreen.css'
import CartItem from '../componenets/CartItem';
import food from '../assets/images/IMG_4262.PNG'
import { useDispatch,useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../redux/action/cartActions';
const SupplierScreen = () => {

    const dispatch = useDispatch();
    const cart =useSelector(state => state.cart);
    const {cartItems} = cart;

    const qtyChangeHandler = (id, qty) =>{
        dispatch(addToCart(id,qty))
    }
    const removeHandler = (id) => {
        dispatch(removeFromCart(id))
    }
    const getCartCount = () => {
        return cartItems.reduce((qty,item)=> Number(item.qty) + qty, 0)
    }
    const getCartSubTotal = () => {
        return cartItems.reduce((price, item)=> item.price * item.qty + price, 0)
    }
    return (
        <div className="cartscreen">
            <div className="cartscreen__left">
            <h2>Suppliers List</h2>
            <div className="cartitem">
            <div className="cartitem__image">
            <img width='100' height='100' src={food} alt="supplier Logo" />

            </div>
            <Link to={`/product/000`} className="cartitem__name">
                <p>Supplier 1</p>
            </Link>
            <p className="cartitem__price">qwertyuio qwertyuiop wertyuiop asdfghjkl asdfghjk asdfghjkl</p>
            
            <button title="Detail" className="cartitem__delete">
                Detail
            </button>

        </div>
        <div className="cartitem">
            <div className="cartitem__image">
            <img width='100' height='100' src={food} alt="supplier Logo" />

            </div>
            <Link to={`/product/000`} className="cartitem__name">
                <p>Supplier 1</p>
            </Link>
            <p className="cartitem__price">qwertyuio qwertyuiop wertyuiop asdfghjkl asdfghjk asdfghjkl</p>
            
            <button title="Detail" className="cartitem__delete">
                Detail
            </button>

        </div>
        <div className="cartitem">
            <div className="cartitem__image">
            <img width='100' height='100' src={food} alt="supplier Logo" />

            </div>
            <Link to={`/product/000`} className="cartitem__name">
                <p>Supplier 1</p>
            </Link>
            <p className="cartitem__price">qwertyuio qwertyuiop wertyuiop asdfghjkl asdfghjk asdfghjkl</p>
            
            <button title="Detail" className="cartitem__delete">
                Detail
            </button>

        </div>
        <div className="cartitem">
            <div className="cartitem__image">
            <img width='100' height='100' src={food} alt="supplier Logo" />

            </div>
            <Link to={`/product/000`} className="cartitem__name">
                <p>Supplier 1</p>
            </Link>
            <p className="cartitem__price">qwertyuio qwertyuiop wertyuiop asdfghjkl asdfghjk asdfghjkl</p>
            
            <button title="Detail" className="cartitem__delete">
                Detail
            </button>

        </div>
            </div>
            <div className="cartscreen__right">
                <div className="cartscreen__info">
                <p>
                   Add Here
                </p>
                <p>
                   
                </p>
                <div>
                    <button>Your Ad here</button>
                </div>

                </div>
            </div>
        </div>
    )
}

export default SupplierScreen
