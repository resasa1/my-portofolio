import React from 'react'
import TypeWriterEffect from 'react-typewriter-effect';

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
        <div className='font-courier ml-6'>
        <TypeWriterEffect 
            textStyle={{
              fontSize: '2.25rem', // 4xl
              fontWeight: 'bold',
            }}
            startDelay={100}
            cursorColor="black"
            text="Hello i'm Resasa, Software Engineering"
            typeSpeed={130}
            hideCursorAfterText={true}
            // scrollArea={myAppRef}
        />
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