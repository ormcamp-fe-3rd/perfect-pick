import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <Link to={'/'}>
        <h1>PERFECT PICK</h1>
      </Link>

      <nav>
        <ul>
          <li>
            <a href="">TOP10</a>
          </li>
          <li>
            <a href="">Mobile</a>
          </li>
          <li>
            <a href="">Tablet</a>
          </li>
          <li>
            <a href="">Notebook</a>
          </li>
          <li>
            <a href="">Wearable</a>
          </li>
        </ul>
      </nav>

      <ul>
        <li>
          <a href="">
            <img src="../images/header/ico-search.svg" alt="" />
          </a>
        </li>
      </ul>
    </header>
  );
}
