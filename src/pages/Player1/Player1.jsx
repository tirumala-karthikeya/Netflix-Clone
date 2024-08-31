import React, { useEffect, useState } from 'react'
import '../Player/Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: '',
    key: '',
    published_at: '',
    typeof: ''
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTg3Y2ExMDIzMmZiYzA2YjM1ZDRmZTVhODFjYjYwMyIsIm5iZiI6MTcyMTcxMTE4NC41NjM0ODEsInN1YiI6IjY2OWYzNzk5OTFkMTE5NzllZTUwNGE4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n34qlJNkGg2sBUmRpup_hEVXqaovDkGDhQCdcSBKzDI'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`, options)
      .then(response => response.json())
      .then(data => {
        if (data.results && data.results.length > 0) {
          const video = data.results[0];
          setApiData({
            name: video.name,
            key: video.key,
            published_at: video.published_at,
            typeof: video.type
          });
        }
      })
      .catch(err => console.error('Error fetching data:', err));
  }, [id]);

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="Back" onClick={() => navigate(-2)} />
      <iframe
        width='90%'
        height='90%'
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title='trailer'
        frameBorder='0'
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.typeof}</p>
      </div>
    </div>
  );
};

export default Player;
