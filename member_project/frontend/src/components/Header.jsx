import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header">
        <Link to="/">Home</Link>
        <Link to="/save">회원가입</Link>
        <Link to="/list">회원목록</Link>
      </div>
    </>
  );
};
export default Header;
