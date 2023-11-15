import logo from './logo.svg';
import Banner from './components/Banner';
import Header from './components/Header';
import ScrollerIcon from './components/ScrollerIcon';
import "./assets/css/style.css"
import WhatDoWeDo from './components/WhatDoWeDo';
import About from './components/About';

function App() {
  return (
    <div className="App">
      {/*       <Header /> */}
      <Banner />
      <ScrollerIcon />
      <div className='main'>
        <WhatDoWeDo />
        <About />
      </div>
    </div>
  );
}

export default App;
