import Image from 'next/image';
import Link from 'next/link';
import Logo from './my logo.png';
import { imageLoader } from 'next/image';
const Navbar = () => {
  return (
    <nav >
    <Image 
      src={Logo}
      alt='Davcodin-logo'
      width={70}
      quality={100}
      placeholder='blur'
      loader={imageLoader}
    />
    <Link href='/'>
    <h1>Davcodin</h1>
    </Link>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
};

export default Navbar;
