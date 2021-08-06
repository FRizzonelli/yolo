import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

interface ICta {}

const CtaYolo: FunctionComponent<ICta> = () => {
  return (
    <div className='bg-indigo-700'>
      <div className='max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-extrabold text-white sm:text-4xl'>
          <span className='block'>Boost your productivity.</span>
          <span className='block'>Start using Workflow today.</span>
        </h2>
        <p className='mt-4 text-lg leading-6 text-indigo-200'>
          Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.
        </p>
        <Link
          to='/book-yolo/step-one'
          className='mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto'
        >
          YOLO!
        </Link>
      </div>
    </div>
  );
};
export default CtaYolo;