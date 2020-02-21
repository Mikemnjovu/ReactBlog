import React from 'react'

export class Footer extends React.Component {


	// const copywiteDate = () => Date.()

	render() {
	
	const copywriteDate = Date.getFullYear


		return (
	  	<div className='footer-container'>
	  		<div className='header'>
	  		 	<h2>Contents</h2>
	         	 <a href='google.com'>Home</a>
	         	 <br/>
	         	 <a href='google.com'>Rss Feed|</a>
	         	 <br/>
	         	 <a href='google.com'>Write Areticle|</a>
	        </div>
	       	<div className='header'>
	  		 	<h2>Contents</h2>
	         	 <a href='google.com'>Contact us</a>
	         	 <br/>
	         	 <a href='google.com'>About us|</a>
	         	 <br/>
	         	 <a href='google.com'>Copyright{copywriteDate}</a>
	        </div>

	    </div>
		)
	}
}

export default Footer;