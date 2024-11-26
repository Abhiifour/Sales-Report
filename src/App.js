import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import LeftCol from './Left-col';
import RightCol from './Right-col';
import CenterCol from './Center-col';

function App() {



  return (
    <div className='px-[20px] ' >
    <div className='flex w-full justify-center items-center text-3xl border-2 rounded-md py-6 bg-slate-300 font-semibold'>
      Sales Visualizer
    </div>
    <div className="main w-full flex gap-[2px]">
    <div className='w-1/5 border-2 rounded-md  bg-slate-200'>
    <LeftCol />
    </div>
    <div className='w-3/5 border-2 rounded-md bg-slate-200'>
    <CenterCol />
    </div>
    <div className='w-1/5 border-2 rounded-md bg-slate-200'>
    <RightCol  />
    </div>
    
    </div>
   
    </div>
  );
}









export default App;
