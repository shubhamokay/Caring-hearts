import React from 'react'

const Card2 = ({children, imgSrc, ...props}) => {
  return (
    <div {...props} className='relative max-w-md overflow-hidden
    rounded-xl shadow-2xl group my-20 mx-5 z-[-1]'>
        <div>
            <img
            src={imgSrc}
            alt='abc'
            className='transition-transform 
            group-hover:scale-110 duration-200'/>
        </div>
        <div className='p-4 text-black'>{children}</div>
      
    </div>
  )
}

export default Card2
