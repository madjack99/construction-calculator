import {
  ActionTypes,
  setConstructionUnitActionType,
  changeStepActionType,
  setStoreysActionType,
  resetStateActionType,
  stepType,
} from './types';

export const changeStep = (stepName: stepType): changeStepActionType => ({
  type: ActionTypes.changeStep,
  payload: stepName,
});

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

export const resetState = (): resetStateActionType => ({
  type: ActionTypes.resetState,
});
