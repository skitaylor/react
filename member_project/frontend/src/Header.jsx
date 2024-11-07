import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <Link to="/Save">Save</Link>
      <br></br>
      <Link to="/List">List</Link>
    </>
  );
};
export default Header;
