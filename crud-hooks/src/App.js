
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Create from "./components/create";
import Read from "./components/read/read";
import Update from "./components/update";
import Error from "./components/error";
import { ContextProvider } from './store/context';

function App() {
  return (
    <ContextProvider>
      < BrowserRouter >
        <Navbar />
        <div className='App'>
          <Routes>
            <Route path='/create' element={<Create />} />
            <Route path='/' element={<Read />} />
            <Route path='/update/:id' element={<Update />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </div>
      </BrowserRouter >
    </ContextProvider>)
}

export default App;
