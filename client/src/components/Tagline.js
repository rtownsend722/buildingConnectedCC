import React, {Component} from 'react';
import style from '../styles/tagline.css';

export default class Tagline extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.props.handleClick.bind(this);
  }
  render() {
    return (
      <div className='tagline'>
        <div className='tagline-container'>
          <div className='tagline-text'>See for yourself why we're the #1 choice for GC's, subs and owners!</div>
          <div className='tag-button-wrapper'>
            <button className='tagline-button' onClick={this.handleClick} >Request a demo</button>
          </div>
        </div>
      </div>
    );
  }
}