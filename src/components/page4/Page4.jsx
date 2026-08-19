import Page4Cards from './Page4Cards'

import img1 from '../../assets/tooth.png'
import img2 from '../../assets/brain.png'
import img3 from '../../assets/anti-age.png'
import img4 from '../../assets/heart.png'
import img5 from '../../assets/nose.png'
import img6 from '../../assets/first-aid-kit.png'
import img7 from '../../assets/ribbon.png'
import img8 from '../../assets/urology.png'
import img9 from '../../assets/child.png'
import img10 from '../../assets/coronavirus.png'

const Page4 = () => {

  const groups = [
    {
      img: img1,
      title: 'Dentistry',
      bgColor:'#0c88a7'
    },

    {
      img: img2,
      title: 'Neurology',
      bgColor: '#0ca764'
    },

    {
      img: img3,
      title: 'Dermatology',
      bgColor: '#d76bea'
    },

    {
      img: img4,
      title: 'Internal Medicine',
      bgColor: '#cb6529'
    },

    {
      img: img5,
      title: 'Otolaryngology',
      bgColor: '#3a61ff'
    },

    {
      img: img6,
      title: 'General Medicine',
      bgColor: '#af6011'
    },

    {
      img: img7,
      title: 'HIV/AIDS',
      bgColor: '#ff0000'
    },

    {
      img: img8,
      title: 'Urology',
      bgColor: '#021a4e'
    },

    {
      img: img9,
      title: 'Pediatrics',
      bgColor: '#b91ed4'
    },

    {
      img: img10,
      title: 'Infection Disease',
      bgColor: '#35a958'
    },
  ]

  return (
    <div className='h-screen w-full shadow-4xl shadow-blue-100'>
      <div className='h-full px-12 py-16 bg-gradient-to-r from-blue-200 to-blue-100 flex flex-col items-center gap-10'>
        <h2 className='text-3xl font-bold text-gray-700'>Our Consulting <span className='text-blue-600'>Specialists</span></h2>

        <div className='w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 justify-items-center items-center'>

          {groups.map(function (card) {

            return <Page4Cards img={card.img} title={card.title} bgColor={card.bgColor} />

          })}

        </div>

      </div>
    </div>
  )
}

export default Page4
