import "./HomeScreen.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Product from "../componenets/Product";
import { getProducts as listProduct } from "../redux/action/productsAction";
const HomeScreen = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProduct());
  }, [dispatch]);
  return (
    <div className="homescreen">
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
