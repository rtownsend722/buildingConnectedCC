import React, {Component} from 'react';
import style from '../styles/subProducts.css';
import Product from './Product';

export default class SubProducts extends Component {
  render() {
    return (
      <div className="sub-products">
        <div className='sp-main-container'>
          <h3 className='sp-tagline'>You might also like...</h3>
          <div className='sp-product-container'>
            {
              this.props.products.map(prod => {
                return <Product
                  key={prod.id}
                  interactive={prod.interactive}
                  lead={prod.lead}
                  sub={prod.sub}
                />
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

