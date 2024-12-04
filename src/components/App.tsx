import Intro from './Intro';
import Nav from './Nav';
import Notes from './Notes';
// import Sidebar from './Sidebar';
import SidebarNotes from './NoteSide';

export default function App() {
  return (
    <div className='flex font-courier max-w-full'>
      <div className='w-64 h-auto border-r'>
        {/* <Sidebar /> */}
        <SidebarNotes />
      </div>
      <div className='flex-1'>
        <Nav />
        <Intro />
        <Notes />
      </div>
    </div>
  )
}