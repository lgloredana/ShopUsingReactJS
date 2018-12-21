import React from 'react';
import ReactDOM from 'react-dom';
import ProductView from '../ProductIView';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProductView key productName productPrice onRemove onEdit onCompare showCompareBtn />, div);
  ReactDOM.unmountComponentAtNode(div);
});
