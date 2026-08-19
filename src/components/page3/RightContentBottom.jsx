

const RightContentBottom = () => {
  return (
    <div className='grid grid-cols-2 mt-10 gap-6'>
        <div className='flex gap-4 w-[150px] py-1 rounded-lg shadow shadow-black pl-1 text-blue-500 justify-start items-center transition-all duration-300 hover:scale-110'>
            <input type="radio" name="mode" className='appearance-none relative h-4 w-4 border-2 border-blue-500 checked:bg-blue-500 checked:border-blue-500 rounded-full' />
            <div className='bg-gradient-to-b from-white to-blue-300 py-1 px-2 rounded-full'><i className="ri-message-2-line"></i></div>
            <p>Chat</p>
        </div>

        <div className='flex gap-4 w-[150px] py-1 rounded-lg shadow shadow-black pl-1 justify-start items-center text-blue-500 transition-all duration-300 hover:scale-110'>
            <input type="radio" name="mode" className='appearance-none relative h-4 w-4 border-2 border-blue-500 checked:bg-blue-500 checked:border-blue-500 rounded-full'  />
            <div className='bg-gradient-to-b from-white to-blue-300 py-1 px-2 rounded-full'><i className="ri-chat-search-fill"></i></div>
            <p>Query</p>
        </div>

        <div className='flex gap-4 w-[150px] py-1 rounded-lg shadow shadow-black pl-1 justify-start items-center text-blue-500 transition-all duration-300 hover:scale-110'>
            <input type="radio" name="mode" className='appearance-none relative h-4 w-4 border-2 border-blue-500 checked:bg-blue-500 checked:border-blue-500 rounded-full'  />
            <div className='bg-gradient-to-b from-white to-blue-300 py-1 px-2 rounded-full'><i className="ri-phone-fill"></i></div>
            <p>Call</p>
        </div>

        <div className='flex gap-4 w-[150px] py-1 rounded-lg shadow shadow-black pl-1 justify-start items-center text-blue-500 transition-all duration-300 hover:scale-110'>
            <input type="radio" name="mode" className='appearance-none relative h-4 w-4 border-2 border-blue-500 checked:bg-blue-500 checked:border-blue-500 rounded-full'  />
            <div className='bg-gradient-to-b from-white to-blue-300 py-1 px-2 rounded-full'><i className="ri-folder-video-line"></i></div>
            <p>Video</p>
        </div>
      </div>
  )
}

export default RightContentBottom
