import React, { Component } from 'react';
import { render } from 'react-dom';

import App from './App';
import Router from './Router';

render(<Router />, document.querySelector('#app'));