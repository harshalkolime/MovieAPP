import { Link } from 'react-router-dom';
import temp from "../assets/temp.jpg";

export const Card = ({movie}) => {

  const {id, original_title, overview, poster_path } = movie;
  const image= poster_path? `https://image.tmdb.org/t/p/w500/${poster_path}` :  temp;

  return (
    <div>
         <div className=" m-3 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link to={`/movies/${id}`}>
              <img className="rounded-t-lg" src={image} alt="" />
            </Link>
            <div className="p-5">
              <Link to={`/movies/${id}`}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{original_title}</h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{overview}</p>
         
            </div>
          </div>


    </div>
  )
}