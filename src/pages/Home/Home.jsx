import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon  from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'
import ExtraTitleCards from '../../components/ExtraTitleCards/ExtraTitleCards'

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img'/>
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img'/>
          <p>Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy.</p>
          <div className="hero-btns">
            <button className='btn'>
              <img src={play_icon} alt="" />Play
            </button>
            <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
          </div>
          <TitleCards/>
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
        <TitleCards title={"Only On Netflix"} category={"popular"}/>
        <TitleCards title={"Your Next Watch"} category={"upcoming"}/>
        <TitleCards title={"Top Pics For You"} category={"now_playing"}/>
        <ExtraTitleCards title={"Tv Channels"} category={"airing_today"}/>
        <ExtraTitleCards title={"Watch For A While"} category={"on_the_air"}/>
        <ExtraTitleCards title={"Familiar Tv Favorites"} category={"popular"}/>
        <ExtraTitleCards title={"Top Rated"} category={"top_rated"}/>
      </div>

      <Footer/>  
    </div>
  )
}

export default Home
