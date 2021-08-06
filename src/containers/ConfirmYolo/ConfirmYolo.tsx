import React, { FunctionComponent } from 'react';
import { useYoloContext } from '../../hooks/useYoloContext';

interface IConfirmYoloProps {}

const ConfirmYolo: FunctionComponent<IConfirmYoloProps> = () => {
  const yolos = [
    {
      title: 'Boost your conversion rate',
      href: '#',
      category: { name: 'Article', href: '#' },
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      imageUrl: 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      readingTime: '6 min',
      author: {
        name: 'Roel Aufderehar',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
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
        <span className='inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-yellow-100 text-yellow-800 mr-2'>{`${
          yoloCtx.bookYolo?.adults
        } 👩🏽 ${yoloCtx.bookYolo?.kids ? yoloCtx.bookYolo?.kids + ' 👶' : ''}`}</span>
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
            <p className='mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.
            </p>
          </div>
          <div className='mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none'>
            {yolos.map((yolo) => (
              <div key={yolo.title} className='flex flex-col rounded-lg shadow-lg overflow-hidden'>
                <div className='flex-shrink-0'>
                  <img className='h-48 w-full object-cover' src={yolo.imageUrl} alt='' />
                </div>
                <div className='flex-1 bg-white p-6 flex flex-col justify-between'>
                  <div className='flex-1'>
                    <p className='text-sm font-medium text-indigo-600'>
                      <a href={yolo.category.href} className='hover:underline'>
                        {yolo.category.name}
                      </a>
                    </p>
                    <a href={yolo.href} className='block mt-2'>
                      <p className='text-xl font-semibold text-gray-900'>{yolo.title}</p>
                      <p className='mt-3 text-base text-gray-500'>{yolo.description}</p>
                    </a>
                  </div>
                  <div className='mt-6 flex items-center'>
                    <div className='flex-shrink-0'>
                      <a href={yolo.author.href}>
                        <span className='sr-only'>{yolo.author.name}</span>
                        <img className='h-10 w-10 rounded-full' src={yolo.author.imageUrl} alt='' />
                      </a>
                    </div>
                    <div className='ml-3'>
                      <p className='text-sm font-medium text-gray-900'>
                        <a href={yolo.author.href} className='hover:underline'>
                          {yolo.author.name}
                        </a>
                      </p>
                      <div className='flex space-x-1 text-sm text-gray-500'>
                        <time dateTime={yolo.datetime}>{yolo.date}</time>
                        <span aria-hidden='true'>&middot;</span>
                        <span>{yolo.readingTime} read</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmYolo;
