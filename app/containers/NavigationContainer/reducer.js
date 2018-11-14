/*
 *
 * NavigationContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
} from './constants';

const initialState = fromJS({
  topics: [
    {
      name: 'libraries',
      descripcion: 'links to useful open source libraries'
    },
    {
      name: 'apps',
      descripcion: 'links to new and exciting apps'
    },
    {
      name: 'news',
      descripcion: 'links to programming related news articles'
    }
  ]
});

function navigationContainerReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default navigationContainerReducer;
