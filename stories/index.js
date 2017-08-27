import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Basic from './examples/Basic';
import Inception from '../src';

storiesOf('Inception', module).add('Basic', () => <Basic />);
