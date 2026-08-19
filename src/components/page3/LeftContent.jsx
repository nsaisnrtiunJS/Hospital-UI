import img from '../../assets/doctor1-removebg-preview.png'

const LeftContent = () => {
  return (
    <div className='h-full w-5/11'>
        <div className='relative h-full w-[400px] bg-gradient-to-b from-bg-blue-200 to-blue-300 rounded-full flex justify-center items-center overflow-hidden'>
            <img src={img} alt="Doctor" className='h-full w-full object-contain transition-all duration-300 hover:scale-105' />
        </div>
      
    </div>
  )
}

export default LeftContent
