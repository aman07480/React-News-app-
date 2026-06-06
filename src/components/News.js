import React, { Component } from 'react'
// import Newsitem from './components/Newsitem';
import Newsitem from './Newsitem'
export class news extends Component {
  render() {
    return (
      <div className="container my-3">
        <h2>News Monkey-Top Headlines</h2>
        <div className="row">
          <div className="col-md-4">
               <newsitem  title="myTitle" description='mydesc' imageUrl="https://www.dreamstime.com/striking-silhouette-two-cricket-players-protective-gear-standing-ready-stance-holding-cricket-bats-high-poised-image437356421"/>
          </div>

          <div className="col-md-4">
                <newsitem  title="myTitle" description='mydesc'/>
          </div>

          <div className="col-md-4">
                <newsitem  title="myTitle" description='mydesc'/>
          </div>
      </div>
        
        <Newsitem/>
        <Newsitem/>
      </div>
    )
  }
}

export default news
