import img from '../../assets/logo.png'

const HeaderLogo = () => {
  return (
    <div className=' overflow-y-hidden relative left-[-4.5rem] top-0'>
        <img src={img} alt="logo" className='w-68 object-contain' />
      </div>
  )
}

export default HeaderLogo
