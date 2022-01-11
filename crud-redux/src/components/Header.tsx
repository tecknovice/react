import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="ui menu">
      <Link className="item" to="list">
        List Item
      </Link>
      <Link className="item" to="create">
        Create Item
      </Link>
    </div>
  );
};
export default Header;
