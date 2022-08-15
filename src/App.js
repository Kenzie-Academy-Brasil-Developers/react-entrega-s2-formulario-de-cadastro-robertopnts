
import './App.css';
import AuthProvider from './components/contexts/AuthContext.jsx';
import RoutesMain from './routes';


function App() {
  return (
    <AuthProvider>
      <RoutesMain/>
    </AuthProvider>
  );
}

export default App;
