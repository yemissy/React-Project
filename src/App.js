import React, { Component } from 'react';
import logo from './logo.svg';
import Welcome from './Components/Welcome.js';
import Categories from './Components/Categories.js';
import axios from 'axios';
import './App.css';
import Collections from './Components/Collections.js';
import ServiceForm from './Components/ServiceForm.js';
import Data from './Components/Data.js';
console.log (Data);



// https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY

// General Search URL =https://api.unsplash.com/search/photos?page=1&query=office&client_id=c80e91a61ca21927bb319d90e5e6c422641af5bd4a6f3fa66a17efacad6e0684
//General non-search url ="https://api.unsplash.com/photos/?client_id=c80e91a61ca21927bb319d90e5e6c422641af5bd4a6f3fa66a17efacad6e0684"
// Weddings URL =https://api.unsplash.com/search/photos?page=1&query=wedding&client_id=c80e91a61ca21927bb319d90e5e6c422641af5bd4a6f3fa66a17efacad6e0684
//My created Collections url =https://api.unsplash.com/users/mysterymi/collections?client_id=c80e91a61ca21927bb319d90e5e6c422641af5bd4a6f3fa66a17efacad6e0684
//https://api.unsplash.com/collections/3520078?client_id=c80e91a61ca21927bb319d90e5e6c422641af5bd4a6f3fa66a17efacad6e0684

//URL for the array my collections photos
const COVER_URL= 'https://api.unsplash.com/collections/3520078/photos?client_id=c80e91a61ca21927bb319d90e5e6c422641af5bd4a6f3fa66a17efacad6e0684';
const API_KEY=process.env.REACT_APP_API_KEY;
const WEDDING_URL ='https://api.unsplash.com/search/photos?page=1&query=wedding&client_id=c80e91a61ca21927bb319d90e5e6c422641af5bd4a6f3fa66a17efacad6e0684';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      currentPage:'welcome',
      categoryCover: [],
      titles:[
        {name: 'The Light Series'},
        {name: 'Engagements Shoots'},
        {name: 'Baby Shower'},
        {name: 'Weddings'},
        {name: 'Birthdays'},
        {name: 'Potraits'}
      ],
      query:'wedding',
      collections:[],
    }
    this.updatePage=this.updatePage.bind(this);
    this.updateCollection=this.updatePage.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }



  switcPages(){
    const page =this.state.currentPage;

    switch(page){
      case 'mainScreen' :
        return <div className="container"><Categories coverPics={this.state.categoryCover} titles={this.state.titles}
        updateCollection={this.updateCollection} renderThis ={this.updatePage}/></div>
      case 'mainScreen1' :
        return <div className="container"><Categories coverPics={this.state.categoryCover} titles={this.state.titles}
        updateCollection={this.updateCollection} renderThis ={this.updatePage}/></div>
      case 'request' :
        return <div className="container1"><ServiceForm titles={this.state.titles} renderThis ={this.updatePage}
        handleSubmit={this.handleSubmit}/></div>
        case 'weddings' :
        return <div className="collect"><Collections  getCol={this.getCollection()} collect={this.state.collections} renderThis ={this.updatePage}/></div>
        case 'book me':
        return <div className="container1"><ServiceForm titles={this.state.titles} renderThis ={this.updatePage}
        handleSubmit={this.handleSubmit}/></div>
        default :
          return <Welcome renderThis ={this.updatePage}/>
    }
  }

  handleSubmit(e){
    e.preventDefault();
    const page =this.state.currentPage;
    switch(page){
      case 'Submit' :
      return <div className="collect"><Collections  getCol={this.getCollection()} collect={this.state.collections} renderThis ={this.updatePage}/></div>
    }
  }

  updatePage(page){
    this.setState({
      currentPage: page,
    });
  }


  async getCollection(){
    i+=1;
    let i =0;
    const collection= this.state.query;
    const weddings= await axios.get(WEDDING_URL);
    const response=weddings.data;
    this.setState({
      collections:response.results,
    })
    console.log(response.results)
}

  updateCollection(collection){
    this.setState({
      query:collection,
    });
  }


  async componentDidMount(){
    const covers = await axios.get(COVER_URL);
    this.setState({
      categoryCover: covers.data,
    })
    console.log(this.state.categoryCover)
  }

  render() {
    return (
      <div className="App">
        {this.switcPages()}
      </div>
    );
  }
}

export default App;
