// import logo from './logo.svg';
// import './App.css';

import Summary from "./components/summary";
import Home from "./components/home";

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    //   <div className='main' >
    //     <div class="container">
    //       <h4><b>John Doe</b></h4>
    //       <p>Architect & Engineer</p>
    //     </div>
    //     <div class="container">
    //       <h4><b>John Doe</b></h4>
    //       <p>Architect & Engineer</p>
    //     </div>
    //     <div class="container">
    //       <h4><b>John Doe</b></h4>
    //       <p>Architect & Engineer</p>
    //     </div>
    //   </div>
    // </div>
    <BrowserRouter>
      <ul className="App-header">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/summary">Summary</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/summary" element={<Summary />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
