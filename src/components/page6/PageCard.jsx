import { Mail, CalendarDays } from 'lucide-react';

const PageCard = (props) => {

  return (
    <>
    {/* Card  */}
      <div className='w-[300px] h-[350px] rounded-2xl flex flex-col gap-4 mt-14'>
        
        {/* img area  */}
        <div className="relative w-full h-[200px] rounded-2xl overflow-hidden">
            <img src={props.img} alt="Neurologist" className='w-full h-full rounded-2xl object-cover transition-all duration-300 hover:scale-110' />
            <h5 className='absolute left-0 top-0 bg-[#bb8011] py-1 px-2 w-fit rounded-br-xl text-white font-semibold'>{props.notificationMsg}</h5>

            {/* card info  */}
            <div className='absolute left-0 bottom-8 flex gap-3 bg-white py-2 px-2 w-fit rounded-tr-full rounded-br-full'>
                <div className='flex gap-1 text-blue-500'>
                    <CalendarDays />
                <span> {props.date} </span>
                </div>

                <div className='flex gap-1 text-blue-500'>
                    <Mail />
                    <span> {props.msg} </span>
                </div>

                <div className='flex gap-1 text-blue-500'>
                    <i class="ri-eye-line"></i>
                    <span> {props.views} </span>
                </div>
            </div>
        </div>
        {/* Heading area  */}
        <h4 className='text-xl font-semibold text-gray-800'>
          {props.heading}
        </h4>

        {/* text area  */}
        <p className='text-sm text-gray-600'>
          {props.description}
        </p>   

        </div>
    </>
  )
}

export default PageCard
