
// import TypeWriterEffect from 'react-typewriter-effect';

// import { useState, useEffect } from "react";

const tools = [
  {
    title: 'Javascript',
    url: '#',
  },
  {
    title: 'Typescript',
    url: '#',
  },
  {
    title: 'Node.js',
    url: '#',
  },
  {
    title: 'React',
    url: '#',
  },
  {
    title: 'Next.js',
    url: '#',
  },
  {
    title: 'Laravel',
    url: '#',
  },
  {
    title: 'Tailwindcss',
    url: '#',
  },
  {
    title: 'ShadCN',
    url: '#',
  },
  {
    title: 'Vercel',
    url: '#',
  },
]



function Intro() {
  
  return (
    <>
        <div className='font-courier mt-16 ml-6'>
        {/* <TypeWriterEffect 
            textStyle={{
              fontSize: '2.25rem', // 4xl
              fontWeight: 'bold',
            }}
            startDelay={100}
            cursorColor="black"
            text="Hello i'm Resasa,"
            typeSpeed={130}
            hideCursorAfterText={true}
            // scrollArea={myAppRef}
        /> */}
          <p className="font-bold text-5xl h-36 ">Let this blank</p>
           <p className='mb-4 mt-4'>Tool that i'm used</p>
            <ol className='what-im-do grid grid-rows-4 grid-flow-col gap-4'>
              {tools.map((tool)=>(
                <div className=''>
                  <li>* {tool.title}</li>
                </div>
              ))}
            </ol>
            <p className='mt-5 text-2xl'>Simple UI, is Better</p>
        </div>
    </>
    
  )
}

export default Intro