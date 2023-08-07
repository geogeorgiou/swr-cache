import { Link } from "react-router-dom";

export const Navigator = () => {
  return (
    <div className="navigator">
      <Link to="/">Home</Link>
      <Link to="/data">Data</Link>
    </div>
  );
};
