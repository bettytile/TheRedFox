import "./HomeScreen.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Product from "../componenets/Product";
import { getProducts as listProduct } from "../redux/action/productsAction";
import food from '../assets/images/food4.jpg';
import logo from '../assets/images/IMG_4262.PNG';
import SimpleImageSlider from "react-simple-image-slider";

const HomeScreen = () => {
  const images = [
    { url: food },
    { url: logo },
    { url: food },
    { url: logo },
    { url: food },

]
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProduct());
  }, [dispatch]);
  return (
    
    <div className="homescreen">
    <div className="navbar__body">
            <div className="slider__text">
               <h2>Buy The Best Products From Suppliers.</h2> <br/>
               <p>we have the best products from the most well known suppliers.</p>
            </div>
            <div>
            <img style={{width:400,height:400}} src={food} alt="food"/>
            </div>
        </div>
      <h2 className="homescreen__title">Latest Products</h2>
      <div className="homescreen__products">
        {loading ? (
          <h2>Loading.....</h2>
        ) : error ? (
          <h2>{error}</h2>
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
      <h2 className="homescreen__title">Top Suppliers Products</h2>
      <div className="homescreen__products">
        {loading ? (
          <h2>Loading.....</h2>
        ) : error ? (
          <h2>{error}</h2>
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
      <h2 className="homescreen__title">Best selling Products</h2>
      <div className="homescreen__products">
        {loading ? (
          <h2>Loading.....</h2>
        ) : error ? (
          <h2>{error}</h2>
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
    </div>
  );
};

export default HomeScreen;
