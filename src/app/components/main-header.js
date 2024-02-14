import Link from 'next/link';
import logoImg from '@/app/assets/logo.png'

export default function MainHeader(){
    return(
        <header>
            <Link href="/">
                <img src={logoImg.src} alt="Food logo" />
                NextLevel Food
            </Link>

            <nav>
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
    )
}