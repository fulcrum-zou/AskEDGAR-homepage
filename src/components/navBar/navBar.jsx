import "./navBar.css";

export default function NavBar() {
  return (
    <nav className="navBar">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/blogs">Blogs</a>
        </li>
        <li>
          <a href="/team">Team</a>
        </li>
      </ul>
    </nav>
  );
}
