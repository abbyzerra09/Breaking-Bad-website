import './App.css'
import wallpaper from './assets/bg.jpg'
import Header from './UI/header'
import Hero from './UI/heroSection'

function App() {

  return (
    <>
    <div className="min-h-screen w-full text-white bg-black font-sans selection:bg-green-500">
      <Header/>
      <Hero/>
    </div>
        </>
  );
}

export default App