import React, { FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';
import { useYoloContext } from '../../hooks/useYoloContext';

interface IStepFourProps {}

const StepFour: FunctionComponent<IStepFourProps> = () => {
  const history = useHistory();

  const yoloCtx = useYoloContext();

  const handleOnCarClicked = () => {
    yoloCtx.setBookYolo({
      ...yoloCtx.bookYolo,
      transport: 'car',
    });

    history.replace('confirm');
  };

  const handleOnPublicTransportClicked = () => {
    yoloCtx.setBookYolo({
      ...yoloCtx.bookYolo,
      transport: 'public',
    });

    history.replace('confirm');
  };

  const handleOnPrevClicked = () => {
    history.push('/');
  };

  return (
    <div className='space-y-6'>
      <div className='bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6'>
        <div className='md:grid md:grid-cols-3 md:gap-6'>
          <div className='md:col-span-1'>
            <h3 className='text-lg font-medium leading-6 text-gray-900'>How would you move?</h3>
            <p className='mt-1 text-sm text-gray-500'>Plz go green 🌲</p>
          </div>
          <div className='mt-5 md:mt-0 md:col-span-2'>
            <button
              onClick={handleOnCarClicked}
              className='ml-3 inline-flex justify-center py-2 px-4 border border-solid border-indigo-600 bg-white hover:bg-gray-50 shadow-sm text-sm font-medium rounded-md text-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              Car
            </button>
            <button
              type='submit'
              onClick={handleOnPublicTransportClicked}
              className='ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              Public Transport
            </button>
          </div>
        </div>
      </div>

      <div className='flex justify-start'>
        <button
          onClick={handleOnPrevClicked}
          className='ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default StepFour;
