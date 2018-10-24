import React from 'react';
import ReactDOM from 'react-dom';
import ItemDetailsEdit from './ItemDetailsEdit';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ItemDetailsEdit itemName itemPrice onChange={function(){}} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
