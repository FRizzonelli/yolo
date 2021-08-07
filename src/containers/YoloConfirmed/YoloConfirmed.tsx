import React, { FunctionComponent } from 'react';
import { useYoloContext } from '../../hooks/useYoloContext';

interface IYoloConfirmedProps {}

const YoloConfirmed: FunctionComponent<IYoloConfirmedProps> = () => {
  const yoloCtx = useYoloContext();

  return (
    <div className='space-y-6'>
      <div className='inline-flex items-center'>
        <p className='text-lg text-gray-900 mr-6'>Your setup: </p>
        <span className='inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-yellow-100 text-yellow-800 mr-2'>{`${
          yoloCtx.bookYolo?.adults
        } Adults 👩🏽 ${yoloCtx.bookYolo?.kids ? yoloCtx.bookYolo?.kids + ' Kids 👶' : ''}`}</span>
        <span className='inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-yellow-100 text-yellow-800 mr-2'>{`${yoloCtx.bookYolo?.weeks} Weeks`}</span>
        <span className='inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-yellow-100 text-yellow-800 mr-2'>
          {yoloCtx.bookYolo?.leaveOn === 'weekends' ? 'Weekends' : 'Change any time'}
        </span>
        <span className='inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-yellow-100 text-yellow-800 pr-2 mr-2'>
          {yoloCtx.bookYolo?.transport === 'car' ? 'By car' : 'Public transports 🌲'}
        </span>
      </div>

      <div className='relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8'>
        <div className='absolute inset-0'>
          <div className='bg-white h-full' />
        </div>
        <div className='relative max-w-7xl mx-auto'>
          <div className='text-center'>
            <h2 className='text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl'>{yoloCtx.confirmedYolo?.title}</h2>
            <img className='mt-8 h-96 w-full object-cover' src={yoloCtx.confirmedYolo?.imageUrl} alt='' />
          </div>
          <div className='mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none'>
            <div className='flex-1'>
              <a className='block mt-2'>
                <p className='text-xl font-semibold text-gray-900'>Price</p>
                <p className='mt-3 text-lg text-gray-500'>{`Price is fixed! It's ${yoloCtx.confirmedYolo?.price} €`}</p>
              </a>
            </div>
            <div className='flex-1'>
              <a className='block mt-2'>
                <p className='text-xl font-semibold text-gray-900'>Stops</p>
                <p className='mt-3 text-lg text-gray-500'>Stops are not fixed! We’ll plan them on time for you</p>
              </a>
            </div>
            <div className='flex-1'>
              <a className='block mt-2'>
                <p className='text-xl font-semibold text-gray-900'>Dates</p>
                <p className='mt-3 text-lg text-gray-500'>{`${yoloCtx.confirmedYolo?.period}`}</p>
              </a>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <button className='mt-16 w-96 h-20 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-2xl font-bold items-center rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
              Yolo!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoloConfirmed;
