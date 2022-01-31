import React from 'react';
import ToDoList from './components/ToDoList';
import NewTodo from './components/NewTodo';

const App: React.FC = () => {
  const todos = [{id: 't1', text: 'Finish the course'}];

  return (
    <div className="App">
      <NewTodo />
      <ToDoList items={todos} />
    </div>
  );
}

export default App;
