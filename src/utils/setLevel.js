import React from 'react';
import uuid from 'uuid/v4';

const setupChildren = (children, level, parentId) => {
  return React.Children.map(children, (c, ix) => {
    // if (c.props && c.props.children)
    //   setupChildren(c.props.children, level, diveInFn);

    // console.log('diveInFn', diveInFn);
    if (c.type && c.type.name === 'Dream') {
      // console.log(c.props.id);
      // console.log('LOS FUCKINGS IDS', c.props.id);
      // const id = c.props.id || uuid();
      return React.cloneElement(
        c,
        {
          ...c.props,
          // level,
          // id,
          // key: id,
          parentId
          // diveIn: () => diveInFn(id),
          // diveInFn
        },
        ...c.props.children
      );
    } else if (level[level.length - 1] === parentId) {
      return c;
    } else return null;
  });
};

// export const setupDreams = (children, parentId) => {
//   console.log('----------SETTING UP DREAMS----------');
//   return React.Children.map(children, (c, ix) => {
//     if (c.type && c.type.name === 'Dream') {
//       console.log('c.props', c.props);

//       return React.createElement(
//         c.type,
//         Object.assign({}, { ...c.props, parentId })
//       );
//     } else return c;
//   });
//   console.log('---------- ----- --- -  - ----------');
// };
export default setupChildren;
