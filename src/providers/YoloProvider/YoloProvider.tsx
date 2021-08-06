import { createContext, FunctionComponent, useCallback, useState } from 'react';
import { TBookYolo } from '../../models/bookyolo';

interface IYoloProviderProps {}

export interface IYoloContext {
  bookYolo?: TBookYolo;
  setBookYolo: (bookYolo?: TBookYolo) => void;
}

// Context
export const YoloContext = createContext<IYoloContext>({} as IYoloContext);

const YoloProvider: FunctionComponent<IYoloProviderProps> = ({ children }) => {
  const [bookYolo, setBookYolo] = useState<TBookYolo>();

  const updateBookYolo = (bYolo?: TBookYolo) => {
    setBookYolo(bYolo);
  };

  const contextValue: IYoloContext = {
    bookYolo,
    setBookYolo: useCallback(updateBookYolo, []),
  };

  return <YoloContext.Provider value={contextValue}>{children}</YoloContext.Provider>;
};

export default YoloProvider;
