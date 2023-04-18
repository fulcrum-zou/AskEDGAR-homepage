import "./navBar.css";

export default function NavBar() {
  return (
    <nav className="navBar">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="https://askedgar.ghost.io/" target="_blank">Blogs</a>
        </li>
        <li>
          <a href="/team">Team</a>
        </li>
      </ul>
    </nav>
  );
}
