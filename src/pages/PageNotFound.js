import React from 'react'
import temp from '../assets/temp.jpg'
import { Link } from "react-router-dom"


export const PageNotFound = () => {
  return (
    <main className='pt-[150px]'>
      <section className='flex flex-col justify-center px-2'>

        <div className='flex flex-col items-center my-4'>

        <p className='text-7xl font-bold my-10 dark:text-white text-gray-700 '>404, Oops!</p>

        <div>
        <img src={temp} alt="" className='max-w-lg' />
        </div>

        </div>
        <div className='flex justify-center w-[100%] items-center my-4 '>
          <Link>
          <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Back to Cinemate</button>
          </Link>
        </div>

      </section>
    </main>
  )
}
