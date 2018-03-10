import React, {Component} from 'react';
import style from '../styles/tagline.css';

export default class Tagline extends Component {
  render() {
    return (
      <div className='tagline-container'>
        <div className='tagline'>See for yourself why we're the #1 choice for GC's, subs and owners!</div>
        <button className='tagline-button'>Request a demo</button>
      </div>
    );
  }
}