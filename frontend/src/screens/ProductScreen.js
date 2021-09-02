import './ProductScreen.css'
import food from '../assets/images/food4.jpeg';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getProductDetails } from '../redux/action/productsAction';
import {addToCart } from '../redux/action/cartActions';
import Product from "../componenets/Product";
import { getProducts as listProduct } from "../redux/action/productsAction";

const ProductScreen = ({match, history}) => {
    
    const [qty, setQty] = useState();
    const dispatch = useDispatch();

    const productDetails = useSelector(state => state.getProductDetails);
    const {loading, error, product} = productDetails;
    const getProducts = useSelector((state) => state.getProducts);
  const { products, loadings, errors } = getProducts;

    useEffect(()=>{
        if(product && match.params.id !== product._id){
            dispatch(getProductDetails(match.params.id));
        }
        dispatch(listProduct());
    }, [dispatch,product,match]);
    const addToCartHandler = () => {
        dispatch(addToCart(product._id, qty));
        history.push("/cart");
    }
    return (
        <>
        <div className="productscreen">
        {loading ? (
            <h2>Loading...</h2>
        ): error ? (
            <h2>{error}</h2>
        ): (
            <>
            <div className="productscreen__left">
            <div className="left__image">
            <img src={product.imageUrl} alt={product.name} />

            </div>
            <div className="left__info">
            <p className="left__name">{product.name}</p>
            <p>${product.unitPrice}</p>
            <p>Description: {product.description}</p>
           <div style={{flexDirection:'row'}}><p>query:</p><textarea style={{width:500, height:150}}></textarea></div> 
           <img src='../assets/images/food4.jpeg' alt='supplier logo'/>
            </div>

            </div>
            <div className="productscreen__right">
                <div className="right__info">
                <p>
                    Price: <span>${product.unitPrice}</span>
                </p>
                <p>
                    Status: <span>{product.countInStock > 0 ? "In Stock" : "Out of Stock"}</span>
                </p>
                <p>
                    Qty
                    <select value={qty} onChange={(e)=>setQty(e.target.value)}>
                       {[...Array(product.countInStock).keys()].map((x)=>
                           <option key={x+1} value={x+1}>{x+1}</option>
                       )}
                    </select>
                </p>
                <p>
                   <button type="button" onClick={addToCartHandler}> Add To Cart</button> 
                </p>
                </div>
            </div>
            
            </>
        )}
        
                    </div>
                    <h2 className="homescreen__title">Top Suppliers Products</h2>
      <div className="homescreen__products">
        {loadings ? (
          <h2>Loading.....</h2>
        ) : error ? (
          <h2>{errors}</h2>
        ) : (
          products.map((product) => <Product 
          key={product._id} 
          productId={product._id}
              name={product.name}
              unitPrice={product.unitPrice}
              description={product.description}
              imageUrl={product.imageUrl}
            
          />)
        )}
      </div>
                    </>
                    
    )
}

export default ProductScreen
