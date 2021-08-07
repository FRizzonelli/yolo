import React, { FunctionComponent } from 'react';
import { useYoloContext } from '../../hooks/useYoloContext';

interface IConfirmYoloProps {}

const ConfirmYolo: FunctionComponent<IConfirmYoloProps> = () => {
  const yolos = [
    {
      title: 'Boost your conversion rate',
      category: { name: 'Article', href: '#' },
      period: '7 Aug - 15 Sep',
      price: 750,
      imageUrl: 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    },
    {
      title: 'How to use search engine optimization to drive sales',
      href: '#',
      category: { name: 'Video', href: '#' },
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
      date: 'Mar 10, 2020',
      datetime: '2020-03-10',
      imageUrl: 'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      readingTime: '4 min',
      author: {
        name: 'Brenna Goyette',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      title: 'Improve your customer experience',
      href: '#',
      category: { name: 'Case Study', href: '#' },
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
      date: 'Feb 12, 2020',
      datetime: '2020-02-12',
      imageUrl: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      readingTime: '11 min',
      author: {
        name: 'Daniela Metz',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
  ];

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
          <div className='bg-white h-1/3 sm:h-2/3' />
        </div>
        <div className='relative max-w-7xl mx-auto'>
          <div className='text-center'>
            <h2 className='text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl'>Ready to YOLO!</h2>
            <p className='mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4'>This are your beautiful Yolo&apos;s!</p>
            <p className='max-w-2xl mx-auto text-xl text-gray-500 sm:mt-1'> Choose one to proceed!</p>
          </div>
          <div className='mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none'>
            {yolos.map((yolo) => (
              <div key={yolo.title} className='flex flex-col rounded-lg shadow-lg overflow-hidden'>
                <div className='flex-shrink-0'>
                  <img className='h-48 w-full object-cover' src={yolo.imageUrl} alt='' />
                </div>
                <div className='flex-1 bg-white p-6 flex flex-col justify-between'>
                  <div className='flex-1'>
                    <a href={yolo.href} className='block mt-2'>
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
            <button className='mt-16 w-96 h-20 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-2xl font-bold items-center rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
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
