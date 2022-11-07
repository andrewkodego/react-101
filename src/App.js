import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header.js';
import Footer from './Footer';
import Square from './Square';
import Board from './Board';
import SampleForm from './SampleForm';
import TicTacToe from './TicTacToe';
import DynamicForm from './DynamicForm';
import EmployeeList from './EmployeeList';

function App() {
  return (
    <div className="">

      <EmployeeList/>


      <DynamicForm/>
      
      <TicTacToe/>
  
      <Header/>
      <Footer/>
    
    </div>
  );
}

export default App;
