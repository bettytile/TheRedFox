import React from 'react';
import { Link } from 'react-router-dom';
import  './CategoryScreen.css';

function CategoryScreen() {
    return (
        <div className="homescreen">
            <h2 className="homescreen__title">All Categories</h2>
      <div className="homescreen__products">
        <ul>
            <span>AGRICULTURE</span>
            
             <Link><li>Agricultural Waste</li></Link> 
             <Link><li>Animal Products</li></Link> 
             <Link><li>Beans </li></Link>
             <Link><li>Cocoa Beans</li></Link>
             <Link><li>Coffee Beans</li> </Link> 
             <Link><li>Farm Machinery & Equipment</li> </Link>
             <Link><li>Feed</li></Link>
             <Link><li>Fresh Seafood</li></Link>
             <Link><li>Herbal Cigars & Cigarettes</li></Link>
             <Link><li>Grain</li></Link>
             <Link><li>Fruit </li></Link> 
             <Link><li>Mushrooms & Truffles</li></Link> 
             <Link><li>Nuts & Kernels ·Ornamental Plants</li> </Link>
             <Link><li>Other Agriculture Products</li> </Link>
             <Link><li>Plant & Animal Oil</li> </Link>
             <Link><li>Plant Seeds & Bulbs</li> </Link>
             <Link><li>Timber Raw Materials</li></Link> 
             <Link><li>Vanilla Beans</li> </Link>
            <Link><li>Vegetables</li></Link>
        </ul>
      </div>
        </div>
    )
}

export default CategoryScreen
