import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';
import CustomUse from '../hooks/CustomUse';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {

  // const [gif, setGif] = useState('');
  // const [loading, setLoading] = useState(false);

  // async function fetchData() {
  //   setLoading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  //   const { data } = await axios.get(url);
  //   const imageSource = data.data.images.downsized_large.url;
  //   setGif(imageSource);
  //   setLoading(false);
  // }

  // useEffect(() => {
  //   fetchData();
  // }, [])

  const{gif, loading, fetchData}=CustomUse();

  function buttonHandler() {
    fetchData();
  }
  return (
    <div className='flex flex-col w-1/2 bg-green-500 font-bold text-xl
    rounded-md mt-5 items-center justify-center gap-3 '>
      <h1 className='underline mt-2'>A RANDOM GIF</h1>
      <div>
        {
          loading ? (<Spinner />) : (<img src={gif}/>)
        }
      </div>
      <button
        className="bg-white w-[80%] rounded-md font-semibold text-md mb-3"
        onClick={buttonHandler}>GENERATE</button>
    </div>
  )
}

export default Random