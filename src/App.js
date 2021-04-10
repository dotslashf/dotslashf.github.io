import './App.css';

import Home from './pages/Home';
import { ThemeProvider } from './themeContext';

function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}

export default App;
