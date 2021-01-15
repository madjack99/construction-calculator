import { ActionTypes, ActionCreatorTypes } from '../actions/types';
import { IInitialState } from './types';

const initialState: IInitialState = {
  stepNo: 'step-one',
  constructionUnit: '',
  storeys: 1,
  material: '',
  sizeX: 1,
  sizeY: 1,
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
    case ActionTypes.setStoreys: {
      return {
        ...state,
        storeys: action.payload,
      };
    }
    case ActionTypes.setMaterial:
      return {
        ...state,
        material: action.payload,
      };
    case ActionTypes.setWallsX:
      return {
        ...state,
        sizeX: action.payload,
      };
    case ActionTypes.setWallsY:
      return {
        ...state,
        sizeY: action.payload,
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
