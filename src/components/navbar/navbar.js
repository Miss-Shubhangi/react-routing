
import "./navbar.css" 
import { Link } from "react-router-dom"
function Navbar() {
  return (
    <div className="nav-container">
        <Link to="/" class="nav-item">Home</Link>
        <Link to="/category" class="nav-item">Category</Link>
        <Link to="/contact" class="nav-item">Contact</Link>
        <Link to="/about" class="nav-item">About</Link>
       
       
      

    </div>
  )
}

export default Navbar