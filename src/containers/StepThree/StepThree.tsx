import React, { FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';

interface IStepThreeProps {}

const StepThree: FunctionComponent<IStepThreeProps> = () => {
  const history = useHistory();

  const handleOnWeekendsClicked = () => {
    history.replace(`step-four`);
  };

  const handleOnAnytimeClicked = () => {
    history.replace(`step-four`);
  };

  return (
    <div className='space-y-6'>
      <div className='bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6'>
        <div className='md:grid md:grid-cols-3 md:gap-6'>
          <div className='md:col-span-1'>
            <h3 className='text-lg font-medium leading-6 text-gray-900'>Which days could you change location at any time?</h3>
            <p className='mt-1 text-sm text-gray-500'>Come on brah</p>
          </div>
          <div className='mt-5 md:mt-0 md:col-span-2'>
            <button
              onClick={handleOnWeekendsClicked}
              className='ml-3 inline-flex justify-center py-2 px-4 border border-solid border-indigo-600 bg-white hover:bg-gray-50 shadow-sm text-sm font-medium rounded-md text-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              Weekends
            </button>
            <button
              type='submit'
              onClick={handleOnAnytimeClicked}
              className='ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              Anytime
            </button>{' '}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
