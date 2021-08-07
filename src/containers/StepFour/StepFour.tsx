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
      <div className='bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6 h-96 flex flex-col justify-evenly'>
        <div className='md:col-span-1 mb-4 text-center'>
          <h3 className='text-3xl tracking-tight font-extrabold text-gray-900'>How would you move?</h3>
          <p className='mt-1 text-lg text-gray-500'>We plan it for you 🌲</p>
        </div>
        <div className='mt-5 md:mt-0 md:col-span-2 flex flex-wrap justify-evenly'>
          <button
            onClick={handleOnCarClicked}
            className='mb-4 md:mb-0 md:mr-3 w-60 inline-flex justify-center py-2 px-4 border border-solid border-indigo-600 bg-white hover:bg-gray-50 shadow-sm text-sm font-medium rounded-md text-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            Car
          </button>
          <div className='relative'>
            <button
              type='submit'
              onClick={handleOnPublicTransportClicked}
              className='md:ml-3 w-60 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              Public Transport
            </button>
            <img src='/greener.png' className='absolute -mt-8 -right-20 w-36' />
          </div>
        </div>
      </div>

      <div className='flex justify-start pb-4 px-4 md:px-0'>
        <button
          onClick={handleOnPrevClicked}
          className='mr-3 w-36 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default StepFour;
