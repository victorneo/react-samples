import React from 'react';
import ReactDOM from 'react-dom/client';
import Sample1 from './sample1';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const root = ReactDOM.createRoot(div);
  root.render(<Sample1 />);
});
