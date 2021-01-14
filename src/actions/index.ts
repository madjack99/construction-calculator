import { ActionTypes, setConstructionUnitActionType } from './types';

export const setConstructionUnit = (
  constructionUnit: string
): setConstructionUnitActionType => ({
  type: ActionTypes.setConstructionType,
  payload: constructionUnit,
});
