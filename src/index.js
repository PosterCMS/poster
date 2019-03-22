import React from 'react';
import { render } from 'react-dom';
import './styles.css';

const App = () => {
  return (
    <div className="flex flex-wrap">
      <div className="w-full ml-auto bg-grey h-12" />
    </div>
  );
};

render(<App />, document.getElementById('app'));
