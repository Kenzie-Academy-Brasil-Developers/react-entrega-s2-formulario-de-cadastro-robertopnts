
import './App.css';
import AuthProvider from './components/contexts/AuthContext';
import TechsProvider from './components/contexts/TechsContext';
import RoutesMain from './routes';


function App() {
  return (
    <TechsProvider>
      <AuthProvider>
        <RoutesMain/>
      </AuthProvider>
    </TechsProvider>
  );
}

export default App;
