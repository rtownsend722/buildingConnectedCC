import React, {Component} from 'react';
import style from '../styles/legal.css';

export default class Legal extends Component {
  render() {
    return (
      <div className='legal'>
        <div className='legal-container'>
          <div className='copyright'>©BuildingConnected 2017</div>
          <div className='legal-menu'>
            <div className='legal-item'>Terms of Service</div>
            <div className='legal-item'>Privacy Policy</div>
            <div className='legal-item'>support@buildingconnected.com</div>
          </div>
        </div>
      </div>
    );
  }
}

