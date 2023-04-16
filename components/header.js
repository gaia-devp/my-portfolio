import Link from 'next/link';
import Hamburger from './hamburger';

export default function Header() {
  return (
    <header>
      <div className='pc-menu'>
        <h1><Link href="/"><img src="img/300x200.png" alt="logo" /></Link></h1>
        <nav>
          <ul>
            <li><Link href="/">top</Link></li>
            <li><Link href="/work">work</Link></li>
            <li><Link href="/note">note</Link></li>
            <li><Link href="/about">about</Link></li>
            <li><Link href="/contact">contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}