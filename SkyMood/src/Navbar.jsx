import { WiDaySunny } from 'weather-icons-react';

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="title">
            <h1>Sky</h1>
            <h1>Mood</h1>
        </div>
        <div className="links">
          <WiDaySunny size={20}/>
          <a href="/">Weather</a>
          <a href="/Cities">Cities</a>
          <a href="/Maop">Map</a>
          <a href="Settings">Settings</a>
        </div>
      </nav>
    );
}
 
export default Navbar;