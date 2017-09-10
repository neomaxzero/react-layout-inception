import React from 'react';
import Inception, { Dream } from '../../../src';

const Basic = () => (
  <Inception>
    <Dream>
      <p>0000000</p>
      <Dream>
        <p>1111111</p>
      </Dream>
      {/* <Dream>
        <p>222222</p>
      </Dream> */}
    </Dream>
    {/* <Dream>
      <p>33333</p>
    </Dream> */}
  </Inception>
);

export default Basic;
