import React, { Component } from 'react'
import Card from '../components/Card'
import NavBar from '../components/NavBar'

export default class HomePage extends Component {
  state = {
    image: '',
    title: "",
    rating:'',
  };
  render() {
    const listNews = [
        {
          image:
            "https://p4.wallpaperbetter.com/wallpaper/780/49/86/saitama-one-punch-man-anime-gloves-wallpaper-preview.jpg",
          title: "One Punch Man S1",
          rating:'8/10'
        },
        {
            image:
              "https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2022/07/26/3198136442.jpeg",
            title: "Itachi vs Saitama",
            rating:'8/10'
          },
        {
          image:
            "https://w0.peakpx.com/wallpaper/759/390/HD-wallpaper-itachi-uchiha-kakashi-madara-mangekyo-sharingan-minato-sharingan.jpg",
          title: "Itachi Berkhianat",
          rating:'8/10'
        },
        {
          image:
            "https://m.media-amazon.com/images/M/MV5BNGYyNmI3M2YtNzYzZS00OTViLTkxYjAtZDIyZmE1Y2U1ZmQ2XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
          title: "Your Name",
          rating:'8/10'
        },
        {
          image:
            "https://p4.wallpaperbetter.com/wallpaper/780/49/86/saitama-one-punch-man-anime-gloves-wallpaper-preview.jpg",
          title: "One Punch Man S2",
          rating:'8/10'
        },
        {
            image:
              "https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2022/07/26/3198136442.jpeg",
            title: "Itachi vs Saitama",
            rating:'8/10'
          },
        {
          image:
            "https://w0.peakpx.com/wallpaper/759/390/HD-wallpaper-itachi-uchiha-kakashi-madara-mangekyo-sharingan-minato-sharingan.jpg",
          title: "Itachi Berkhianat",
          rating:'8/10'
        },
        {
          image:
            "https://m.media-amazon.com/images/M/MV5BNGYyNmI3M2YtNzYzZS00OTViLTkxYjAtZDIyZmE1Y2U1ZmQ2XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
          title: "Your Name",
          rating:'8/10'
        },
        {
          image:
            "https://p4.wallpaperbetter.com/wallpaper/780/49/86/saitama-one-punch-man-anime-gloves-wallpaper-preview.jpg",
          title: "One Punch Man S3",
          rating:'8/10'
        },
        {
            image:
              "https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2022/07/26/3198136442.jpeg",
            title: "Itachi vs Saitama",
            rating:'8/10'
          },
        {
          image:
            "https://w0.peakpx.com/wallpaper/759/390/HD-wallpaper-itachi-uchiha-kakashi-madara-mangekyo-sharingan-minato-sharingan.jpg",
          title: "Itachi Berkhianat",
          rating:'8/10'
        },
        {
          image:
            "https://m.media-amazon.com/images/M/MV5BNGYyNmI3M2YtNzYzZS00OTViLTkxYjAtZDIyZmE1Y2U1ZmQ2XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
          title: "Your Name",
          rating:'8/10'
        },
        ]
    return (
      <>
      <NavBar/>
      <div className="px-6 py-6 bg-gradient-to-r from-cyan-500 to-blue-500 h-auto w-full">
        <div className='grid grid-cols-6 gap-3'>
      {listNews.map((item) => {
          return <Card image={item.image} title={item.title} rating={item.rating} />;
        })}
        </div>
      </div>
      </>
    )
  }
}

