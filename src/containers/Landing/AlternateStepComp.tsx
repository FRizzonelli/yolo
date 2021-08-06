import { InboxIcon, SparklesIcon } from '@heroicons/react/solid';
import { IpcNetConnectOpts } from 'node:net';
import { FunctionComponent } from 'react';

interface IAlternateStep {
  side: 'r' | 'l';
  image: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  description: string;
}

const AlternateStepComponent: FunctionComponent<IAlternateStep> = ({ side, image, description, ...rest }) => {
  if (side === 'r') {
    return (
      <div className='mt-24'>
        <div className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24'>
          <div className='px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0'>
            <div>
              <div>
                <span className='h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600'>
                  <rest.icon className='h-6 w-6 text-white' aria-hidden='true' />
                </span>
              </div>
              <div className='mt-6'>
                <h2 className='text-3xl font-extrabold tracking-tight text-gray-900'>Stay on top of customer support</h2>
                <p className='mt-4 text-lg text-gray-500'>
                  Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis bibendum malesuada faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra
                  duis. In venenatis sem arcu pretium pharetra at. Lectus viverra dui tellus ornare pharetra.
                </p>
              </div>
            </div>
          </div>
          <div className='mt-12 sm:mt-16 lg:mt-0'>
            <div className='pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full'>
              <img
                className='w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none'
                src={image}
                alt='Inbox user interface'
              />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className='mt-24'>
        <div className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24'>
          <div className='px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2'>
            <div>
              <div>
                <span className='h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600'>
                  <rest.icon className='h-6 w-6 text-white' aria-hidden='true' />
                </span>
              </div>
              <div className='mt-6'>
                <h2 className='text-3xl font-extrabold tracking-tight text-gray-900'>Better understand your customers</h2>
                <p className='mt-4 text-lg text-gray-500'>{description}</p>
              </div>
            </div>
          </div>
          <div className='mt-12 sm:mt-16 lg:mt-0'>
            <div className='pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full'>
              <img
                className='w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none'
                src={image}
                alt='Customer profile user interface'
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default AlternateStepComponent;
