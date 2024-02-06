import React, { useEffect } from 'react';
import './index.scss';
import { NavLink, useParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

function BookList() {
  const isTwoFold = useMediaQuery({ query: '(min-width: 700px)' });

  return (
    <div className="book-list">
      <NavLink to="/bookDetail/sports" className="book-list-item" replace={isTwoFold}>
        体育书本
      </NavLink>
      <NavLink to="/bookDetail/computer" className="book-list-item" replace={isTwoFold}>
        计算机书本
      </NavLink>
      <NavLink to="/bookDetail/psychology" className="book-list-item" replace={isTwoFold}>
        心理学书本
      </NavLink>
    </div>
  );
}

export default BookList;
