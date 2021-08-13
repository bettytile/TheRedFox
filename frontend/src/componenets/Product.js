import { Link } from 'react-router-dom';
import './Product.css';

const Product = ({imageUrl, name, unitPrice, description, productId}) => {
    return (
        <div className="product">
            <img src={imageUrl} alt="product" />
            <div className="product__info">
                <p className="info__name">
                {name}
                </p>
                <p className="info__description">
                {description.substring(0,100)}...
                </p>
                <p className="info__price">${unitPrice}</p>
                <Link to={`/product/${productId}`} className="info__button">
                    View
                </Link>
            </div>
        </div>
    )
}

export default Product
