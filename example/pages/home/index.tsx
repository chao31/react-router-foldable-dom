import React, { useEffect } from 'react';
import './index.scss';
import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <nav className="home-list">
      <NavLink to="bookList" className="home-list-item">
        书本列表
      </NavLink>
      {/* <NavLink to="bookDetail" className="home-list-item">
          书本详情页
        </NavLink> */}
    </nav>
  );
}

export default Home;
