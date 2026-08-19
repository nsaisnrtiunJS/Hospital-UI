import ContentLeftSide from "./ContentLeftSide"
import ContentRightSide from './ContentRightSide'

const Page5Content = () => {
  return (
    <>
       {/* Content  */}
      <div className='relative z-10 w-full flex flex-row justify-center items-center px-16 '>

        <ContentLeftSide />
        <ContentRightSide />
    

      </div>
      </>
  )
}

export default Page5Content
