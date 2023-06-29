import React from 'react'
import { useSearchParams } from 'react-router-dom';
import { Card } from '../components'
import { useFetch } from '../Hooks/useFetch';

export const Search = ({apiPath}) => {

  const [searchParamas] =useSearchParams();
  const queryTerm = searchParamas.get("q");
  console.log(queryTerm)
  // http://localhost:3000/search?q=avatar

  const {data: movies} = useFetch(apiPath, queryTerm)



  return (
    <main>
      

      <p className=' text-3xl text-gray-700 dark:text-white'>{movies.length ===0? `No results found for ${queryTerm}` :`Results for ${queryTerm}`}</p>
      
      <section className=' max-w-7xl mx-auto py-16 flex flex-wrap'>

       
        <div className='w-[100%] flex flex-wrap'>

          {movies.map((movie)=>(
               <Card key={movie.id} movie={movie} />
          ))}

       
     
        </div>
    
     
     
     
      </section>

    </main>
  )
}
