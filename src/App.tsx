
import './App.css';
import { AppRouter } from './routes/AppRouter';

function App() {
  return (
    <div className="flex flex-col w-full min-h-[100vh] bg-[#f8f8f8]">
		<AppRouter />   
    </div>
  );
}

export default App;
