import React, { Component } from 'react'
import Card from '../components/Card'
import NavBar from '../components/NavBar'

export default class HomePage extends Component {
  render() {
    const listNews = [
        {
          image:
            "https://p4.wallpaperbetter.com/wallpaper/780/49/86/saitama-one-punch-man-anime-gloves-wallpaper-preview.jpg",
          title: "Saitama menang melawan Garou",
        },
        {
            image:
              "https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2022/07/26/3198136442.jpeg",
            title: "Itachi menantang saitama untuk duel",
          },
        {
          image:
            "https://p4.wallpaperbetter.com/wallpaper/780/49/86/saitama-one-punch-man-anime-gloves-wallpaper-preview.jpg",
          title: "Saitama menang melawan Garou",
        },
        {
            image:
              "https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2022/07/26/3198136442.jpeg",
            title: "Itachi menantang saitama untuk duel",
          },
        {
          image:
            "https://p4.wallpaperbetter.com/wallpaper/780/49/86/saitama-one-punch-man-anime-gloves-wallpaper-preview.jpg",
          title: "Saitama menang melawan Garou",
        },
        {
            image:
              "https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2022/07/26/3198136442.jpeg",
            title: "Itachi menantang saitama untuk duel",
          },
        {
          image:
            "https://p4.wallpaperbetter.com/wallpaper/780/49/86/saitama-one-punch-man-anime-gloves-wallpaper-preview.jpg",
          title: "Saitama menang melawan Garou",
        },
        {
            image:
              "https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2022/07/26/3198136442.jpeg",
            title: "Itachi menantang saitama untuk duel",
          },
        ]
    return (
      <>
      <NavBar/>
      <div className="px-6 py-6 bg-gradient-to-r from-cyan-500 to-blue-500 h-auto">
        <div className='grid grid-cols-6 gap-3'>
      {listNews.map((item) => {
          return <Card image={item.image} title={item.title} />;
        })}
        </div>
      </div>
      </>
    )
  }
}

