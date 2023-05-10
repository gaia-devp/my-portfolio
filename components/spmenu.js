import Link from 'next/link';

export default function Spmenu() {
  return (
    <div id='sp_menu' className='sp_only'>
      <ul>
        <li><Link className="line" href="/"><span><img src="img/top_menu.png" alt="top_menu" /></span><span>top</span></Link></li>
        <li><Link className="line" href="/work"><span><img src="img/work_menu.png" alt="work_menu" /></span><span>work</span></Link></li>
        <li><Link className="line" href="/note"><span><img src="img/note_menu.png" alt="note_menu" /></span><span>note</span></Link></li>
        <li><Link className="line" href="/about"><span><img src="img/about_menu.png" alt="about_menu" /></span><span>about</span></Link></li>
        <li><Link className="line" href="/contact"><span><img src="img/contact_menu.png" alt="contact_menu" /></span><span>contact</span></Link></li>
      </ul>
    </div>
  );
}