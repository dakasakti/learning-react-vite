import { Link } from "react-router-dom";
function App() {
  return (
    <>
      <div className="container">
        <div className="mt-2">
          <ul className="list-group">
            <Link to="/">
              <li className="list-group-item active">Home</li>
            </Link>
            <Link to="/cities">
              <li className="list-group-item">List</li>
            </Link>
            <Link to="/alert">
              <li className="list-group-item">Alert</li>
            </Link>
            <Link to="/carts">
              <li className="list-group-item">Carts</li>
            </Link>
            <Link to="/material">
              <li className="list-group-item">Material</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
