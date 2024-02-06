// import React, { useEffect } from 'react';
import * as React from 'react';
// import * as ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
// import './index.scss';
import { BrowserRouter, NavLink } from 'react-router-dom';

import { Home, BookList, BookDetail } from './pages';
import {useRoutes} from '../.';

const App = () => {
  const routes = [
    { path: '/', element: [<Home />, [<Home />, <></>]] },
    {
      path: '/bookList',
      element: [<BookList />, [<BookList />, <BookDetail />]],
    },
    {
      path: '/bookDetail/:id',
      element: [<BookDetail />, [<BookList />, <BookDetail />]],
    },
  ];

  return (
    <div id="app">
      <header>
        <h1>Hello World</h1>
      </header>
      {useRoutes(routes)}
    </div>
  );
};

// ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
createRoot(document.getElementById('root')).render( 
<>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </>
);






