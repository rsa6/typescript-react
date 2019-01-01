import * as React from 'react';

export interface AppContextInterface {
  adress: string,
  url: string,
  change: any
}

const ctxt: any = React.createContext<AppContextInterface | null>(null);

export const AppContextProvider = ctxt.Provider;
export const AppContextConsumer = ctxt.Consumer;
