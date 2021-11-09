@ts-check
import React from 'react';

import { createStore, compose  } from 'redux';
import reducer from './reducer';

// export const store =
//     (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose ;

// export type RootState = ReturnType<typeof store.getState>

export default store;
