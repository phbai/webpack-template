import React, { useContext } from "react";
import { RootStoreType, rootStore } from "../store/rootStore";

const MSTContext = React.createContext<RootStoreType>(rootStore);
export const Provider = MSTContext.Provider;

export const useStore = <T, K extends keyof T>(store: T): Pick<T, K> => store;
export const rootStoreValue = useStore(rootStore);
