import './App.css';
import SideBar from './components/SideBar';
import Main from './components/Main';

function App() {
  
  return (
    <div id='app' style={({height: '100vh'}, {display: 'flex' })}>
      <SideBar />
      <Main />
    </div>
  );
}

export default App;
