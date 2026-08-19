import HeaderLogo from './HeaderLogo'
import HeaderLinks from './HeaderLinks'
import HeaderSignUp from './HeaderSignUp'

const Header = () => {
  return (
    <div className=' h-16 px-12 flex justify-between items-center overflow-y-hidden relative'>

      <HeaderLogo />
      <HeaderLinks />
      <HeaderSignUp />

      
    </div>
  )
}

export default Header
