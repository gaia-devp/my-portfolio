import Link from 'next/link';
import { fallDown as Menu } from "react-burger-menu";

export default function Hamburger(){
  return(
    <Menu right styles={ styles } >
      <Link href="/" className="menu-item" >
        <p>ホームページ</p>
      </Link>

      <Link href="/page-2" className="menu-item" >
        ページ2
        </Link>

        <Link href="/page-3" className="menu-item" >
        ページ3
        </Link>

        <Link href="/page-4" className="menu-item" >
        ページ4
        </Link>
    </Menu>
  )
}

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '30px',
    height: '22px',
    right: '25px',
    top: '20px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '15x',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '300px'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}
