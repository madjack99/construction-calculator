import { ActionTypes, ActionCreatorTypes } from '../actions/types';
import { IInitialState } from './types';

const initialState: IInitialState = {
  stepNo: 'step-one',
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
    case ActionTypes.changeStep:
      return {
        ...state,
        stepNo: action.payload,
      };
    case ActionTypes.resetState:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
