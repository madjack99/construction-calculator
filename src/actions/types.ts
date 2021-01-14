export enum ActionTypes {
  setConstructionType = 'SET_CONSTRUCTION_TYPE',
}

export interface setConstructionUnitActionType {
  type: ActionTypes.setConstructionType;
  payload: string;
}
