import HomePage from './pages/HomePage';
import Check from './pages/Check';
import AboutPage from './pages/AboutPage';
import ArticleListPage from './pages/ArticleListPage';
import ArticlePage from './pages/ArticlePage';
import NotFoundPage from './pages/NotFoundPage'
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="page-body">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          {/* <Route exact path="check" element={<Check />} /> 
         </Route> */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/articles-list" element={<ArticleListPage />} />
          <Route path="/article/:name" element={<ArticlePage />} />
          <Route path='*' element={<NotFoundPage/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
