import './App.css'
import Topbar from './components/Topbar';
import LeftBar from './components/Leftbar';
import { CommunityContent, CommunitySideBar } from './components';
import MobileNav from './components/MobileNav';

function App() {
  return (
    <>
    <div className='app'>
      <Topbar/>
      <main className='main'>
        <aside className='sidebar'>
          <LeftBar/>
        </aside>
        <section className='community'>
          <CommunityContent/>
          <CommunitySideBar/>
        </section>
        </main>
        <MobileNav/>
    </div>
    </>
  )
}

export default App
