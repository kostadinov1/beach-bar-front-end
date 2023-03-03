import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <section className='app'>
        <header></header>
        <main>
            <Routes >
                  Menu
                {/* <Route path='/' element={<Home />}/>
                <Route path='/' element={< />}/>
                <Route path='/' element={< />}/>
                <Route path='/' element={< />}/> */}
            </Routes>
      </main>
      <footer></footer>
    </section>
  );
}

export default App;
