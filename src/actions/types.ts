export enum ActionTypes {
  setConstructionUnit = 'SET_CONSTRUCTION_UNIT',
  changeStep = 'CHANGE_STEP',
  resetState = 'RESET_STATE',
  setStoreys = 'SET_STOREYS',
  setMaterial = 'SET_MATERIAL',
}

export type stepType =
  | 'step-one'
  | 'step-two'
  | 'step-three'
  | 'step-four'
  | 'step-result';

export interface setConstructionUnitActionType {
  type: ActionTypes.setConstructionUnit;
  payload: string;
}

export interface setStoreysActionType {
  type: ActionTypes.setStoreys;
  payload: number;
}

export interface setMaterialActionType {
  type: ActionTypes.setMaterial;
  payload: string;
}

export interface changeStepActionType {
  type: ActionTypes.changeStep;
  payload: stepType;
}

export interface resetStateActionType {
  type: ActionTypes.resetState;
}

export type ActionCreatorTypes =
  | setConstructionUnitActionType
  | changeStepActionType
  | resetStateActionType
  | setStoreysActionType
  | setMaterialActionType;
