import { Link, useNavigate, useParams } from 'react-router-dom';
import Pokemonball from '../../assets/pokemonball.png';
import Arrowsign from '../../assets/sign.jpg';
// import Pokemon from '../../assets/scyther.png';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAppStore } from '../Store/useAppStore';

const ExplorePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const goToCollection = () => {
    navigate('/collections');
  };

  const [isFindMore, setIsFindMore] = useState(false);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getRandomPokemon = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    return data[randomIndex];
  };
  const [currentPokemon, setCurrentPokemon] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(
          `http://localhost:1337/api/pokemons?filters[type]=${
            id === 'forest' ? 'grass' : id === 'beach' ? 'water' : 'fire'
          }`
        );
        setData(data.data);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setCurrentPokemon(getRandomPokemon());

    return () => setIsFindMore(false);
  }, [data, isFindMore]);

  const { box, addToBox } = useAppStore();
  console.log('In the box', box);

  const catchPokemon = () => {
    addToBox({
      name: currentPokemon?.attributes?.name,
      imageUrl: currentPokemon?.attributes?.imageUrl,
      type: currentPokemon?.attributes?.type,
    });
  };
  return (
    <div
      className={`h-screen p-6 ${
        id === 'forest'
          ? 'bg-green-500'
          : id === 'beach'
          ? 'bg-blue-500'
          : 'bg-red-500'
      }`}
    >
      <div className='flex justify-between'>
        <Link
          to='/'
          className='flex button bg-white border-white rounded-full overflow-hidden px-2'
        >
          <p className='text-lg underline font-bold font-mono text-black self-center'>
            &lt;Change Area
          </p>
          <img
            src={Arrowsign}
            alt='pokemonball'
            width={50}
            className='bg-no-repeat'
          />
        </Link>
        <div
          onClick={goToCollection}
          className='flex button bg-white border-white rounded-full px-2 cursor-pointer'
        >
          <img src={Pokemonball} alt='pokemonball' width={60} />
          <p className='text-lg underline font-bold font-mono text-black self-center'>
            My Collections &gt;
          </p>
        </div>
      </div>
      {isLoading ? (
        <p className='text-white text-2xl'>Loading...</p>
      ) : (
        <div className='flex justify-center items-center flex-col'>
          <img
            src={currentPokemon?.attributes?.imageUrl}
            alt={currentPokemon?.attributes?.name}
            className='w-[300px] '
          />
          <p className='text-[50px] text-white font-mono text-center'>
            A wild{' '}
            <span className='font-extrabold'>
              {currentPokemon?.attributes?.name}
            </span>{' '}
            appeared!
          </p>
        </div>
      )}

      <div className='flex justify-center mt-5'>
        <button
          className='button font-mono font-bold hover:bg-green-600 transition-all duration-300 bg-green-200 border-white rounded-full px-8 py-5 text-2xl mr-11'
          onClick={catchPokemon}
        >
          Catch It!
        </button>
        <button
          className='button font-mono font-bold hover:bg-pink-300 transition-all duration-300 bg-red-200 border-white rounded-full px-8 py-5 text-2xl'
          onClick={() => {
            setIsFindMore(true);
            getRandomPokemon();
          }}
        >
          Find More
        </button>
      </div>
    </div>
  );
};

export default ExplorePage;
