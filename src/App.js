import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Navbar from './components/Navbar'
import React, { Component } from 'react'
import News from './components/News';
import About from './components/About';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 12

  apiKey = process.env.REACT_APP_NEWS_API
  state = {
    progress: 0
  }
  setProgress = (progress)=>{
    this.setState({
      progress: progress
    })
  }
  render() {
    return (
      <Router>
        <div>
          <Navbar title="NewsApp" />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            onLoaderFinished={() => this.setProgress(0)}
          />
          <Routes>
            <Route exact path='/' element={<News apiKey={this.apiKey} setProgress = {this.setProgress} pageSize={this.pageSize} key="general" country="in" category="general" heading="General" />} />
            <Route exact path='/about' element={<About key="About" />} />
            <Route exact path='/general' element={<News apiKey={this.apiKey} setProgress = {this.setProgress} key="general" pageSize={this.pageSize} country="in" category="general" />} />
            <Route exact path='/business' element={<News apiKey={this.apiKey} setProgress = {this.setProgress} key="business" pageSize={this.pageSize} country="in" category="business" heading="Business" />} />
            <Route exact path='/entertainment' element={<News apiKey={this.apiKey} setProgress = {this.setProgress} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" heading="Entertainment" />} />
            <Route exact path='/health' element={<News apiKey={this.apiKey} setProgress = {this.setProgress} key="Health" pageSize={this.pageSize} country="in" category="health" heading="Health" />} />
            <Route exact path='/science' element={<News apiKey={this.apiKey} setProgress = {this.setProgress} key="science" pageSize={this.pageSize} country="in" category="science" heading="Science" />} />
            <Route exact path='/sports' element={<News apiKey={this.apiKey} setProgress = {this.setProgress} key="sports" pageSize={this.pageSize} country="in" category="sports" heading="Sports" />} />
            <Route exact path='/technology' element={<News apiKey={this.apiKey} setProgress = {this.setProgress} key="technology" pageSize={this.pageSize} country="in" category="technology" heading="Technology" />} />
          </Routes>
        </div>
      </Router>
    )
  }
}

