import { Link } from 'react-router-dom';
import Pokemonball from '../../assets/pokemonball.png';
import Professor from '../../assets/professor.png';
import SearchBar from './SearchBar';
import { useAppStore } from '../Store/useAppStore';
import { useState } from 'react';

const CollectionPage = () => {
  const { box } = useAppStore();
  console.log('box', box);

  const [filteredData, setFilterData] = useState(box);
  const handleSearch = (inputValue, selectedType) => {
    const filteredData = box.filter((pokemon) => {
      const nameMatches = pokemon.name
        .toLowerCase()
        .includes(inputValue.toLowerCase());
      const typeMatches = selectedType === '' || pokemon.type === selectedType;
      return nameMatches && typeMatches;
    });

    setFilterData(filteredData);
  };

  const handleClear = () => setFilterData(box);

  return (
    <div className='h-screen p-6  bg-pink-100'>
      <div className='flex justify-between'>
        <Link
          to='/'
          className='flex button bg-white border-white rounded-full overflow-hidden px-2'
        >
          <p className='ss:text-lg text-sm underline font-bold font-mono text-black self-center'>
            &lt;Back To Home
          </p>
        </Link>
        <div className='flex bg-white border-white rounded-full px-2'>
          <img src={Pokemonball} alt='pokemonball' width={30} />
          <p className='ss:text-lg text-sm underline font-bold font-mono text-black self-center'>
            My Collections
          </p>
        </div>
      </div>
      <div className='flex sm:flex-row flex-col justify-around items-center'>
        <div>
          <SearchBar onSearch={handleSearch} onClear={handleClear} />
          <img
            src={Professor}
            alt='professor'
            width={200}
            className='sm:m-1 sm:block m-auto hidden'
          />
        </div>
        <div className='p-5 ss:w-[500px] ss:mt-0 mt-4 w-[350px] bg-white rounded-lg'>
          {box.length === 0 ? (
            <p className='text-2xl font-bold font-mono text-center'>
              There is no pokemons!
            </p>
          ) : (
            <div className='max-h-[300px] overflow-y-scroll'>
              {filteredData.map((p) => (
                <div
                  key={p.id}
                  className={`w-full flex justify-start items-center ${
                    p.type === 'grass'
                      ? 'bg-green-500'
                      : p.type === 'water'
                      ? 'bg-blue-500'
                      : 'bg-red-500'
                  } mt-2`}
                >
                  <img src={p.imageUrl} alt='pokemon' className='w-20' />
                  <p className='text-white font-mono text-[30px] text-bold'>
                    {p.name}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;
