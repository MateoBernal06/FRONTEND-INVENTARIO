import { Link, Outlet } from "react-router-dom";

export const Dashboard = () => {
  return (
    <>
      <h1>DashBoard</h1>
      <ol>
        <li>
          <Link to={"products"}>Products</Link>
        </li>
        <li>
          <Link to={"categories"}>Categories</Link>
        </li>
        <li>
          <Link to={"tables"}>Tables</Link>
        </li>
      </ol>

      <Outlet/>
    </>
  );
};
