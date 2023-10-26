import React, { useState } from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Carousel({slides, children}) {
    let [current, setCurrent] = useState(0);

    let previousSlide = () => {
        if (current === 0) setCurrent(slides.length -1);
        else setCurrent(current - 1);
    }

    let nextSlide = () => {
        if (current === slides.length - 1) setCurrent(0);
        else setCurrent(current + 1);
    }



  return (
    <div className="overflow-hidden relative">
      <div className={`flex transition ease-out duration-40`}
      style={{
        transform : `translateX(-${current * 100}%)`,
      }}>




      {slides.map((s) => {
        return <><img src={s} alt='abc' /><div className='p-4 text-black'>{children}</div></>
      })}
      </div>

      <div className="absolute top-0 h-full w-full
       justify-between flex items-center text-white px-10 ">
        <button onClick={previousSlide}>
            <ArrowBackIosNewIcon fontSize='large' className='bg-white text-black rounded-full px-2'/>
        </button>
        <button onClick={nextSlide}>
            <ArrowForwardIosIcon fontSize='large' className='bg-white text-black rounded-full px-2'/>
        </button>
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-2 w-full">
        {slides.map((s,i) => {
            return (
                <div
                onClick={() => {
                    setCurrent(i)
                }}
                key={"circle" + i}
                className={`rounded-full w-3 h-3 cursor-pointer
                 ${i===current ? "bg-white" : "bg-gray-500" }`}>
                 </div>
            )
        })}
      </div>



    </div>
  )
}

export default Carousel
