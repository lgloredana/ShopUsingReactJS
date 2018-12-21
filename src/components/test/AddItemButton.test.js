import React from 'react';
import ReactDOM from 'react-dom';
import AddItemButton from '../AddItemButton';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddItemButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});
