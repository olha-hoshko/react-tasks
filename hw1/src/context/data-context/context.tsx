import { FC } from "react";
import { v4 as uuidv4 } from "uuid";
import { createContext, useContext, useEffect, useState } from "react";
import { Post } from "../../components/posts-container";
import { RequestTypes } from "../../enums";
import { ParentContainerProps } from "../../global-types";
import { ContextData, DataContextProps } from "./types";

const defaultDataContext: DataContextProps<Post> = {
  requestType: RequestTypes.posts,
  setRequestType: () => { },
  data: [],
  filterData: () => { },
};

const DataContext = createContext(defaultDataContext);

export const useDataContext = <T,>() => useContext(DataContext) as DataContextProps<T>;

export const DataContextProvider: FC<ParentContainerProps> = ({ children }) => {
  const [data, setData] = useState<ContextData<any>[]>([]);
  const [requestType, setRequestType] = useState<RequestTypes>(RequestTypes.posts);

  const filterData = (key: string) => {
    setData(state => state.filter(({ recordId }) => recordId !== key));
  };

  useEffect(() => {
    if (!requestType) return;

    const requestData = localStorage.getItem(requestType);
    if (requestData) {
      const requestDataArray: any[] = JSON.parse(requestData);
      if (requestDataArray.length > 0) {
        setData(requestDataArray);
        return;
      }
    }

    fetch(`https://jsonplaceholder.typicode.com/${requestType}`)
      .then(response => response.json())
      .then(setData)
      .finally(() => setData(state => state.map((item: any) => { return { ...item, recordId: uuidv4() }; })));
  }, [requestType]);

  useEffect(() => {
    localStorage.setItem(`${requestType}`, JSON.stringify(data));
  }, [data, requestType]);

  return (
    <DataContext.Provider value={{ requestType, setRequestType, data, filterData }}>
      {children}
    </DataContext.Provider>
  );
};