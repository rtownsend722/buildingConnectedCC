import React, {Component} from 'react';
import style from '../styles/product.css';
import icon from '../assets/prod-icon.png';

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };

    this.handleClick = this.props.handleClick.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
  };

  handleEnter() {
    this.setState({
      hover: true
    });
  };

  handleLeave() {
    this.setState({
      hover: false
    });
  };

  render() {
    const {sub, lead, interactive} = this.props;
    let hover = this.state.hover ? 'hover' : '';

    return interactive ? (
      <div 
        className='product' 
        onMouseEnter={this.handleEnter}
        onMouseLeave={this.handleLeave}>
        <div className={`bar bar-${hover}`}></div>
        <div className='product-icon'>
          <img src={icon} alt='star' />
        </div>
        <div className='lead'>{lead}</div>
        <div className='sub'>{sub}</div>
        <a className='see-how' onClick={this.handleClick} >See how >></a>
      </div>
    ) :
    (
      <div 
        className='product'
        onMouseEnter={this.handleEnter}
        onMouseLeave={this.handleLeave}>
        <div className={`bar bar-${hover}`}></div>
        <div className='icon-space'></div>
        <div className='lead'>{lead}</div>
        <div className='sub'>{sub}</div>
        <div className='see-how-space'></div>
      </div>
    )
  }
}