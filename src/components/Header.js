import React, {Component} from 'react'
import {Route, Router, Switch} from 'react-router';
export class Header extends Component {
	render() {
		return (
  		 <div className='header'>
         	 <h1>The Blog</h1> 
         	 <Router>
	         	 <a href='google.com'>|Home|</a>
	         	 <a href='google.com'>Rss Feed|</a>
	         	 <a href='google.com'>Write Areticle|</a>

         	</Router> 
        </div>
		)
	}
}

export default Header