import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/pages/homePage';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
        <HomePage />
      <Footer />
    </div>
  );
}

export default App;
