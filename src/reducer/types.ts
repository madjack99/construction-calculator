export interface IInitialState {
  stepNo: string;
  constructionUnit: string;
  storeys: number;
  material: string;
  sizeX: number;
  sizeY: number;
  apiCallResult: {
    apiResultStatus: string;
    apiResultMessage: string;
  };
}
