

const Page4Cards = (props) => {

    return (
        <>
            <div className='bg-white py-8 px-2 rounded-lg h-[190px] w-[200px] flex flex-col items-center gap-4 transition-all duration-300 hover:scale-110 shadow shadow-gray-500'>
                <div style={{backgroundColor: props.bgColor}} className='text-white p-2 rounded-full'>
                    <img src={props.img} alt="Card" className='w-8 h-8 brightness-0 invert ' />
                </div>
                <h4 className='text-lg font-bold text-gray-600'>{props.title}</h4>
            </div>
        </>
    )
}

export default Page4Cards
