import React, { Component } from 'react';
import Card from '../components/Card';
import NavBar from '../components/NavBar';
import axios from 'axios';

export default class HomePage extends Component {
  state = {
    title: [],
  };

  componentDidMount() {
    const self = this;
    axios
      .get(`https://api.themoviedb.org/3/movie/now_playing?api_key=47182bd87a80c318c05c57ae7d42b9e2&language=en-US&page=1`)
      .then(function (response) {
        console.log(response.data.results);
        self.setState({
          title: response.data.results,
        });
      })
      .catch(function (error) {
        alert(error);
      });
  };

  render() {
    return (
      <>
      <NavBar/>
      <div className="px-6 py-6 bg-gradient-to-r from-cyan-500 to-blue-500 h-auto w-full">
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 md:grid-cols-4 lg:grid-cols-6 gap-3'>
        {this.state.title.map((item, index) => {
            return (
              <div key={index}>
              <Card title={item.title} image={item.poster_path}/>
              </div>
            );
          })}
        </div>
      </div>
      </>
    )
  }
}

