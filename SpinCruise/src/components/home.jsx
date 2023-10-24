import '../css/home.css'
function Main() {
    return (
      <div className="main-container">
        <div className="banner">
          <div className="banner-text">
            <h1>Our bikes in Poland</h1>
            <p>Are you looking for a bike that you can buy or rent in Poland? Choose a Swapfiets subscription instead. In our store you can choose between Dutch bikes or electric bikes for unisex, women or men.</p>
          </div>
        </div>
        <div className="bikes-list">
          <div className="container">
            <div className="bikes-nav">
              <ul>
                <li>
                  <a href="All">All</a> 
                  <div className='line'></div>
                </li>
                <li>
                  <a href="E-biles">E-bikes</a> 
                  <div className="line"></div>
                </li>
                <li>
                  <a href="City bikes">City bikes</a>
                  <div className="line"></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Main;