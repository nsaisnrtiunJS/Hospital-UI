
const ExploreCardSection = (props) => {
    return (
        <div className='bg-white h-full w-full flex flex-col justify-center items-center text-center gap-2 py-4 px-1 rounded-2xl transition-all duration-300 hover:scale-110'>
            <div className="bg-gray-200 h-12 w-12 rounded-full flex items-center justify-center">
                <img src={props.user} alt={props.title} className='h-8 w-8' />
            </div>
            <h3 className='text-xl font-semibold text-gray-700'> {props.title} </h3>
            <small className='text-gray-600'> {props.description} </small>
        </div>
    )
}

export default ExploreCardSection
