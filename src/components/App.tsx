import React from 'react';
import Intro from './Intro';
import Nav from './Nav';
import Notes from './Notes';


export default function App() {
  return (
    <>
        <div className='font-courier'>
        <Nav />
        <Intro />
        <Notes />
        </div>
    </>
  )
}