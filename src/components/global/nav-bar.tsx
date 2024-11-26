import LogoIMG from '@/assets/png/digifly-logo.png'
import Image from 'next/image'
import { LanguageSwitcher, NavLinks } from './'

const NavBar = () => {
  return (
    <div className='fixed top-0 z-50 w-full flex justify-between px-10 py-6'>
      <Image src={LogoIMG} alt='Digi-Fly Logo' height={40} priority />
      <NavLinks />
      <LanguageSwitcher />
    </div>
  )
}

export default NavBar
