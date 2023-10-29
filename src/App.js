import { Route, Routes } from 'react-router-dom';
import './App.css';
import './bootstrap.min (4).css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
       <Route path='/' element={<Home/>}  > </Route>
      </Routes>
      <Footer/>
    </div>
  );
  }

export default App;
