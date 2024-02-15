import Link from 'next/link';
import logoImg from '@/app/assets/logo.png'
import cssClasses from './main-header.module.css';
import Image from 'next/image';
import MainHeaderBackground from './main-header-background';

export default function MainHeader() {
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
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
              <Link href="/community">Foodies Communities</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}