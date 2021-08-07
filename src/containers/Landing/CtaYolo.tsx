import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

interface ICta {}

const CtaYolo: FunctionComponent<ICta> = () => {
  return (
    <div className='bg-indigo-700'>
      <div className='max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-extrabold text-white sm:text-4xl'>
          <span className='block'>Start plan your trip.</span>
        </h2>
        <Link
          to='/book-yolo/step-one'
          className='mt-8 inline-flex items-center justify-center w-64 px-6 py-5 border border-transparent text-2xl font-extrabold rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8'
        >
          YOLO!
        </Link>
      </div>
    </div>
  );
};
export default CtaYolo;
