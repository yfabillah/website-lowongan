import './App.css';
import Tugas7 from './components/tugas7';
import Tugas8 from './components/tugas8';
import Tugas9 from './components/tugas9';
import Tugas10 from './components/tugas10';
import Tugas11 from './components/tugas11';
import Tugas12 from './components/tugas12';
import CobaPut from './components/CobaPut';
import CobaAxios from './components/CobaAxios';
import SideEffect from './components/SideEffect';
import CobaDelete from './components/CobaDelete';
import { GlobalProvider } from './context/GlobalContext';

function App() {
  return (
    <GlobalProvider>
      {/* <Tugas7 />
      <Tugas8 name="Yudith" email="yudith@upi.edu" batch="36" />
      <Tugas9 />
      <Tugas10 /> */}
      {/* <Tugas11 /> */}
      <Tugas12 />
      {/* <CobaPut /> */}
      {/* <CobaAxios /> */}
      {/* <SideEffect /> */}
      {/* <CobaDelete /> */}
    </GlobalProvider>
  );
}

export default App;
