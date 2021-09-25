import Header from './components/Header';
import HomePage from './components/pages/homePage';
import PostsPage from './components/pages/posts';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.scss';

function App() {
  return (
      <Router>
        <div className="App">
          <Header />

          <Route exact path='/' component={HomePage} />
          <Route exact path='/posts' component={PostsPage} />

        </div>
      </Router>
    
  );
}

export default App;
