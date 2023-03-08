// import logo from './logo.svg';
import './App.css';
import Head from './components/Head';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import Works from './components/Works.jsx';
import Foot from './components/Foot';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Head className="head"></Head>
        <AboutMe/>
        <Services/>
        <Works></Works>
        <Foot></Foot>
      </header>
    </div>
  );
}

export default App;
