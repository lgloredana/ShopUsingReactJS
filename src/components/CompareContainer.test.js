import React from 'react';
import ReactDOM from 'react-dom';
import CompareContainer from './CompareContainer';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CompareContainer compareList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
