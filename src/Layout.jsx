import { Link, Outlet } from "react-router";

export default function Layout() {
  function handleClick() {
    window.scrollTo(0, 0);
  }

  return (
    <div className="layout">
      <nav className="navbar">
        <Link className="navbar-logo" to={"/"} onClick={handleClick}>
          <img className="logo" src="/images/logo.png" />
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
      <div className="scrollToTop" onClick={handleClick}>
        ↑
      </div>
    </div>
  );
}
