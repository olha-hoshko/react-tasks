import { FC } from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { RequestTypes } from "../enums";
import { ParentContainerProps } from "../global-types";
import { DataContextProps } from "./types";

const defaultDataContext = {
  requestType: RequestTypes.posts,
  setRequestType: () => { },
  data: [],
  setData: () => { }
};

export const DataContext = createContext<DataContextProps>(defaultDataContext);

export const useDataContext = () => useContext(DataContext);

export const DataContextProvider: FC<ParentContainerProps> = ({ children }) => {
  const [data, setData] = useState<any[]>([]);
  const [requestType, setRequestType] = useState<RequestTypes>(RequestTypes.posts);

  useEffect(() => {
    if (!requestType) return;
    fetch(`https://jsonplaceholder.typicode.com/${requestType}`)
      .then((response) => response.json())
      .then(setData);
  }, [requestType]);

  return (
    <DataContext.Provider value={{ requestType, setRequestType, data, setData }}>
      {children}
    </DataContext.Provider>
  );
};