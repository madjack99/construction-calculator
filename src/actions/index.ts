import {
  ActionTypes,
  setConstructionUnitActionType,
  changeStepActionType,
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

export const resetState = () => ({
  type: ActionTypes.resetState,
});
