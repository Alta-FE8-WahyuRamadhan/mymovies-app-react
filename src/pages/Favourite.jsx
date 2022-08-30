import React, { Component } from 'react'
import NavBar from '../components/NavBar'

export default class Favourite extends Component {
  render() {
    return (
        <>
        <NavBar/>
        <div className="px-6 py-6 bg-gradient-to-r from-cyan-500 to-blue-500 h-screen">
            
            <p>Ini halaman favourite</p>
        </div>
        </>
    )
  }
}
