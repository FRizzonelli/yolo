import { useContext } from 'react';
import { YoloContext } from '../providers/YoloProvider';
import { IYoloContext } from '../providers/YoloProvider/YoloProvider';

export const useYoloContext = (): IYoloContext => useContext(YoloContext);
