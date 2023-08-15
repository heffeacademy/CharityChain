import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/home/Header";
import Footer from "./components/home/Footer";
import Home from "./components/home/Home";
import About from "./components/About";
import Partnership from "./components/Partnership";
import Whitepaper from "./components/Whitepaper";
import Vote from "./components/Vote";
import Contact from "./components/Contact";
import Company from "./components/Company";
import Collection from "./components/Collection";
import { EthosConnectProvider } from 'ethos-connect';

function App() {
  return (
    <>
      <EthosConnectProvider>
        <Router>

          <div className="App">
            <Header />

            <div className="mainWindow">

              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/partnership' element={<Partnership />} />
                <Route path='/whitepaper' element={<Whitepaper />} />
                <Route path='/vote' element={<Vote />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/collection' element={<Collection />} />
                <Route path='/company' element={<Company />} />
              </Routes>
            </div>
            <Footer />

          </div>
        </Router>

      </EthosConnectProvider>
    </>
  );
}

export default App;
