import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
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
              </Routes>
            </div>

          </div>
        </Router>

      </EthosConnectProvider>
    </>
  );
}

export default App;
