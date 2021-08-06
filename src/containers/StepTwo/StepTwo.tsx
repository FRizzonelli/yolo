import React, { FunctionComponent } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

interface IStepTwoProps {}

const StepTwo: FunctionComponent<IStepTwoProps> = () => {
  const match = useRouteMatch();
  const history = useHistory();

  const handleOnSubmit = () => {
    history.push(`${match.path}/step-three`);
  };

  return (
    <div className='space-y-6'>
      <div className='bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6'>
        <div className='md:grid md:grid-cols-3 md:gap-6'>
          <div className='md:col-span-1'>
            <h3 className='text-lg font-medium leading-6 text-gray-900'>How long?</h3>
            <p className='mt-1 text-sm text-gray-500'>Yo dud 3 weeks or go home</p>
          </div>
          <div className='mt-5 md:mt-0 md:col-span-2'>
            <form className='space-y-6' action='#' method='POST'>
              <div className=''>
                <label htmlFor='weeks' className='block text-sm font-medium text-gray-700'>
                  Weeks
                </label>
                <div className='mt-1 flex rounded-md shadow-sm'>
                  <input
                    type='number'
                    name='weeks'
                    id='weeks'
                    className='focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300'
                    placeholder='1'
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className='flex justify-end'>
        <button
          type='submit'
          onClick={handleOnSubmit}
          className='ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StepTwo;
