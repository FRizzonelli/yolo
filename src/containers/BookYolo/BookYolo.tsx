import { CheckIcon } from '@heroicons/react/solid';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { Link, Route, Switch, useHistory, useRouteMatch } from 'react-router-dom';
import { classNames } from '../../utils';
import { ConfirmYolo } from '../ConfirmYolo';
import { StepFour } from '../StepFour';
import { StepOne } from '../StepOne';
import { StepThree } from '../StepThree';
import { StepTwo } from '../StepTwo';
import { YoloConfirmed } from '../YoloConfirmed';

interface IBookYoloProps {}

const BookYolo: FunctionComponent<IBookYoloProps> = () => {
  const match = useRouteMatch();

  const history = useHistory();

  useEffect(() => {
    switch (history.location.pathname) {
      case '/book-yolo/step-one':
        setSteps(
          steps.map((s) =>
            s.id === '01'
              ? {
                  ...s,
                  status: 'current',
                }
              : { ...s, status: 'upcoming' }
          )
        );
        break;
      case '/book-yolo/step-two':
        setSteps(
          steps.map((s) =>
            s.id === '02'
              ? {
                  ...s,
                  status: 'current',
                }
              : s.id === '01'
              ? { ...s, status: 'complete' }
              : { ...s, status: 'upcoming' }
          )
        );
        break;
      case '/book-yolo/step-three':
        setSteps(
          steps.map((s) =>
            s.id === '03'
              ? {
                  ...s,
                  status: 'current',
                }
              : s.id === '02' || s.id === '01'
              ? { ...s, status: 'complete' }
              : { ...s, status: 'upcoming' }
          )
        );
        break;
      case '/book-yolo/step-four':
        setSteps(
          steps.map((s) =>
            s.id === '04'
              ? {
                  ...s,
                  status: 'current',
                }
              : { ...s, status: 'complete' }
          )
        );
        break;
      case '/book-yolo/confirm':
        setSteps(
          steps.map((s) => {
            return { ...s, status: 'complete' };
          })
        );
        break;
    }
  }, [history.location.pathname]);

  const [steps, setSteps] = useState([
    { id: '01', name: 'How many people', to: `${match.url}/step-one`, status: 'current' },
    { id: '02', name: 'How long', to: `${match.url}/step-two`, status: 'upcoming' },
    { id: '03', name: 'When could you change', to: `${match.url}/step-three`, status: 'upcoming' },
    { id: '04', name: 'How would you move', to: `${match.url}/step-four`, status: 'upcoming' },
  ]);

  return (
    <div className='w-screen h-screen bg-gray-100'>
      <div className='lg:border-t lg:border-b lg:border-gray-200 bg-white'>
        <nav className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8' aria-label='Progress'>
          <ol className='rounded-md overflow-hidden lg:flex lg:border-l lg:border-r lg:border-gray-200 lg:rounded-none'>
            {steps.map((step, stepIdx) => (
              <li key={step.id} className='relative overflow-hidden lg:flex-1'>
                <div
                  className={classNames(
                    stepIdx === 0 ? 'border-b-0 rounded-t-md' : '',
                    stepIdx === steps.length - 1 ? 'border-t-0 rounded-b-md' : '',
                    'border border-gray-200 overflow-hidden lg:border-0'
                  )}
                >
                  {step.status === 'complete' ? (
                    <Link to={step.to} className='group'>
                      <span
                        className='absolute top-0 left-0 w-1 h-full bg-transparent group-hover:bg-gray-200 lg:w-full lg:h-1 lg:bottom-0 lg:top-auto'
                        aria-hidden='true'
                      />
                      <span className={classNames(stepIdx !== 0 ? 'lg:pl-9' : '', 'px-6 py-5 flex items-center text-sm font-medium')}>
                        <span className='flex-shrink-0'>
                          <span className='w-10 h-10 flex items-center justify-center bg-indigo-600 rounded-full'>
                            <CheckIcon className='w-6 h-6 text-white' aria-hidden='true' />
                          </span>
                        </span>
                        <span className='mt-0.5 ml-4 min-w-0 flex flex-col'>
                          <span className='text-xs font-semibold tracking-wide uppercase'>{step.name}</span>
                        </span>
                      </span>
                    </Link>
                  ) : step.status === 'current' ? (
                    <Link to={step.to} aria-current='step'>
                      <span className='absolute top-0 left-0 w-1 h-full bg-indigo-600 lg:w-full lg:h-1 lg:bottom-0 lg:top-auto' aria-hidden='true' />
                      <span className={classNames(stepIdx !== 0 ? 'lg:pl-9' : '', 'px-6 py-5 flex items-center text-sm font-medium')}>
                        <span className='flex-shrink-0'>
                          <span className='w-10 h-10 flex items-center justify-center border-2 border-indigo-600 rounded-full'>
                            <span className='text-indigo-600'>{step.id}</span>
                          </span>
                        </span>
                        <span className='mt-0.5 ml-4 min-w-0 flex flex-col'>
                          <span className='text-xs font-semibold text-indigo-600 tracking-wide uppercase'>{step.name}</span>
                        </span>
                      </span>
                    </Link>
                  ) : (
                    <Link to={step.to} className='group'>
                      <span
                        className='absolute top-0 left-0 w-1 h-full bg-transparent group-hover:bg-gray-200 lg:w-full lg:h-1 lg:bottom-0 lg:top-auto'
                        aria-hidden='true'
                      />
                      <span className={classNames(stepIdx !== 0 ? 'lg:pl-9' : '', 'px-6 py-5 flex items-center text-sm font-medium')}>
                        <span className='flex-shrink-0'>
                          <span className='w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full'>
                            <span className='text-gray-500'>{step.id}</span>
                          </span>
                        </span>
                        <span className='mt-0.5 ml-4 min-w-0 flex flex-col'>
                          <span className='text-xs font-semibold text-gray-500 tracking-wide uppercase'>{step.name}</span>
                        </span>
                      </span>
                    </Link>
                  )}

                  {stepIdx !== 0 ? (
                    <>
                      {/* Separator */}
                      <div className='hidden absolute top-0 left-0 w-3 inset-0 lg:block' aria-hidden='true'>
                        <svg className='h-full w-full text-gray-300' viewBox='0 0 12 82' fill='none' preserveAspectRatio='none'>
                          <path d='M0.5 0V31L10.5 41L0.5 51V82' stroke='currentcolor' vectorEffect='non-scaling-stroke' />
                        </svg>
                      </div>
                    </>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </nav>
      </div>
      <div className='max-w-7xl mx-auto sm:px-6 lg:px-8 mt-8 bg-gray-100'>
        <Switch>
          <Route path={`${match.path}/step-one`}>
            <StepOne />
          </Route>
          <Route path={`${match.path}/step-two`}>
            <StepTwo />
          </Route>
          <Route path={`${match.path}/step-three`}>
            <StepThree />
          </Route>
          <Route path={`${match.path}/step-four`}>
            <StepFour />
          </Route>
          <Route path={`${match.path}/confirm`}>
            <ConfirmYolo />
          </Route>
          <Route path={`${match.path}/yolo-confirmed`}>
            <YoloConfirmed />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default BookYolo;
