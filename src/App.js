
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [playerName, setPlayerName] = useState()
  const [playerPic, setPlayerPic] = useState()

  const fetchData =  () => {
    // const imagesApi = 'https://images-api.nasa.gov/asset/as11-40-5874';
    // const nasaApi = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key='your_api_key'';

    // const getNasaApi =  axios.get(nasaApi).then((res)=> console.log(res));
    const getNasaApi = axios.get(nasaApi);
    const getPicApi = axios.get(imagesApi);
    axios.all([getNasaApi, getPicApi]).then(
      axios.spread((...allData)=>{
        const axiosGetNasaApi = allData[0].data.photos.map((i)=>{
          return i.img_src
        })
        const axiosGetPicApi = allData[1].data

        setPlayerName(axiosGetNasaApi);
        setPlayerPic(axiosGetPicApi);
      })
    )
    // console.log(getNasaApi.data);
    // console.log('pp',getPicApi);
  }

  console.log('axiosGetNasaApi',playerName);
  console.log('axiosGetPicApi',playerPic);

  // function handleClick() {
  //   fetchData()
  // }

  useEffect(()=>{
    fetchData()
    console.log('Working');
    
  }, [])

  return (
    <div className="App">
      
      {/* <button onClick={handleClick}>Click</button> */}
      Nasa Api Mars Rover : <img style={{height:'200px', width:'200px'}} src={playerName} />
      <div>
      Nasa Pic:<img style={{height:'200px', width:'200px'}} src={playerPic} />
      </div>
    </div>
  );
}
export default App;
