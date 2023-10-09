/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './component/sidebar/Sidebar';
import Navbar from './component/navbar/Navbar';
import Board from './component/Board/Board';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Sidebar />
        <Board />
      </div>
    </Router>
  );
}

export default App;
