import { ActionTypes, ActionCreatorTypes } from '../actions/types';
import { IInitialState } from './types';

const initialState: IInitialState = {
  constructionUnit: '',
};

export const rootReducer = (
  state: IInitialState = initialState,
  action: ActionCreatorTypes
) => {
  switch (action.type) {
    case ActionTypes.setConstructionUnit:
      return {
        ...state,
        constructionUnit: action.payload,
      };
    default:
      return state;
  }
};
