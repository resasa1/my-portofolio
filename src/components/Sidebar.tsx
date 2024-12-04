

export default function Sidebar() {
  return (
    <div className='ml-3 overflow-y-auto h-screen mr-4 md:ml-6 md:mr-8'>
      <h1 className='mt-10 mb-8 font-sans font-bold'>Notes</h1>
      <ol>
      <li className='p-3 mb-4 border-2 border-solid border-gray-400'>Dont forget to eat</li>
      <li className='p-3 mb-4 border-2 border-solid border-gray-400'>Have you finish read berserk?</li>
      <li className='p-3 mb-4 border-2 border-solid border-gray-400'>Hey, You have an Assignment!</li>
      </ol>
    </div>
  )
}

