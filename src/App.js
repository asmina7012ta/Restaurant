import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Restaurant from './Restaurant';
import Resview from './Resview';


function App() {
  return (
    <div className="App">
      <Header></Header>
    <Routes>
       <Route path='/' element={ <Restaurant/>} />
       <Route path='/viewRes/:id' element={ <Resview/>} />
    </Routes>

     <Footer></Footer>
    </div>
  );
}

export default App;
