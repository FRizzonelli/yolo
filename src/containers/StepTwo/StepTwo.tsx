import React, { FunctionComponent, useState } from 'react';
import DatePicker from 'react-datepicker';
import { useHistory } from 'react-router-dom';
import { useYoloContext } from '../../hooks/useYoloContext';

interface IStepTwoProps {}

const StepTwo: FunctionComponent<IStepTwoProps> = () => {
  const history = useHistory();

  const yoloCtx = useYoloContext();

  const [weeks, setWeeks] = useState(yoloCtx.bookYolo?.weeks || 3);
  const [startDate, setStartDate] = useState(yoloCtx.bookYolo?.startDate || new Date());

  const handleOnSubmit = () => {
    yoloCtx.setBookYolo({
      ...yoloCtx.bookYolo,
      weeks,
      startDate,
    });

    history.replace(`step-three`);
  };

  const handleOnPrevClicked = () => {
    history.push('/');
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
              <div>
                <label htmlFor='weeks' className='block text-sm font-medium text-gray-700'>
                  Weeks
                </label>
                <div className='mt-1 flex rounded-md shadow-sm'>
                  <input
                    type='number'
                    name='weeks'
                    id='weeks'
                    className='focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300'
                    value={weeks}
                    onChange={(e) => {
                      setWeeks(Number(e.currentTarget.value));

                      yoloCtx.setBookYolo({
                        ...yoloCtx.bookYolo,
                        weeks: Number(e.currentTarget.value),
                      });
                    }}
                  />
                </div>
              </div>
              <div>
                <label htmlFor='starting-from' className='block text-sm font-medium text-gray-700'>
                  Starting from
                </label>
                <div className='mt-1 flex rounded-md shadow-sm'>
                  <DatePicker
                    name='starting-from'
                    id='starting-from'
                    // className='focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300'
                    selected={startDate}
                    onChange={(date) => {
                      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                      // @ts-ignore
                      setStartDate(date);

                      yoloCtx.setBookYolo({
                        ...yoloCtx.bookYolo,
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        startDate: date,
                      });
                    }}
                    selectsStart
                    startDate={startDate}
                    minDate={new Date()}
                    dateFormat='dd/MM/yyyy'
                    nextMonthButtonLabel='>'
                    previousMonthButtonLabel='<'
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className='flex justify-between'>
        <button
          onClick={handleOnPrevClicked}
          className='ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        >
          Back
        </button>
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
