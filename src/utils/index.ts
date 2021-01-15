import { IInitialState } from '../reducer/types';
import { endpoint } from '../api/endpoint';
import {
  constructionUnitsOptions,
  houseMaterials,
  garageMaterials,
} from '../constructionInfo';

export const formUrlString = (stateObj: IInitialState) => {
  const { constructionUnit, storeys, material, sizeX, sizeY } = stateObj;

  const constructionUnitIndex =
    constructionUnitsOptions.indexOf(constructionUnit) + 1;

  let materialIndex: number;

  if (constructionUnit === 'Жилой дом') {
    materialIndex = houseMaterials.indexOf(material) + 1;
  } else {
    materialIndex = garageMaterials.indexOf(material) + 1;
  }

  const urlParamsString = `?building=${constructionUnitIndex}
    &height=${storeys}&material=${materialIndex}
    &sizex=${sizeX}&sizey=${sizeY}`;

  return endpoint + urlParamsString;
};
