import { ThunkDispatch } from 'redux-thunk';
import { IInitialState } from '../reducer/types';

import { formUrlString } from '../utils';
import { fetchData } from '../api';

import {
  ActionTypes,
  setConstructionUnitActionType,
  changeStepActionType,
  setStoreysActionType,
  resetStateActionType,
  setMaterialActionType,
  setWallsXActionType,
  setWallsYActionType,
  getApiResultActionType,
  stepType,
  TGetState,
} from './types';

export const setConstructionUnit = (
  constructionUnit: string
): setConstructionUnitActionType => ({
  type: ActionTypes.setConstructionUnit,
  payload: constructionUnit,
});

export const setStoreys = (storeys: number): setStoreysActionType => ({
  type: ActionTypes.setStoreys,
  payload: storeys,
});

export const setMaterial = (material: string): setMaterialActionType => ({
  type: ActionTypes.setMaterial,
  payload: material,
});

export const setWallsX = (sizeX: number): setWallsXActionType => ({
  type: ActionTypes.setWallsX,
  payload: sizeX,
});

export const setWallsY = (sizeY: number): setWallsYActionType => ({
  type: ActionTypes.setWallsY,
  payload: sizeY,
});

export const makeApiCall = () => (
  dispatch: ThunkDispatch<IInitialState, null, getApiResultActionType>,
  getState: TGetState
) => {
  const targetUrl = formUrlString(getState());
  fetchData(targetUrl).then(({ result, message }) => {
    dispatch({
      type: ActionTypes.getApiResult,
      payload: {
        apiResultStatus: result,
        apiResultMessage: message,
      },
    });
  });
};

export const resetState = (): resetStateActionType => ({
  type: ActionTypes.resetState,
});

export const changeStep = (stepName: stepType): changeStepActionType => ({
  type: ActionTypes.changeStep,
  payload: stepName,
});
