// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
function Card({newName, about, imgURL, btnTxt = 'Read'}) {
  return (
    <div className="w-[300px] rounded-md border">
        <img
            src={imgURL}
            alt="Laptop"
            className="h-[200px] w-full rounded-md object-cover"
        />
        <div className="p-4">
            <h1 className="text-lg font-semibold">About {newName}</h1>
            <hr className='border-2 border-amber-500 hover:border-purple-500 drop-shadow-xl mt-3'/>
            <p className="mt-3 text-sm text-black-600">
            {about}
            </p>
            <button
            type="button"
            className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
            {btnTxt}
            </button>
        </div>
    </div>

  )
}

export default Card