import { Link } from 'react-router-dom';
import Pokemonball from '../../assets/pokemonball.png';
import Forest from '../../assets/forest.png';
import Beach from '../../assets/beach.png';
import Volcano from '../../assets/volcano.png';

const places = [
  {
    image: Forest,
    name: 'forest',
    color: 'text-green-500',
  },
  {
    image: Beach,
    name: 'beach',
    color: 'text-blue-500',
  },
  {
    image: Volcano,
    name: 'volcano',
    color: 'text-red-500',
  },
];

const Home = () => {
  return (
    <div className='md:container md:mx-auto mt-5'>
      <div className='flex justify-between'>
        <div className='text-2xl font-bold font-mono text-red-400 self-center'>
          <h2>Choose an area to explore...</h2>
        </div>
        <Link
          to='collections'
          className='flex button bg-white border-white rounded-full px-2'
        >
          <img src={Pokemonball} alt='pokemonball' width={60} />
          <p className='text-lg underline font-bold font-mono text-black self-center'>
            My Collections &gt;
          </p>
        </Link>
      </div>
      <div className='flex justify-between items-center mt-[100px] gap-2 '>
        {places.map((p) => (
          <Link key={p.name} to={`explore/${p.name}`}>
            <div
              key={p.name}
              className='h-[400px] w-[300px] flex justify-center items-center flex-col p-2 text-center border-gray-200 border-8 rounded-2xl cursor-pointer hover:scale-110 transition-all'
            >
              <img src={p.image} alt='pokemonball' className='w-[200px]' />
              <p className={`mt-3 ${p.color} font-mono text-xl capitalize`}>
                The {p.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
