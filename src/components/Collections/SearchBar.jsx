import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { Tooltip } from 'react-tooltip';

const SearchBar = ({ data, onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const [selectedType, setSelectedType] = useState('');

  const handleSearch = () => {
    const filteredData = data.filter((pokemon) => {
      const nameMatches = pokemon.name
        .toLowerCase()
        .includes(inputValue.toLowerCase());
      const typeMatches = selectedType === '' || pokemon.type === selectedType;
      return nameMatches && typeMatches;
    });

    onSearch(filteredData);
  };

  const handleClear = () => {
    setInputValue('');
    setSelectedType('');
    onSearch(data);
  };

  return (
    <div className='flex flex-col my-5'>
      <div className='flex'>
        <div className='flex items-center  bg-slate-500 p-2 rounded-lg'>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder='Enter Pokemon Name'
            type='text'
            name='searchInput'
            className='py-2 pl-6 pr-3 border rounded-lg border-slate-600 bg-slate-200 focus:outline-none'
          />
          <Tooltip id='search-tooltip' />
          <button
            onClick={handleSearch}
            data-tooltip-id='search-tooltip'
            data-tooltip-content='Search'
            className='inline-flex items-center p-2 ml-2 bg-white border rounded-lg border-slate-600'
          >
            <FaSearch className='text-2xl text-red-500' />
          </button>
        </div>

        <button className='text-2xl text-red-500 ml-3' onClick={handleClear}>
          <ImCross />
        </button>
      </div>
      <div className='mt-3'>
        <label htmlFor='' className='text-xl font-mono font-bold'>
          Type :
        </label>
        <select
          className='px-4 py-3 mx-3 bg-white-200 rounded-lg w-[300px]'
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value=''>Any</option>
          <option value='grass'>grass</option>
          <option value='water'>water</option>
          <option value='fire'>fire</option>
        </select>
      </div>
    </div>
  );
};

export default SearchBar;
