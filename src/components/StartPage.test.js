import React from 'react';
import ReactDOM from 'react-dom';
import StartPage from './StartPage';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StartPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
