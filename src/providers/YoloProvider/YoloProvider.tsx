import { createContext, FunctionComponent, useCallback, useState } from 'react';
import { TBookYolo, Yolo } from '../../models/bookyolo';

interface IYoloProviderProps {}

export interface IYoloContext {
  bookYolo?: TBookYolo;
  setBookYolo: (bookYolo?: TBookYolo) => void;
  confirmedYolo?: Yolo;
  setConfirmedYolo: (yolo?: Yolo) => void;
}

// Context
export const YoloContext = createContext<IYoloContext>({} as IYoloContext);

const YoloProvider: FunctionComponent<IYoloProviderProps> = ({ children }) => {
  const [bookYolo, setBookYolo] = useState<TBookYolo>();
  const [confirmedYolo, setConfirmedYolo] = useState<Yolo>();

  const updateBookYolo = (bYolo?: TBookYolo) => {
    setBookYolo(bYolo);
  };

  const updatedConfirmedYolo = (y?: Yolo) => {
    setConfirmedYolo(y);
  };

  const contextValue: IYoloContext = {
    bookYolo,
    setBookYolo: useCallback(updateBookYolo, []),
    confirmedYolo,
    setConfirmedYolo: useCallback(updatedConfirmedYolo, []),
  };

  return <YoloContext.Provider value={contextValue}>{children}</YoloContext.Provider>;
};

export default YoloProvider;
