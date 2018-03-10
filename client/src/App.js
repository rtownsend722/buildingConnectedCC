import React, {Component} from 'react';
import reactDOM from 'react-dom';

import Menu from './components/Menu';
import MainProduct from './components/MainProduct';
import SubProducts from './components/SubProducts';
import Product from './components/Product';
import Tagline from './components/Tagline';
import Footer from './components/Footer';
import Legal from './components/Legal';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    this.setState({
      products: window.productData
    });
  }

  render() {
    return (
      <div className='container'>
        <Menu />
        <MainProduct />
        <SubProducts products={this.state.products}/>
        <Tagline />
        <Footer />
        <Legal />
      </div>
    );
  }
}

reactDOM.render(<App />, document.querySelector('#app'));