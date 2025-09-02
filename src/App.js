import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import Main from './components/Main';
import ProblemSolving from './components/ProblemSolving';
import DailyFortune from './components/DailyFortune'; // 오늘의 운세 컴포넌트 추가

function App() {
  console.warn = function no_console() { };

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/problem' element={<ProblemSolving />} />
        <Route path='/fortune' element={<DailyFortune />} /> {/* 오늘의 운세 라우트 추가 */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
