import React from 'react';
import Intro from './Intro';
import Nav from './Nav';
import Notes from './Notes';
import Sidebar from './Sidebar';

export default function App() {
  return (
    <>
        <div className='flex font-courier'>
            <div className='w-64 h-auto border-r'>
            <Sidebar />
            </div>

          <div>
            <Nav />
            <Intro />
            <Notes />
          </div>
        </div>
    </>
  )
}