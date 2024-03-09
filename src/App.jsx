import './styling/App.css';
import Navbar from './components/Navbar';
import beachImage from './assets/beach.jpg';

function App() {

  return (
    <>
      <Navbar />
      <div className='mainContainer'>
        <h1>Welcome Home</h1>
        <img src={beachImage} alt="beach" width="auto" height="400" />
      </div>
    </>
  )
}

export default App
