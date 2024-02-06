function getConfigScreenNum(routes) {
  let maxScreenNum = 0;
  function flattenElements(routeArr) {
    routeArr = Array.isArray(routeArr) ? routeArr : [routeArr];

    routeArr.forEach((route) => {
      const { children, element } = route || {};

      // 折叠屏有2折、3折...计算用户配置的是几折屏幕
      maxScreenNum = Math.max(maxScreenNum, Array.isArray(element) ? element.length : 1);
      // 仅对一维数组扁平化处理
      // route.element = Array.isArray(element) ? element.flat() : element;

      children && flattenElements(children);
    });
  }

  flattenElements(routes);
  return maxScreenNum;
}

function cloneObjectWithNewElement(routeArr, x, y) {
  // routeArr = Array.isArray(routeArr) ? routeArr : [routeArr];

  return Array.isArray(routeArr)
    ? routeArr.map((route) => {
        const { children, element } = route || {};

        const newRoute = {
          ...route,
        };
        // eslint-disable-next-line prettier/prettier
        if(Array.isArray(element)) {
          const currentScreenElementArr = element[y];
          newRoute.element =
            (Array.isArray(currentScreenElementArr) ? currentScreenElementArr[x] : currentScreenElementArr) ||
            '组件待配置';
        }

        children && (newRoute.children = cloneObjectWithNewElement(children, x, y));
        // console.log(5555, newRoute);
        return newRoute;
      })
    : routeArr;
}

const createVariantsWithPath = (routes) => {
  const maxScreenNum = getConfigScreenNum(routes);
  console.log('////-------', maxScreenNum, routes);
  // const result = Array.from({ length: maxScreenNum }, () => []);
  const result = new Array(maxScreenNum).fill(0).map(() => []);
  // 遍历多维数组
  for (let y = 0; y < maxScreenNum; y++) {
    for (let x = 0; x <= y; x++) {
      const dd = cloneObjectWithNewElement(routes, x, y);
      console.log(444, dd);
      result[y].push(dd);
    }
  }
  console.log(3333, result);
  return result;
};

// const routes = [
//   { path: '/', element: '<Home />' },
//   {
//     path: '/invoices',
//     element: [
//       '<SingleNode />',
//       [['<Left2 />', '<h1 />'], '<Right2 />'],
//       [['<Left3 />', '<h1 />', '<h1 />'], '<Center3 />', '<Right3 />'],
//     ],
//     children: [
//       { path: ':id', element: '<Invoice />' },
//       { path: '/pending', element: '<Pending />' },
//       { path: '/complete', element: '<Complete />' },
//     ],
//   },
// ];

// createVariantsWithPath(routes);

export { createVariantsWithPath, getConfigScreenNum };
