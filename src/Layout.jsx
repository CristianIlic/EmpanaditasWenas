import { Link, Outlet } from "react-router";

export default function Layout() {
  return (
    <div className="layout">
      <nav className="navbar">
        <Link className="navbar-logo" to={"/"}>
          <img className="logo" src="/logo.png" />
        </Link>
        <ul>
          <Link to={"/recetas"}>
            <li>Recetas</li>
          </Link>
          <Link to={"/datazos"}>
            <li>Datazos</li>
          </Link>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
