import Page6Cards from './Page6Cards'

import img1 from '../../assets/info1.jpg'
import img2 from '../../assets/info2.jpg'
import img3 from '../../assets/info3.jpg'

const Page6 = () => {

  const cardInfo=[
        {
            img: img1,
            notificationMsg: 'Neurology',
            date: '22 June',
            msg: '16',
            views: '1.6k',
            heading: 'Depression x-ray Brain on: Neurology',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda quas totam ducimus ullam ab distinctio maxime, officiis sit quod odio.'
        },

        {
            img: img2,
            notificationMsg: 'Health',
            date: '16 Nov',
            msg: '22',
            views: '2.1k',
            heading: 'How to Decrease the lavel of adipose in the body?',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda quas totam ducimus ullam ab distinctio maxime, officiis sit quod odio.'
        },

        {
            img: img3,
            notificationMsg: 'Information',
            date: '26 Jan',
            msg: '31',
            views: '4.1k',
            heading: 'Covid-19 Vaccines and People with Chronic Conditions',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda quas totam ducimus ullam ab distinctio maxime, officiis sit quod odio.'
        }
    ]

  return (
    <div className='h-screen w-full bg-white mt-12'>
      <div className='px-16 py-4 flex flex-col'>
        <h2 className="text-4xl font-semibold">Our recent <span className="text-blue-600">Information</span> & <span className="text-blue-600">Articles</span></h2>

        <Page6Cards data={cardInfo}  />
       

      </div>
    </div>
  )
}

export default Page6
