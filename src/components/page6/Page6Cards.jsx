import PageCard from './PageCard'

const Page6Cards = (props) => {
  return (

    
    <div className='w-full grid grid-cols-3 place-items-center'>

      {props.data.map((info, index)=>{

          {/* Card  */}
        return  <PageCard key={index} img={info.img} color={info.color} object={info.object} notificationMsg={info.notificationMsg} date={info.date} msg={info.msg} views={info.views} heading={info.heading} description={info.description} />

      })}
        
    </div>
  )
}

export default Page6Cards
