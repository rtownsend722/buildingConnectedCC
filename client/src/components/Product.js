import React, {Component} from 'react';
import style from '../styles/product.css';
import icon from '../assets/prod-icon.png';

export default class Product extends Component {
  render() {
    const {sub, lead} = this.props;
    return (
      <div className='product'>
        <div className='product-icon'>
          <img src={icon} alt='star' />
        </div>
        <div className='lead'>{lead}</div>
        <div className='sub'>{sub}</div>
        <a className='see-how'>See how >></a>
      </div>
    );
  }
}