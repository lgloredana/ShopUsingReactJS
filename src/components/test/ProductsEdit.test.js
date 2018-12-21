import React from 'react';
import ReactDOM from 'react-dom';
import ProductEdit from '../ProductEdit';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProductEdit itemName itemPrice onChange={function(){}} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
