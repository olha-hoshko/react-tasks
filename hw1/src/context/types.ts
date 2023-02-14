import { RequestTypes } from "../enums";

export type DataContextProps = {
  requestType: RequestTypes,
  setRequestType: (type: RequestTypes) => void,
  data: any[],
  setData: (data: any[]) => void,
};