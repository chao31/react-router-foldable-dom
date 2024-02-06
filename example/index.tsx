// import React, { useEffect } from 'react';
import * as React from 'react';
// import * as ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
// import './index.scss';
import { BrowserRouter, NavLink, useRoutes } from 'react-router-dom';

import { Home, BookList, BookDetail } from './pages';
import Fold from '../.';

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
      <Fold routes={routes} />
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






