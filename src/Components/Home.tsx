import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <Link className="btn btn-warning btn-lg me-2" to="/toggle">
        Toggle
      </Link>
      <Link className="btn btn-warning btn-lg me-2" to="/toggleSwitch">
        ToggleSwitch
      </Link>
      <Link className="btn btn-warning btn-lg me-2" to="/postList">
        Post List
      </Link>
      <Link className="btn btn-warning btn-lg me-2" to="/posts-search">
        Post Search
      </Link>
      <Link className="btn btn-warning btn-lg me-2" to="/products-search">
        Product Search
      </Link>
    </main>
  );
}
export default Home;