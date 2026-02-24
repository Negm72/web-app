import React from 'react'

function Card({value,but}) {
  return (
    <div key={value.id} className="group relative bg-white border border-gray-200 rounded-2xl p-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <h1 className='text-red-500'>{value.name}</h1>
                <h2>{value.price}</h2>
                <img style={{width:200,height:200}} src={value.image} alt=""/>
                 <p>{value.description}</p>
                 {but%2==0&&<button className='bg-amber-600 p-4 rounded-2xl'>add to cart</button>}
                 </div>
  )
}

export default Card