import Header from './Header'
import Page1Hero from './Page1Hero'
import Page1Bottom from './Page1Bottom'

const Page1 = () => {
  return (
    <div className='bg-gray-100 h-screen w-full relative'>
      <Header />
      <Page1Hero />
      <Page1Bottom />
    </div>
  )
}

export default Page1
