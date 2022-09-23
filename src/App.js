// import logo from './logo.svg';
import './App.scss';
import Haeder from './components/Header';
import Navbar from "./components/Navbar"
import Contents from "./components/Contents"
import Footer from "./components/Footer"

function App() {
  return (
      <div className="App" >
        <Haeder/>
        <Navbar/>
        <Contents/>
        <Footer/>
      </div>
  );
}

export default App;
