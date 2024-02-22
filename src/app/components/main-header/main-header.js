import Link from 'next/link';
import logoImg from '@/app/assets/logo.png'
import Image from 'next/image';
import MainHeaderBackground from './main-header-background';
import NavLink from './nav-link';
import cssClasses from './main-header.module.css';

export default function MainHeader() {
  // console.log('Executing');

  return (
    <>
      <MainHeaderBackground />
      <header className={cssClasses.header}>
        <Link className={cssClasses.logo} href="/">
          <Image src={logoImg} alt="Food logo" priority />
          NextLevel Food
        </Link>

        <nav className={cssClasses.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
            <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}