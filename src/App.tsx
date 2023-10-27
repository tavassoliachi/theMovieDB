import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import Details from './pages/Details';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <SearchBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
