import './App.css';
import { TodoList } from './components/TodoList';
import { TodoProvider } from './providers/TodoProvider';

function App() {
  return (
      <TodoProvider>
        <TodoList />
      </TodoProvider>
  );
}

export default App;
