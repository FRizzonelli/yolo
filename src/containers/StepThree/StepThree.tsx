import React, { FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';
import { useYoloContext } from '../../hooks/useYoloContext';

interface IStepThreeProps {}

const StepThree: FunctionComponent<IStepThreeProps> = () => {
  const history = useHistory();

  const yoloCtx = useYoloContext();

  const handleOnWeekendsClicked = () => {
    yoloCtx.setBookYolo({
      ...yoloCtx.bookYolo,
      leaveOn: 'weekends',
    });

    history.replace(`step-four`);
  };

  const handleOnAnytimeClicked = () => {
    yoloCtx.setBookYolo({
      ...yoloCtx.bookYolo,
      leaveOn: 'anytime',
    });

    history.replace(`step-four`);
  };

  const handleOnPrevClicked = () => {
    history.push('/');
  };

  return (
    <div className='space-y-6'>
      <div className='bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6 h-96 flex flex-col justify-evenly'>
        <div className='md:col-span-1 mb-4 text-center'>
          <h2 className='text-3xl tracking-tight font-extrabold text-gray-900'>Which days could you change location at any time?</h2>
          <p className='text-lg mt-1 text-gray-500'>Don’t worry, 5 days per place minimum!</p>
        </div>
        <div className='mt-5 md:mt-0 md:col-span-2 flex flex-wrap justify-evenly'>
          <button
            onClick={handleOnWeekendsClicked}
            className='mb-4 md:mb-0 md:mr-3 w-60 inline-flex justify-center py-2 px-4 border border-solid border-indigo-600 bg-white hover:bg-gray-50 shadow-sm text-sm font-medium rounded-md text-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            Weekends
          </button>
          <div className='relative'>
            <button
              type='submit'
              onClick={handleOnAnytimeClicked}
              className='md:ml-3 w-60 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              Anytime
            </button>
            <img src='/cheaper.png' className='absolute -mt-8 -right-20 w-36' />
          </div>
        </div>
      </div>

      <div className='flex justify-start pb-4 px-4 md:px-0'>
        <button
          onClick={handleOnPrevClicked}
          className='mr-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-36'
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default StepThree;
