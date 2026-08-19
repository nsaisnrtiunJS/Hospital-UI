import Page5Content from "./Page5Content"

import img from '../../assets/background.jpg'

const Page5 = () => {
  return (
      <section className='relative h-screen w-full mt-32 bg-cover bg-center flex justify-center items-center' style={{backgroundImage:`url(${img})`}}>

         {/* Overlay  */}
      <div className='absolute inset-0 bg-blue-400/50'></div>

      <Page5Content />

      </section>
  )
}

export default Page5
