import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import { withRouter } from "../withRouter";


class DetailMovie extends Component {
  render() {
    return (
      <>
      <NavBar/>
      <div className="text-white px-6 py-6 bg-gradient-to-r from-cyan-500 to-blue-500 h-screen">
          <h1 className="text-center font-bold">ini judul{this.props.location.state.lang}</h1>
        <div className='flex'>

        <img src="https://p4.wallpaperbetter.com/wallpaper/780/49/86/saitama-one-punch-man-anime-gloves-wallpaper-preview.jpg" className='h-80' alt='gambar'/>
        <div>
          <h2>ini subjudul</h2>
          <p>Genre</p>
          <p>Tanggal Rilis</p>
          <p>Durasi</p>
          <p>Popularitas</p>
          <p>Perusahaan yang membuat</p>
          <p>Status: Rilis/Belum Rilis</p>
          {/* <p>Bahasa: {this.lang}</p> */}
          <p>Anggaran Film</p>
          <p>Pendapatan Film</p>
        </div>
      </div>
      <h2>Sinopsis</h2>
      {/* <p className="text-justify">{this.overview}</p> */}
      </div>
      </>
    )
  }
}
export default withRouter(DetailMovie);