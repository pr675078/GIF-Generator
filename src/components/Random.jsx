import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from './Spinner';

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

const Random = () => {
  const [gif, setGif] = useState('');
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    setLoading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const output = await axios.get(url);
    const gifUrl = output.data.data.images.downsized_large.url + "?t=" + Date.now();
    setGif(gifUrl);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function clickHandler() {
    fetchData();
  }

  return (
    <div className="random flex flex-col w-72 sm:w-80 md:w-96 bg-gray-800 text-white rounded-2xl items-center shadow-lg mt-20 md:mt-0 max-h-[80vh] overflow-hidden md:overflow-visible">
      <div className="mt-5 pb-3 font-semibold text-lg md:text-xl">A Random GIF</div>

      {loading ? (
        <Spinner />
      ) : (
        <div className="px-4">
          <img key={gif} src={gif} alt="Gif" className="w-60 h-60 md:w-72 md:h-72 rounded-2xl object-contain" />
        </div>
      )}

      <div className="mt-4 mb-6">
        <button
          onClick={clickHandler}
          className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 cursor-pointer text-sm md:text-base"
        >
          GENERATE
        </button>
      </div>
    </div>
  )
}

export default Random
