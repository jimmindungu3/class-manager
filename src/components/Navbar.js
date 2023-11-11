import { Link } from "react-router-dom";

function Navbar() {
  return (
  <nav>
    <Link to="/">Home</Link>  
    <Link to="RegisterStudent">Register Student</Link> 
    <Link to="UploadMarks">Upload Marks</Link>
  </nav>
  )
}

export default Navbar;
