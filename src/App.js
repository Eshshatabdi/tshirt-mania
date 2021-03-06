import { Route, Routes } from 'react-router-dom';
import './App.css';
import GrandPa from './Components/GrandPa/GrandPa';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import OrderReview from './Components/OrderReview/OrderReview';

function App() {
  return (
    <div className="App">
      <h2>Welcome to tshirt mania</h2>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/orderreview' element={<OrderReview></OrderReview>}></Route>
        <Route path='/grandpa' element={<GrandPa></GrandPa>}></Route>
      </Routes>


    </div>
  );
}

export default App;
