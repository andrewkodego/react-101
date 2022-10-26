import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header.js';
import Footer from './Footer';
import MainContent from './MainContent';
import Square from './Square';
import Board from './Board';

function App() {
  return (
    <div className="">
      <Square className="gray" textContent="Hello" index="1"/>
      <Square className="blue" textContent="World" index="2"/>
      <Square textContent="This is "/>
      <Square className="red"/>
      <hr/>
      <Board />

    <Header/>
    <Footer/>
    </div>
  );
}

export default App;
