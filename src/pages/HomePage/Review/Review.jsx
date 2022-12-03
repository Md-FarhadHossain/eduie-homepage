import React from 'react'
import person4 from '../../../assets/person4.png'


const Review = () => {
  return (
    <section className="container mx-auto px-4 lg:px-0 py-52">
        <h1 className="lg:text-4xl text-3xl text-semibold lg:w-[60%]  w-full leading-snug">“Fast and outstanding resutls. Edie understands their customer’s needs. They have a young and talented team.”    </h1>
        <div className='flex items-center gap-5 mt-12'>
            <div><img className='w-20 rounded-2xl' src={person4} alt="person" /></div>
            <div className='grid gap-2'>
                <h2 className="text-xl font-semibold">Carlos Tran</h2>
                <p>The Decorate Gatsby</p>
            </div>
        </div>
    </section>
  )
}

export default Review