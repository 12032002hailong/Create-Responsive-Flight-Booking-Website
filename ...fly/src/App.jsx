import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Search from './Components/Search/Search';
import Support from './Components/Support/Support';
import Info from './Components/Info/info';
import Travelers from './Components/Travelers/Travelers';
import Lounge from './Components/Lounge/Lounge';
import Subscriber from './Components/Subscribers/Subscriber';
import Footer from './Components/Footer/Footer';


const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Search />
      {/* <Support />
      <Info />
      <Lounge />
      <Travelers />
      <Subscriber />
      <Footer /> */}
    </div>
  )
}

export default App