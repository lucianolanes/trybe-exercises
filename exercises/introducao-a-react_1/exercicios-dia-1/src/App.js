import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const compromissos = ['Acordar', 'Banho', 'Trabalhar', 'Estudar', 'Passear com o Dog'];

function App() {

  return (
    compromissos.map((tarefa) => Task(tarefa))
  );
}

export default App;
