import React, { Component } from 'react';
import './styles.css';
import Content from './Content';
import ContentComposer from './ContentComposer'




class Composer extends Component {
	constructor(props){
		super(props);
		this.state={
			title:"title",
			content:"content here goes"
		}

		}


	render(){


		return(
		<div className='composer'>
			<h2>Write Arrticle here</h2>
		<ContentComposer onArticleDataReady={(title, content)=>{
			this.setState({
				title: title,
				content: content
			})
		}}/>
		<h3 className='latest-articles'>Latest Articles</h3>
		<Content title = {this.state.title} content={this.state.content}/>
		</div>
		);
	}
}
export default Composer;
