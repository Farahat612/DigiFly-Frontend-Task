import LogoIMG from '@/assets/png/digifly-logo.png'
import Image from 'next/image'
import { LanguageSwitcher, NavLinks } from './'

const NavBar = () => {
  return (
    <nav className='w-full absolute top-0 flex justify-between px-6 md:px-10 lg:px-16 py-6'>
      <div className='w-full max-w-screen-2xl mx-auto flex justify-between'>
        <Image src={LogoIMG} alt='Digi-Fly Logo' height={40} priority />
        <NavLinks />
        <LanguageSwitcher />
      </div>
    </nav>
  )
}

export default NavBar
