import './App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Portal from './Component/Portal';

import Post from './Component/Post';


function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route path='/' element={<Portal />}></Route>
          
          <Route path='post/:id' element={<Post />} />

        </Routes>

      </BrowserRouter>


    </>


  );
}

export default App;
