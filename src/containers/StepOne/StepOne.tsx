import React, { FunctionComponent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useYoloContext } from '../../hooks/useYoloContext';

interface IStepOneProps {}

const StepOne: FunctionComponent<IStepOneProps> = () => {
  const history = useHistory();

  const yoloCtx = useYoloContext();

  const [adults, setAdults] = useState(yoloCtx.bookYolo?.adults || 1);
  const [kids, setKids] = useState(yoloCtx.bookYolo?.kids || 0);

  const handleOnSubmit = () => {
    yoloCtx.setBookYolo({
      ...yoloCtx.bookYolo,
      adults,
      kids,
    });

    history.replace(`step-two`);
  };

  const handleOnPrevClicked = () => {
    history.push('/');
  };

  return (
    <div className='space-y-6'>
      <div className='bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6 h-96 flex flex-col justify-evenly'>
        <div className='md:col-span-1 mb-4 text-center'>
          <h2 className='text-3xl tracking-tight font-extrabold text-gray-900'>How many people?</h2>
          <p className='text-lg mt-1 text-gray-500'>People you are YOLOing with</p>
        </div>
        <div className='mt-5 md:mt-0 md:col-span-2'>
          <form className='space-y-6 md:px-72' action='#' method='POST'>
            <div>
              <label htmlFor='adults' className='block text-lg font-medium text-gray-700'>
                Adults
              </label>
              <div className='mt-1 flex rounded-md shadow-sm'>
                <input
                  type='number'
                  name='adults'
                  id='adults'
                  className='focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300'
                  value={adults}
                  onChange={(e) => {
                    setAdults(Number(e.currentTarget.value));

                    yoloCtx.setBookYolo({
                      ...yoloCtx.bookYolo,
                      adults: Number(e.currentTarget.value),
                    });
                  }}
                />
              </div>
            </div>

            <div>
              <label htmlFor='kids' className='block text-lg font-medium text-gray-700'>
                Kids
              </label>
              <div className='mt-1'>
                <input
                  type='number'
                  name='kids'
                  id='kids'
                  className='focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300'
                  value={kids}
                  onChange={(e) => {
                    setKids(Number(e.currentTarget.value));

                    yoloCtx.setBookYolo({
                      ...yoloCtx.bookYolo,
                      kids: Number(e.currentTarget.value),
                    });
                  }}
                />
              </div>
              <p className='mt-2 text-sm text-gray-500'>Tip: Don&apos;t abandon 🐕 for travelling</p>
            </div>
          </form>
        </div>
      </div>

      <div className='flex justify-between pb-4 px-4 md:px-0'>
        <button
          onClick={handleOnPrevClicked}
          className='mr-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-36'
        >
          Back
        </button>
        <button
          type='submit'
          onClick={handleOnSubmit}
          className='ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-36'
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StepOne;
