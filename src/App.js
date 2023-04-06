import Login from './Components/Login/Login';
import './App.css';
import { useRoutes } from 'react-router-dom';
import Routes from './Route/PrivateRoute';
import { Provider } from 'react-redux';
function App() {

  const content = useRoutes(Routes);

  return (
    <div className="App">
      {content}
    </div>
  );
}

export default App;
