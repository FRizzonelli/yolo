import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, SparklesIcon } from '@heroicons/react/outline';
import { Fragment, FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { CtaYolo, Testimonial } from '.';
import { useYoloContext } from '../../hooks/useYoloContext';
import { AlternateStepComponent } from './';

interface ILandingProps {}

const Landing: FunctionComponent<ILandingProps> = () => {
  const yoloCtx = useYoloContext();

  const onStartBookYoloClicked = () => {
    yoloCtx.setBookYolo({});
    yoloCtx.setConfirmedYolo(undefined);
  };

  return (
    <div className='bg-white'>
      <header>
        <Popover className='relative bg-white'>
          {({ open }) => (
            <>
              <div className='flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8'>
                <div className='flex justify-start lg:w-0 lg:flex-1'>
                  <Link to='/'>
                    <span className='sr-only'>Workflow</span>
                    {/* Icona YOLO! */}
                    <img className='h-8 w-auto sm:h-10' src='/logo.png' alt='' />
                  </Link>
                </div>
                <div className='-mr-2 -my-2 md:hidden'>
                  <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                    <span className='sr-only'>Open menu</span>
                    <MenuIcon className='h-6 w-6' aria-hidden='true' />
                  </Popover.Button>
                </div>
                <div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'>
                  <a href='#' className='whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900'>
                    Sign in
                  </a>
                  <a
                    href='#'
                    className='ml-8 whitespace-nowrap inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-purple-700 hover:to-indigo-700'
                  >
                    Sign up
                  </a>
                </div>
              </div>

              <Transition
                show={open}
                as={Fragment}
                enter='duration-200 ease-out'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='duration-100 ease-in'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Popover.Panel focus static className='absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'>
                  <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50'>
                    <div className='py-6 px-5'>
                      <div className='mt-6'>
                        <a
                          href='#'
                          className='w-full flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-purple-700 hover:to-indigo-700'
                        >
                          Sign up
                        </a>
                        <p className='mt-6 text-center text-base font-medium text-gray-500'>
                          Existing customer?
                          <a href='#' className='text-gray-900'>
                            Sign in
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </header>

      <main>
        {/* Hero section */}
        <div className='relative'>
          <div className='absolute inset-x-0 bottom-0 h-1/2 bg-gray-100' />
          <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
            <div className='relative shadow-xl sm:rounded-2xl sm:overflow-hidden'>
              <div className='absolute inset-0'>
                <img
                  className='h-full w-full object-cover'
                  src='https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
                  alt='People working on laptops'
                />
                <div className='absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-700 mix-blend-multiply' />
              </div>
              <div className='relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8'>
                <h1 className='text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl'>
                  <span className='block text-white'>Crazy affordable trips</span>
                  <span className='block text-indigo-200'>for smart workers</span>
                </h1>
                <div className='mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center'>
                  <Link
                    to='/book-yolo/step-one'
                    onClick={onStartBookYoloClicked}
                    className='flex items-center justify-center w-64 px-6 py-5
                     border border-transparent text-2xl font-extrabold rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8'
                  >
                    YOLO!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Alternating Step Sections */}
        <div className='relative pt-16 pb-32 overflow-hidden'>
          <div className='relative'>
            <p className='text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
              Take a <span className='text-indigo-700'>crazy trip</span>, with <span className='text-indigo-700'>many locations</span>, all known at{' '}
              <span className='text-indigo-700'>last second</span>.
            </p>
            <p className='text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
              Why? You keep a <span className='text-indigo-700'>fresh mind</span> and <span className='text-indigo-700'>costs are dead low</span>.
            </p>
          </div>
          <div>
            <h2 className='mt-20 text-3xl text-center tracking-tight font-extrabold text-gray-900 sm:text-4xl'>How it works</h2>
          </div>
          <div aria-hidden='true' className='absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100' />
          <AlternateStepComponent
            icon={SparklesIcon}
            side='r'
            image='https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80'
            description='You tell us how flexibile you are'
          />
          <AlternateStepComponent
            icon={SparklesIcon}
            side='l'
            image='https://images.unsplash.com/photo-1624965083751-16b1c40137f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
            description='You pick a kind of location you like'
          />
          <AlternateStepComponent
            icon={SparklesIcon}
            side='r'
            image='https://images.unsplash.com/photo-1502920514313-52581002a659?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1647&q=80'
            description='You onboard on a working trip with different locations, all known at last second so your mind stays fresh and we can keep the costs lower for you'
          />
          <AlternateStepComponent
            icon={SparklesIcon}
            side='l'
            image='https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
            description='A few days before the trip we give you the plan for the first location you will go'
          />
          <AlternateStepComponent
            icon={SparklesIcon}
            side='r'
            image='https://images.unsplash.com/photo-1595234336271-178875797b4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
            description='You’ll receive further stops informations as you go!'
          />
        </div>

        {/* Cta Section*/}
        <CtaYolo />
        {/* Testimonial Section */}
        <Testimonial quote='YOLOerei subito!' name='Alexa Frasson' role='Product Manager, Strelka Games Srl' />
      </main>

      <footer className='bg-gray-50' aria-labelledby='footer-heading'>
        <h2 id='footer-heading' className='sr-only'>
          Footer
        </h2>
        <div className='max-w-7xl mx-auto pt-16 pb-8 px-4 sm:px-6 lg:pt-24 lg:px-8'>
          <div className='xl:grid xl:grid-cols-3 xl:gap-8'></div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
