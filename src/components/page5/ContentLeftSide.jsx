

const ContentLeftSide = () => {
  return (
    <>
       {/* Left side  */}
        <div className="relative w-1/2 text-left">

           {/* Floating Card  */}
          <div className="absolute -bottom-0 left-0 w-[260px] bg-blue-600 text-white rounded-2xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
            <h2 className="text-4xl font-semibold mb-6">This Sunday</h2>

            <div className="space-y-6 text-sm leading-relaxed text-white/80">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <h4 className='text-right font-bold mt-8'>-Dr.Smith david</h4>
          </div>

        </div>
        </>
  )
}

export default ContentLeftSide
