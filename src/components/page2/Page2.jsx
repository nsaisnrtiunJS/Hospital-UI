import ExploreCards from './ExploreCards'

import img1 from '../../assets/doctor.png'
import img2 from '../../assets/clinic.png'
import img3 from '../../assets/lab.png'
import img4 from '../../assets/ambulance.png'
import img5 from '../../assets/health-insurance.png'

const page2 = () => {

    const users = [
        {
            img: img1,
            title: 'Doctors',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
        },

        {
            img: img2,
            title: 'Clinics',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
        },

        {
            img: img3,
            title: 'Labs',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
        },

        {
            img: img4,
            title: 'Ambulances',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
        },

        {
            img: img5,
            title: 'Insurance',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
        },
    ]

    return (
        <div className='bg-blue-100 h-92 w-full'>

            <ExploreCards users={users} />

        </div>
    )
}

export default page2
