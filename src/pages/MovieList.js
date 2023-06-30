import { Card } from '../components'
import { useFetch } from '../Hooks/useFetch';

export const MovieList = ({apiPath}) => {

 
  const {data: movies} = useFetch(apiPath)
  
  return (
    <main className='pt-[50px]'>

      <section className=' max-w-7xl mx-auto py-16 flex flex-wrap'>

       
        <div className='w-[100%] flex other:justify-evenly  flex-wrap'>

          {movies.map((movie)=>(
               <Card key={movie.id} movie={movie} />
          ))}

       
     
        </div>
    
     
     
     
      </section>

    </main>
  )
}
