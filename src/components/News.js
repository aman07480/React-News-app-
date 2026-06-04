import React, { Component } from 'react'
// import Newsitem from './components/Newsitem';
import Newsitem from './Newsitem'
export class news extends Component {
  render() {
    return (
      <div className="container my-3">
        <h2>News Monkey -Top Headlines</h2>
        
        <newsitem  title='myTitle' description='mydesc' />
        <Newsitem/>
      </div>
    )
  }
}

export default news
