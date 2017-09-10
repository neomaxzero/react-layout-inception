import React from 'react';
import uuid from 'uuid/v4';

const setupChildren = (children, level, diveInFn, parentId) => {
  return React.Children.map(children, (c, ix) => {
    // if (c.props && c.props.children)
    //   setupChildren(c.props.children, level, diveInFn);

    // console.log('diveInFn', diveInFn);
    if (c.type && c.type.name === 'Dream') {
      // console.log(c.props.id);
      console.log('LOS FUCKINGS IDS', c.props.id);
      const id = c.props.id || uuid();
      return React.createElement(
        c.type,
        Object.assign(
          {},
          {
            ...c.props,
            level,
            id,
            key: id,
            parentId,
            diveIn: () => diveInFn(id),
            diveInFn
          }
        )
      );
    } else return c;
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
