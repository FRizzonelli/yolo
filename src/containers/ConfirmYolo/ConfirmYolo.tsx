import { sampleSize } from 'lodash';
import React, { FunctionComponent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useYoloContext } from '../../hooks/useYoloContext';
import { Yolo } from '../../models/bookyolo';

interface IConfirmYoloProps {}

const ConfirmYolo: FunctionComponent<IConfirmYoloProps> = () => {
  const history = useHistory();

  const yolos: Yolo[] = [
    {
      title: 'Alps',
      period: '7 Aug - 15 Sep',
      price: 750,
      imageUrl: 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    },
    {
      title: 'UK came second',
      period: '19 Sept - 15 Oct',
      price: 880,
      imageUrl:
        'https://images.unsplash.com/photo-1586103180102-cdd021686e89?ixid=MnwxMjA3fDB8MHxwaG90[…]GVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    },
    {
      title: 'Balcan vibes',
      period: '20 Sept - 15 Oct',
      price: 470,
      imageUrl:
        'https://images.unsplash.com/photo-1551189654-7a5ac7381f8b?ixid=MnwxMjA3fDB8MHxwaG90by1[…]GVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80',
    },
    {
      title: 'Alone but connected',
      period: '30 Sept - 2 Nov',
      price: 570,
      imageUrl:
        'https://images.unsplash.com/photo-1555849583-432661b7597e?ixid=MnwxMjA3fDB8MHxwaG90by1[…]GVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    },
    {
      title: 'Sleep at gourmets',
      period: '5 Sept - 11 Oct',
      price: 600,
      imageUrl:
        'https://images.unsplash.com/photo-1593468645860-f43ad29e2b5b?ixid=MnwxMjA3fDB8MHxwaG90[…]GVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    },
    {
      title: 'Surfaholic',
      period: '5 Sept - 11 Oct',
      price: 600,
      imageUrl:
        'https://images.unsplash.com/photo-1502933691298-84fc14542831?ixid=MnwxMjA3fDB8MHxwaG90[…]GVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    },
    {
      title: 'Spa relaxing Tour',
      period: '8 Oct - 15 Nov',
      price: 900,
      imageUrl: 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    },
  ];

  const yoloCtx = useYoloContext();

  const onYoloConfirmed = (yolo: Yolo) => {
    console.log();

    yoloCtx.setConfirmedYolo(yolo);

    history.replace('yolo-confirmed');
  };

  const [yoloRandom, setYoloRandom] = useState(sampleSize(yolos, 3));

  return (
    <div className='space-y-6'>
      <div className='flex-wrap inline-flex items-center px-3 md:px-0'>
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
          <div className='bg-white h-2/4' />
        </div>
        <div className='relative max-w-7xl mx-auto'>
          <div className='text-center'>
            <h2 className='text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl'>Ready to YOLO!</h2>
            <p className='mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4'>This are your beautiful Yolo&apos;s!</p>
            <p className='max-w-2xl mx-auto text-xl text-gray-500 sm:mt-1'> Choose one to proceed!</p>
          </div>
          <div className='mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none'>
            {yoloRandom.map((yolo) => (
              <div
                key={yolo.title}
                className='flex flex-col rounded-lg shadow-lg overflow-hidden hover:bg-gray-50 cursor-pointer'
                onClick={() => onYoloConfirmed(yolo)}
              >
                <div className='flex-shrink-0'>
                  <img className='h-48 w-full object-cover' src={yolo.imageUrl} alt='' />
                </div>
                <div className='flex-1 bg-white p-6 flex flex-col justify-between'>
                  <div className='flex-1'>
                    <a className='block mt-2'>
                      <p className='text-xl font-semibold text-gray-900'>{yolo.title}</p>
                      <p className='mt-3 text-lg text-gray-500'>{yolo.period}</p>
                      <p className='mt-3 text-lg text-gray-500'>{`${yolo.price} €`}</p>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='flex flex-col items-center'>
            <button
              className='mt-16 w-48 md:w-96 h-20 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-2xl font-bold items-center rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              onClick={() => setYoloRandom(sampleSize(yolos, 3))}
            >
              Reroll 🎲
            </button>
            <p className='mt-12 underline'>Get notified when new Yolo&apos;s option are available</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmYolo;
