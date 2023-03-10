import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Events from './components/Events/Events';

function App() {
  return (
    <>
        <Header />
        <main id='main'>
            <Routes >
                  {/* Menu */}
                <Route path='/' element={<Home />}/>
                <Route path='/events' element={<Events />}/>
                {/* <Route path='/' element={< />}/> */}
                {/* <Route path='/' element={< />}/> */}
            </Routes>
        </main>
        <Footer/>
    </>
  );
}

export default App;
