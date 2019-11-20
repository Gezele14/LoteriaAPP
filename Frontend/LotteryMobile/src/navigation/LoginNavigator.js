import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import HomeNavigator from './HomeNavigator';

export default createAppContainer(
  createSwitchNavigator({
    Home: HomeNavigator,
  })
);
