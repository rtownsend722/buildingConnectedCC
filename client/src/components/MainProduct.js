import React, {Component} from 'react';
import style from '../styles/mainProduct.css';

export default class MainProduct extends Component {
  render() {
    return (
      <div className='main-product'>
        <h1 className='mp-name'>Forward Bid Invites</h1>
        <div className='mp-desc'>Track ITBs from SmartBid, iSqFt, BlueBook, and more - all in one place!</div>
        <button className='mp-button'>Request a Demo</button>
      </div>
    );
  }
}

