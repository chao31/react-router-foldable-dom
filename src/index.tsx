import React, { useEffect } from 'react';
import './index.css';
import { NavLink, BrowserRouter, useRoutes } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { createVariantsWithPath, getConfigScreenNum } from './format';

function Page({ currentRoutes }) {
  const routes = useRoutes(currentRoutes);
  return <div className="fold-block">{routes}</div>;
}

function Fold(props) {
  const isTwoFold = useMediaQuery({ query: '(min-width: 700px)' });
  console.log('isDesktop: ', isTwoFold);
  const { routes } = props;
  const maxScreenNum = getConfigScreenNum(routes);
  const routesMultiArr = createVariantsWithPath(routes);
  console.log('-----routesMultiArr: ', routesMultiArr);
  let yyy;

  if (isTwoFold) {
    yyy = routesMultiArr[1];
  } else {
    yyy = routesMultiArr[0];
  }

  return (
    <div className="fold">
      {yyy.map((currentRoutes, index) => {
        return <Page key={index} currentRoutes={currentRoutes} />;
      })}
    </div>
  );
}

export default Fold;
