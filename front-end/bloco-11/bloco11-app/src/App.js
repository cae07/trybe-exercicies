import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasks = ['acordar', 'escovar dente', 'tomar banho', 'tomar café', 'começar a estudar'];

function App() {
  return (
    <ul>
      {tasks.map((task) => Task(task))}
    </ul>
  );
}

export default App;
