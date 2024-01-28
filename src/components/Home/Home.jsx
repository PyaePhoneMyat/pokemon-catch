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
    <div className='sm:container sm:mx-auto mt-5'>
      <div className='sm:flex justify-between text-center'>
        <div className='md:text-2xl text-xl font-bold font-mono text-red-400 self-center'>
          <h2>Choose an area to explore...</h2>
        </div>
        <Link to='collections'>
          <div className='flex justify-center cursor-pointer bg-white border-white rounded-full px-2 sm:mt-0 mt-4'>
            <img src={Pokemonball} alt='pokemonball' width={30} />
            <p className='md:text-lg text-sm underline font-bold font-mono text-black self-center'>
              My Collections &gt;
            </p>
          </div>
        </Link>
      </div>
      <div className='flex md:flex-row flex-col justify-between items-center md:mt-[100px] mt-[30px] md:gap-2 gap-4 '>
        {places.map((p) => (
          <Link key={p.name} to={`explore/${p.name}`}>
            <div
              key={p.name}
              className='md:h-[400px] h-[250px] md:w-[300px] w-[200px] flex justify-center items-center flex-col p-2 text-center border-gray-200 border-8 rounded-2xl cursor-pointer hover:scale-110 transition-all'
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
