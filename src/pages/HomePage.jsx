import React, { Component } from 'react';
import Card from '../components/Card';
import NavBar from '../components/NavBar';
import axios from 'axios';
import { withRouter } from "../withRouter";
// 

class HomePage extends Component {
  state = {
    title: [],
    page: 1,
  };

  componentDidMount() {
    this.getData();
    
  };

  
  getData(page){
    const self = this;
    axios
      .get(`https://api.themoviedb.org/3/movie/now_playing?api_key=47182bd87a80c318c05c57ae7d42b9e2&language=en-US&page=${page}`)
      .then(function (response) {
        self.setState({
          title: response.data.results,
        });
      })
      .catch(function (error) {
        alert(error);
      });
  };

  handleDetailPage(item) {
    this.props.navigate("/detail", {
      state: {
        title:item.title,
        image:item.poster_path,
        backdrop_path:item.backdrop_path,
        popularity:item.popularity,
        lang:item.original_language,
        overview:item.overview,
        vote_count:item.vote_count,
        vote_average:item.vote_average,
        release_date:item.release_date
      },
    });
  }

  previousPage(){
    if(this.state.page>1){
      this.setState({
        page: this.state.page - 1
      })}
    this.getData(this.state.page)
  };
  
  nextPage(){
      this.setState({
        page: this.state.page + 1
      })
      this.getData(this.state.page)
  };

  render() {
    return (
      <>
      <NavBar/>
      <div className="px-6 py-6 bg-gradient-to-r from-teal-400 to-blue-800 h-auto w-full">
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3'>
        

        {this.state.title.map((item, index) => {
            return (
              <div key={index}>
              <Card title={item.title} image={item.poster_path} backdrop_path={item.backdrop_path} rating={item.vote_average} popularity={item.popularity} lang={item.original_language} vote_count={item.vote_count} release_date={item.release_date} overview={item.overview} vote_average={item.vote_average} klik={()=>this.handleDetailPage(item)}/>
              </div>
            );
          })}


        </div>
        <p>Halaman :{this.state.page}</p>
        <div className='flex justify-center'>
          <button className ='rounded-full mr-2 w-36 text-white bg-blue-700/50 font-bold' onClick={(value) => this.previousPage(value)}>Previous Page</button>
          <button className ='rounded-full w-36 text-white bg-blue-700/50 font-bold' onClick={(value) => this.nextPage(value)}>Next Page</button>
        </div>
      </div>
      </>
    )
  }
}

export default withRouter(HomePage);