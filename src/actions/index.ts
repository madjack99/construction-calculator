import {
  ActionTypes,
  setConstructionUnitActionType,
  changeStepActionType,
  setStoreysActionType,
  resetStateActionType,
  setMaterialActionType,
  stepType,
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

export const resetState = (): resetStateActionType => ({
  type: ActionTypes.resetState,
});

export const changeStep = (stepName: stepType): changeStepActionType => ({
  type: ActionTypes.changeStep,
  payload: stepName,
});
