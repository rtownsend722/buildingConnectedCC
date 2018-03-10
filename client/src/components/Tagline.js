import React, {Component} from 'react';
import style from '../styles/tagline.css';

export default class Tagline extends Component {
  render() {
    return (
      <div className='tagline'>
        <div className='tagline-container'>
          <div className='tagline-text'>See for yourself why we're the #1 choice for GC's, subs and owners!</div>
          <div className='tag-button-wrapper'>
            <button className='tagline-button'>Request a demo</button>
          </div>
        </div>
      </div>
    );
  }
}