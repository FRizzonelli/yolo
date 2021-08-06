import React, { FunctionComponent } from 'react';

interface IStepOneProps {}

const StepOne: FunctionComponent<IStepOneProps> = () => {
  const handleOnSubmit = () => {};
  return (
    <div className='space-y-6'>
      <div className='bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6'>
        <div className='md:grid md:grid-cols-3 md:gap-6'>
          <div className='md:col-span-1'>
            <h3 className='text-lg font-medium leading-6 text-gray-900'>How many people?</h3>
            <p className='mt-1 text-sm text-gray-500'>This are your roadtrip mates! Whatudp dawg?</p>
          </div>
          <div className='mt-5 md:mt-0 md:col-span-2'>
            <form className='space-y-6' action='#' method='POST'>
              <div className='grid grid-cols-3 gap-6'>
                <div className='col-span-3 sm:col-span-2'>
                  <label htmlFor='adults' className='block text-sm font-medium text-gray-700'>
                    Adults
                  </label>
                  <div className='mt-1 flex rounded-md shadow-sm'>
                    <input
                      type='number'
                      name='adults'
                      id='adults'
                      className='focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300'
                      placeholder='1'
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor='kids' className='block text-sm font-medium text-gray-700'>
                  Kids
                </label>
                <div className='mt-1'>
                  <input
                    type='number'
                    name='adults'
                    id='adults'
                    className='focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300'
                    placeholder='0'
                  />
                </div>
                <p className='mt-2 text-sm text-gray-500'>Kids are awesome</p>
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

export default StepOne;
