import React, { useEffect } from 'react';
import './index.css';
import { NavLink, BrowserRouter, useRoutes as useRoutesOld } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { createVariantsWithPath, getConfigScreenNum } from './format';

let defaultOptions = {
  singleScreenMaxWidth: 639,
  doubleScreenMinWidth: 640,
  doubleScreenMaxWidth: 959,
  troubleScreenMinWidth: 960,
};

function useSetBreakpoint(options) {
  defaultOptions = {
    ...defaultOptions,
    ...options
  }
}

const SingleScreen = ({routes, rest}) => {
  const isDesktop = useMediaQuery({ maxWidth: 639 });
  return isDesktop ? routes.map((currentRoutes, index) => {
    return <Page key={index} currentRoutes={currentRoutes} rest={rest} />;
  }) : null
}

const DoubleScreen = ({routes, rest}) => {
  const isDesktop = useMediaQuery({ minWidth: 640, maxWidth: 959 })
  return isDesktop ? routes.map((currentRoutes, index) => {
    return <Page key={index} currentRoutes={currentRoutes} rest={rest} />;
  }) : null
}

const TroubleScreen = ({routes, rest}) => {
  const isDesktop = useMediaQuery({ minWidth: 960 })
  return isDesktop ? routes.map((currentRoutes, index) => {
    return <Page key={index} currentRoutes={currentRoutes} rest={rest} />;
  }) : null
}



function Page({ currentRoutes, rest }) {
  const routes = useRoutesOld(currentRoutes, ...rest);
  return <div className="fold-block">{routes}</div>;
}

function useRoutes(routes, ...rest) {
  const isTwoFold = useMediaQuery({ query: '(min-width: 700px)' });
  console.log('isDesktop: ', isTwoFold);
  const maxScreenNum = getConfigScreenNum(routes);
  const routesMultiArr = createVariantsWithPath(routes);
  console.log('-----routesMultiArr: ', routesMultiArr);
  let yyy;

  const [ 
    singleScreenRoutes = [],
    doubleScreenRoutes =[],
    troubleScreenRoutes=[]
  ] = routesMultiArr;

  return (
    <div className="fold">
      <SingleScreen routes={singleScreenRoutes} rest={rest} />
      <DoubleScreen routes={doubleScreenRoutes} rest={rest} />
      <TroubleScreen routes={troubleScreenRoutes} rest={rest} />
    </div>
  );

  // if (isTwoFold) {
  //   yyy = routesMultiArr[1];
  // } else {
  //   yyy = routesMultiArr[0];
  // }

  // return (
  //   <div className="fold">
  //     {yyy.map((currentRoutes, index) => {
  //       return <Page key={index} currentRoutes={currentRoutes} rest={rest} />;
  //     })}
  //   </div>
  // );
}

export { useRoutes, useSetBreakpoint };
