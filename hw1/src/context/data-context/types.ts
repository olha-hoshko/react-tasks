import { RequestTypes } from "../../enums";

export type ContextData<T> = {
  recordId: string
} & T;

export type DataContextProps<T> = {
  requestType: RequestTypes,
  setRequestType: (type: RequestTypes) => void,
  data: ContextData<T>[],
  filterData: (key: string) => void
};