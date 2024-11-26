import LogoIMG from '@/assets/png/digifly-logo.png'
import Image from 'next/image'
import { LanguageSwitcher, NavLinks } from './'

const NavBar = () => {
  return (
    <nav className='w-full absolute top-0 flex justify-between px-10 py-6'>
      <Image src={LogoIMG} alt='Digi-Fly Logo' height={40} priority />
      <NavLinks />
      <LanguageSwitcher />
    </nav>
  )
}

export default NavBar
