import Link from 'next/link'

const Header = () => (
  <header className="custom-header">
    <ul className="custom_ul">
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="/product/1/review/1">
          <a>First Review</a>
        </Link>
      </li>
      <li>
        <Link href="/product/1/review/2">
          <a>Second Review</a>
        </Link>
      </li>
    </ul>
  </header>
)

export default Header