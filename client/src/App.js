import React, {Component} from 'react';

import Menu from './components/Menu';
import MainProduct from './components/MainProduct';
import SubProducts from './components/SubProducts';
import Product from './components/Product';
import Tagline from './components/Tagline';
import Footer from './components/Footer';
import Legal from './components/Legal';

import style from './styles/app.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  handleClick() {
    this.props.history.push('/temp');
  };

  componentDidMount() {
    this.setState({
      products: window.productData
    });
  }

  render() {
    return (
      <div className='container'>
        <Menu history={this.props.history} handleClick={this.handleClick}/>
        <MainProduct history={this.props.history} handleClick={this.handleClick}/>
        <SubProducts products={this.state.products} history={this.props.history} handleClick={this.handleClick}/>
        <Tagline history={this.props.history} handleClick={this.handleClick}/>
        <Footer history={this.props.history} handleClick={this.handleClick}/>
        <Legal history={this.props.history} handleClick={this.handleClick}/>
      </div>
    );
  }
}
