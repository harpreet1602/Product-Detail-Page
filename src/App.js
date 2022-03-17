import Sidebar from './Components/Sidebar';
import MainPage from './Components/MainPage';
import './App.css';
function App() {
  return (
    <div className="App">
        <div className="appcontain">
          <Sidebar/>
          <MainPage/>
          </div>
    </div>
  );
}

export default App;
