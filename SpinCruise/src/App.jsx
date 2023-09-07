import ReactDOM from 'react-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import daySunny from './assets/banner.jpg'


function App() {

  return (
    <>
      <div className="nav bg-light d-flex justify-content-between align-items-center">
        <h1 className='text-info' >SpinCruise</h1>
      </div>
      <div className=" container container-fluid">
        <img src={daySunny} className="img-fluid" alt="..."/> 
      </div>
    </>
  )
}

export default App
