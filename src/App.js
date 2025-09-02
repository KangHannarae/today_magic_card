import { Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Main from './components/Main';

function App() {
  console.warn = function no_console() { };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>} />         
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;