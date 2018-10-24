import React from 'react';
import ReactDOM from 'react-dom';
import ProductsContainer from './ProductsContainer';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProductsContainer products compareList/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
