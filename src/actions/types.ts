export enum ActionTypes {
  setConstructionUnit = 'SET_CONSTRUCTION_UNIT',
}

export interface setConstructionUnitActionType {
  type: ActionTypes.setConstructionUnit;
  payload: string;
}

export type ActionCreatorTypes = setConstructionUnitActionType;
