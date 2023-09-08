import ReactDOM from 'react-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import daySunny from './assets/banner.jpg'


function App() {

  return (
    <>
      <div className="nav bg-light d-flex justify-content align-items-center">
        <h1 className='text-info' >SpinCruise</h1>
      </div>
      <div className=" container container-xl">
        <img src={daySunny} className="img-fluid" alt="..."/> 
      </div>
      <div className="container-xl">
        <div className="navbar ">
          <ul className="nav container-xl d-flex justify-content-start">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">All</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">E-bikes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">City bikes</a>
            </li>
          </ul>
        </div>
        <div className="container-xl d-flex justify-content-between">
          <div className="card" >
            <img src={daySunny} class="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">From</h5>
              <h5>18.90 per month</h5>
              <div className="d-flex ">
                <div className="d-flex">
                  <ul className=''>
                    <li>Gears</li>
                    <li>Brake</li>
                    <li>Lock</li>
                    <li>Light</li>
                  </ul>
                </div>
                <div className="d-flex">
                  <ul className=''>
                    <li>One speed</li>
                    <li>Roller brake</li>
                    <li>Ring lock + chain lock</li>
                    <li>Hub povered led light</li>
                  </ul>
                </div>
              </div>
              <a href="#">More detailes</a>
            </div>
            <button className="btn btn-primary">hello</button>
          </div>

          <div className="card" >
            <img src={daySunny} class="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">From</h5>
              <h5>18.90 per month</h5>
              <div className="d-flex ">
                <div className="d-flex">
                  <ul className=''>
                    <li>Gears</li>
                    <li>Brake</li>
                    <li>Lock</li>
                    <li>Light</li>
                  </ul>
                </div>
                <div className="d-flex">
                  <ul className=''>
                    <li>One speed</li>
                    <li>Roller brake</li>
                    <li>Ring lock + chain lock</li>
                    <li>Hub povered led light</li>
                  </ul>
                </div>
              </div>
              <a href="#">More detailes</a>
            </div>
            <button className="btn btn-primary">hello</button>
          </div>

          <div className="card" >
            <img src={daySunny} class="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">From</h5>
              <h5>18.90 per month</h5>
              <div className="d-flex ">
                <div className="d-flex">
                  <ul className=''>
                    <li>Gears</li>
                    <li>Brake</li>
                    <li>Lock</li>
                    <li>Light</li>
                  </ul>
                </div>
                <div className="d-flex">
                  <ul className=''>
                    <li>One speed</li>
                    <li>Roller brake</li>
                    <li>Ring lock + chain lock</li>
                    <li>Hub povered led light</li>
                  </ul>
                </div>
              </div>
              <a href="#">More detailes</a>
            </div>
            <button className="btn btn-primary">hello</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
