import React, {Component} from 'react';
import style from '../styles/mainProduct.css';

export default class MainProduct extends Component {
  render() {
    return (
      <div className='main-product'>
        <div className='mp-container'>
          <div className='mp-name'><h1>Forward Bid Invites</h1></div>
          <div className='mp-desc'>Track ITBs from SmartBid, iSqFt, BlueBook, and more - all in one place!</div>
          <button className='mp-button'>Request a demo</button>
        </div>
      </div>
    );
  }
}

