import ExploreCardSection from './ExploreCardSection'

const ExploreCards = (props) => {
    return (
        <div className='px-12 py-12 flex flex-col gap-12'>
            <h2 className='text-3xl font-bold text-blue-600'>Explore By</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>

                {props.users.map((user) => {
                    return <ExploreCardSection user={user.img} title={user.title} description={user.description} />
                })}
                
            </div>
        </div>
    )
}

export default ExploreCards
