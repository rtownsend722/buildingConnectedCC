import React, {Component} from 'react';
import style from '../styles/product.css';

export default class Product extends Component {
  render() {
    const {sub, lead} = this.props;
    return (
      <div className='product'>
        <div className='lead'>{lead}</div>
        <div className='sub'>{sub}</div>
      </div>
    );
  }
}