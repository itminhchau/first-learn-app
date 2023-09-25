import {
  Route, Routes
} from "react-router-dom";
import Header from "./components/Header";
import ReUseEffect from "./components/ReUseEffect";
import UseCallback from "./components/UseCallback";
import UseReducer from "./components/UseReducer";
import UseRef from "./components/UseRef";
import HomePage from "./features/HomePage";
import LuckyWheel from "./features/LuckyWheel";
import Timer from "./features/Timer";
import Todo from "./features/Todo";
import UseEffectDomeEvent from "./features/UseEffectDomEvent";
import UseMemo from "./features/UseMemo";
function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/lucky-wheel" element={<LuckyWheel />} />
        <Route path="/useEffect" element={<UseEffectDomeEvent />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/useRef" element={< UseRef />} />
        <Route path="/useMemo" element={< UseMemo />} />
        <Route path="/useReducer" element={< UseReducer />} />
        <Route path="/reuseeffect" element={< ReUseEffect />} />
        <Route path="/usecallback" element={< UseCallback />} />

      </Routes>

    </>

  );
}

export default App;
