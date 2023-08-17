/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, ReactNode, useReducer, useMemo } from 'react';
import { initialState as appInitialState, reducer as appReducer } from '../services/app/AppReducer';

type ContextProviderProps<ContextObjType, StateType, ChildCompsType> = {
  context: React.Context<ContextObjType>;
  reducer: (state: StateType, action: any) => StateType;
  initialState: StateType;
  children: ChildCompsType;
};

export default function ContextProvider<
  ContextObjType extends Record<string, any>,
  StateType extends Record<string, any>,
  ChildCompsType extends ReactNode
>(
  props: ContextProviderProps<ContextObjType, StateType, ChildCompsType>
) {
  const { context, reducer, initialState, children } = props;

  const [state, dispatch] = useReducer(reducer, initialState);

  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <context.Provider value={contextValue as unknown as ContextObjType}>
      {children}
    </context.Provider>
  );
}

export const AppContext = createContext(appInitialState);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ContextProvider
      context={AppContext}
      initialState={appInitialState}
      reducer={appReducer}
    >
      {children}
    </ContextProvider>
  );
};
