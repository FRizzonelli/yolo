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
          <div className='px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0 items-center flex'>
            <div>
              <div>
                <span className='h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600'>
                  <rest.icon className='h-6 w-6 text-white' aria-hidden='true' />
                </span>
              </div>
              <div className='mt-6'>
                <h2 className='text-3xl font-extrabold tracking-tight text-gray-900'>{description}</h2>
                {/* <p className='mt-4 text-lg text-gray-500'>
                  Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis bibendum malesuada faucibus lacinia porttitor.
                </p> */}
              </div>
            </div>
          </div>
          <div className='mt-12 sm:mt-16 lg:mt-0'>
            <div className='pl-4 -mr-48 sm:pl-6 md:-mr-16 '>
              <img className='w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5' src={image} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className='mt-24'>
        <div className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24'>
          <div className='px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2 items-center flex'>
            <div>
              <div>
                <span className='h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600'>
                  <rest.icon className='h-6 w-6 text-white' aria-hidden='true' />
                </span>
              </div>
              <div className='mt-6'>
                <h2 className='text-3xl font-extrabold tracking-tight text-gray-900'>{description}</h2>
                <p className='mt-4 text-lg text-gray-500'></p>
              </div>
            </div>
          </div>
          <div className='mt-12 sm:mt-16 lg:mt-0'>
            <div className='pr-4 -ml-48 sm:pr-6 md:-ml-16'>
              <img className='w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5' src={image} />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default AlternateStepComponent;
