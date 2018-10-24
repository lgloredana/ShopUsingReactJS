import React from 'react';
import ReactDOM from 'react-dom';
import ProductItem from './ProductItem';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProductItem key productName productPrice onRemove onEdit onCompare showCompareBtn />, div);
  ReactDOM.unmountComponentAtNode(div);
});
